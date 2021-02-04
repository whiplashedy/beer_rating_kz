import {Field, Form, Formik} from "formik";
import router, {useRouter} from 'next/router'
import React, {useState} from 'react';

import classes from '../styles/categories.module.css'

import {IconButton, InputBase, makeStyles} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import {reset} from "colorette";
import ProductCard from "./ProductCard";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    }
}));

const SearchModule = ({categoryData}) => {

    const classes = useStyles();

    const {query} = useRouter();

    const initialValues = {
        item: query.category || '',
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={(values) => {
                router.push({
                    pathname: '/categories',
                    query: {...values, page: 1},
                }, undefined, {shallow: true})
                reset('');
            }
            }>
                {
                    ({values, setValues}) => (
                        <>
                            <Form>
                                <Paper component="form" className={classes.root}>
                                    <Field name="item" as={InputBase} className={classes.input}
                                           placeholder="Введите название товара"></Field>
                                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                        <SearchIcon/>
                                    </IconButton>
                                </Paper>
                            </Form>
                        </>
                    )
                }
            </Formik>
        </>
    )
}

export default SearchModule;
