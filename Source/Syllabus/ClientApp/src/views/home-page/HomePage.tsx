import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { getTranslate } from "react-localize-redux";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import * as keys from "../../localization/keys";
import IStore from "../../models/IStore";
import { selectForms, selectSemesters } from "../../selectors/catalogs/CatalogsSelector";
import CatalogsActions from "../../stores/catalogs/CatalogsActions";

interface IProps {}

const HomePage: React.FC<IProps> = () => {
    const dispatch: Dispatch = useDispatch();

    const translate = getTranslate(useSelector((state: IStore) => state.localize));

    const semesters = useSelector(selectSemesters);
    const forms = useSelector(selectForms);

    useEffect(() => {
        dispatch(CatalogsActions.requestSemesters());
        dispatch(CatalogsActions.requestForms());
    }, [dispatch]);

    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Group controlId="exampleForm.SelectCustom1">
                            <Form.Label>{translate(keys.Year)}</Form.Label>
                            <Form.Control as="select">
                                <option>2019/2020</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.SelectCustom2">
                            <Form.Label>{translate(keys.Form)}</Form.Label>
                            <Form.Control as="select">
                                {forms.map(item => (
                                    <option key={item.id}>{item.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="exampleForm.SelectCustom3">
                            <Form.Label>{translate(keys.Semester)}</Form.Label>
                            <Form.Control as="select">
                                {semesters.map(item => (
                                    <option key={item.id}>{item.name}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default HomePage;
