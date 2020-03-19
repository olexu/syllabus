import React from "react";
import { Button } from "react-bootstrap";
import { LocalizeContextProps, withLocalize } from "react-localize-redux";

const LanguageToggle = ({ languages, setActiveLanguage }: LocalizeContextProps) => {
    return (
        <>
            {languages.map(lang => (
                <Button
                    key={lang.code}
                    variant={lang.active ? "primary" : "light"}
                    size="sm"
                    className="mr-sm-2"
                    onClick={() => setActiveLanguage(lang.code)}
                >
                    {lang.name}
                </Button>
            ))}
        </>
    );
};

export default withLocalize(LanguageToggle);
