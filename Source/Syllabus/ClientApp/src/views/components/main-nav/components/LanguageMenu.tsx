import React from "react";
import { getActiveLanguage, getLanguages, setActiveLanguage } from "react-localize-redux";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LanguageIcon from "@material-ui/icons/Language";

import IStore from "../../../../models/IStore";

const LanguageMenu = () => {
    const dispatch = useDispatch();

    const languages = useSelector((state: IStore) => getLanguages(state.localize), shallowEqual);
    const activeLang = useSelector((state: IStore) => getActiveLanguage(state.localize), shallowEqual);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, code: string) => {
        dispatch(setActiveLanguage(code));
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                aria-controls="lang-menu"
                aria-haspopup="true"
                onClick={handleBtnClick}
                variant="contained"
                color="primary"
                disableElevation
                startIcon={<LanguageIcon />}
                endIcon={<ArrowDropDownIcon />}
            >
                <Hidden smDown={true}>{activeLang.name}</Hidden>
            </Button>
            <Menu id="lang-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
                {languages.map(lang => (
                    <MenuItem
                        onClick={event => {
                            handleMenuItemClick(event, lang.code);
                        }}
                        key={lang.code}
                    >
                        {lang.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default LanguageMenu;
