import React from "react";
import { getTranslate } from "react-localize-redux";
import { useSelector } from "react-redux";

import * as keys from "../../localization/keys";
import IStore from "../../models/IStore";
import styles from "./NotFoundPage.module.scss";

interface IProps {}

const NotFoundPage: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
    const translate = getTranslate(useSelector((state: IStore) => state.localize));

    return <div className={styles.wrapper}>{translate(keys.PageNotFound)}</div>;
};

export default NotFoundPage;
