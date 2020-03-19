import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, NavItem } from "react-bootstrap";
import { getTranslate } from "react-localize-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import RouteEnum from "../../../constants/RouteEnum";
import * as keys from "../../../localization/keys";
import IStore from "../../../models/IStore";
import LanguageToggle from "./components/LanguageToggle";

interface IProps {}

const MainNav: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
    const translate = getTranslate(useSelector((state: IStore) => state.localize));

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src="./img/logo.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href={RouteEnum.Home}>{translate(keys.Syllabus)}</Nav.Link>
                        <Nav.Link href={RouteEnum.Teachers}>{translate(keys.Teachers)}</Nav.Link>
                    </Nav>
                    <Form inline>
                        <LanguageToggle />
                    </Form>
                    <Form inline>
                        <FormControl type="text" placeholder={translate(keys.Search) as string} className="mr-sm-2" />
                        <Button variant="primary">{translate(keys.Search) as string}</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MainNav;
