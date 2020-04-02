import React from "react";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

interface IProps {
    readonly isActive?: boolean;
    readonly className?: string;
}

const useStyles = makeStyles(theme => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
    },
}));

const LoadingIndicator: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
    const { isActive = false } = props; // defaultProps example
    const { className, children } = props;
    const classes = useStyles();
    return (
        <div className={className}>
            {isActive && (
                <Backdrop className={classes.backdrop} open={true}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            )}
            {children}
        </div>
    );
};

export default LoadingIndicator;
