// import styles from './ToastCard.module.scss';

import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import ToastStatusEnum from "../../../constants/ToastStatusEnum";
import IToast from "../../../stores/toasts/models/IToast";
import * as ToastsActions from "../../../stores/toasts/ToastsAction";

interface IProps {
    readonly item: IToast;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: 275,
            marginTop: theme.spacing(1),
        },
        title: {
            fontSize: 14,
        },
    }),
);

const ToastCard: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
    const classes = useStyles();
    const dispatch: Dispatch = useDispatch();

    const onClickRemoveNotification = useCallback(
        (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
            dispatch(ToastsActions.removeById(props.item.id));
        },
        [dispatch, props.item.id],
    );

    const buttonColor = (): "primary" | "secondary" => {
        switch (props.item.type) {
            case ToastStatusEnum.Success:
                return "primary";
            case ToastStatusEnum.Warning:
                return "secondary";
            default:
                return "secondary";
        }
    };

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {props.item.type}
                </Typography>
                <Typography variant="h5" component="h2">
                    {props.item.message}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={onClickRemoveNotification} color={buttonColor()}>
                    Close
                </Button>
            </CardActions>
        </Card>
    );
};

export default ToastCard;
