import React from "react";
import { getTranslate } from "react-localize-redux";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import SchoolIcon from "@material-ui/icons/School";

import RouteEnum from "../../../constants/RouteEnum";
import * as keys from "../../../localization/keys";
import IStore from "../../../models/IStore";
import LanguageToggle from "./components/LanguageMenu";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        logo: {
            marginRight: theme.spacing(2),
        },
        links: {
            flexGrow: 1,
            "& > * + *": {
                margin: theme.spacing(2),
            },
        },
    }),
);

const MainNav = () => {
    const translate = getTranslate(useSelector((state: IStore) => state.localize));
    const classes = useStyles();

    const [state, setState] = React.useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (event.type === "keydown" && ((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")) {
            return;
        }
        setState(open);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Hidden smDown>
                        <SchoolIcon fontSize="large" className={classes.logo} />
                        <Typography className={classes.links}>
                            <Link component={RouterLink} to={RouteEnum.Home} color="inherit">
                                {translate(keys.Syllabus)}
                            </Link>
                            <Link component={RouterLink} to={RouteEnum.Teachers} color="inherit">
                                {translate(keys.Teachers)}
                            </Link>
                        </Typography>
                    </Hidden>
                    <Hidden mdUp>
                        <Typography className={classes.links}>
                            <IconButton onClick={toggleDrawer(true)} color="inherit">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)} onClick={toggleDrawer(false)}>
                                <Button component={RouterLink} to={RouteEnum.Home} color="inherit">
                                    {translate(keys.Syllabus)}
                                </Button>
                                <Button component={RouterLink} to={RouteEnum.Teachers} color="inherit">
                                    {translate(keys.Teachers)}
                                </Button>
                            </Drawer>
                        </Typography>
                    </Hidden>
                    <LanguageToggle />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default MainNav;
