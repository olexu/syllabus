import React from "react";
import { Spinner } from "react-bootstrap";

import styles from "./LoadingIndicator.module.scss";

interface IProps {
    readonly isActive?: boolean;
    readonly className?: string;
}

const LoadingIndicator: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
    const { isActive = false } = props; // defaultProps example
    const { className, children } = props;

    return (
        <div className={className}>
            {isActive && (
                <div className={styles.loaderContainer}>
                    <Spinner title="Loading" animation="grow" size="sm" />
                </div>
            )}
            {children}
        </div>
    );
};

export default LoadingIndicator;
