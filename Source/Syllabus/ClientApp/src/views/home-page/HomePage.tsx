import React, { useEffect } from "react";
import { getTranslate } from "react-localize-redux";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import * as keys from "../../localization/keys";
import IStore from "../../models/IStore";
import { selectForms, selectSemesters } from "../../selectors/catalogs/CatalogsSelector";
import CatalogsActions from "../../stores/catalogs/CatalogsActions";

interface IProps {}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            width: "100%",
            margin: theme.spacing(1),
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

const HomePage: React.FC<IProps> = () => {
    const classes = useStyles();

    const dispatch: Dispatch = useDispatch();

    const forms = useSelector(selectForms, shallowEqual);
    const semesters = useSelector(selectSemesters, shallowEqual);

    const translate = getTranslate(useSelector((state: IStore) => state.localize));

    useEffect(() => {
        dispatch(CatalogsActions.requestSemesters());
        dispatch(CatalogsActions.requestForms());
    }, [dispatch]);

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="select-Year">{translate(keys.Year)}</InputLabel>
                        <Select
                            native
                            label={translate(keys.Year)}
                            inputProps={{
                                name: translate(keys.Year),
                                id: "select-Year",
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option>2019/2020</option>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="select-Form">{translate(keys.Form)}</InputLabel>
                        <Select
                            native
                            label={translate(keys.Form)}
                            inputProps={{
                                name: translate(keys.Form),
                                id: "select-Form",
                            }}
                        >
                            <option aria-label="None" value="" />
                            {forms.map(item => (
                                <option key={item.id}>{item.name}</option>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel htmlFor="select-Semestr">{translate(keys.Semester)}</InputLabel>
                        <Select
                            native
                            label={translate(keys.Semester)}
                            inputProps={{
                                name: translate(keys.Semester),
                                id: "select-Semestr",
                            }}
                        >
                            <option aria-label="None" value="" />
                            {semesters.map(item => (
                                <option key={item.id}>{item.name}</option>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;
