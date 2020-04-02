import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";

import { createBrowserHistory, History } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { addTranslationForLanguage, initialize, LocalizeProvider } from "react-localize-redux";
import { Provider } from "react-redux";
import { Store } from "redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";

import en from "./localization/en.json";
import ru from "./localization/ru.json";
import uk from "./localization/uk.json";
import IStore from "./models/IStore";
import rootStore from "./stores/rootStore";
import theme from "./theme";
import App from "./views/App";

(async (window: Window): Promise<void> => {
    const initialState: Partial<IStore> = {};
    const history: History = createBrowserHistory();
    const store: Store<IStore> = rootStore(initialState, history);

    // Initialize redux localization support
    const languages = [
        { code: "uk", name: "Українська" },
        { code: "en", name: "English" },
        { code: "ru", name: "Русcкий" },
    ];
    store.dispatch(initialize({ languages, options: { renderToStaticMarkup: false } }));
    store.dispatch(addTranslationForLanguage(uk, "uk"));
    store.dispatch(addTranslationForLanguage(en, "en"));
    store.dispatch(addTranslationForLanguage(ru, "ru"));

    const rootElement: HTMLElement | null = document.getElementById("root");
    const render = (Component: typeof App, el: HTMLElement | null): void => {
        ReactDOM.render(
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Provider store={store}>
                    <LocalizeProvider store={store}>
                        <Component history={history} dispatch={store.dispatch} />
                    </LocalizeProvider>
                </Provider>
            </ThemeProvider>,
            el,
        );
    };

    render(App, rootElement);
})(window);
