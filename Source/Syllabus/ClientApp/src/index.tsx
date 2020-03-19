import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "./styles/index.scss";

import { createBrowserHistory, History } from "history";
import React from "react";
import ReactDOM from "react-dom";
import { addTranslationForLanguage, initialize, LocalizeProvider } from "react-localize-redux";
import { Provider } from "react-redux";
import { Store } from "redux";

import en from "./localization/en.json";
import uk from "./localization/uk.json";
import IStore from "./models/IStore";
import rootStore from "./stores/rootStore";
import App from "./views/App";

(async (window: Window): Promise<void> => {
    const initialState: Partial<IStore> = {};
    const history: History = createBrowserHistory();
    const store: Store<IStore> = rootStore(initialState, history);

    // Initialize redux localization support
    const languages = [
        { code: "uk", name: "Укр" },
        { code: "en", name: "Eng" },
    ];
    store.dispatch(initialize({ languages, options: { renderToStaticMarkup: false } }));
    store.dispatch(addTranslationForLanguage(uk, "uk"));
    store.dispatch(addTranslationForLanguage(en, "en"));

    const rootElement: HTMLElement | null = document.getElementById("root");
    const render = (Component: typeof App, el: HTMLElement | null): void => {
        ReactDOM.render(
            <Provider store={store}>
                <LocalizeProvider store={store}>
                    <Component history={history} dispatch={store.dispatch} />
                </LocalizeProvider>
            </Provider>,
            el,
        );
    };

    render(App, rootElement);
})(window);
