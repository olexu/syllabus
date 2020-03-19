// import styles from './ToastCard.module.scss';

import React, { useCallback } from "react";
import { Button, ButtonProps, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import ToastStatusEnum from "../../../constants/ToastStatusEnum";
import IToast from "../../../stores/toasts/models/IToast";
import * as ToastsAction from "../../../stores/toasts/ToastsAction";

interface IProps {
    readonly item: IToast;
}

const ToastCard: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
    const dispatch: Dispatch = useDispatch();

    const onClickRemoveNotification = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
            dispatch(ToastsAction.removeById(props.item.id));
        },
        [dispatch, props.item.id],
    );

    const buttonColor = (): "danger" | "warning" | "success" => {
        switch (props.item.type) {
            case ToastStatusEnum.Success:
                return "success";
            case ToastStatusEnum.Warning:
                return "warning";
            default:
                return "danger";
        }
    };

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Body>
                <Card.Title>{props.item.type}</Card.Title>
                <Card.Text>{props.item.message}</Card.Text>
                <Button variant={buttonColor()} onClick={onClickRemoveNotification}>
                    Close
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ToastCard;
