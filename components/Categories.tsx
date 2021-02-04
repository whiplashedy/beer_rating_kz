import {Form, Formik} from "formik";
import router, {useRouter} from 'next/router'
import React, {useState} from 'react';

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {convertToStr} from "../convertToStr";
import {DataModel} from "../interfaces/data-model";
import { Head } from "next/document";

interface DataProps{
    categoryData: DataModel[];
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: 200,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
}));

const Categories = ({categoryData}: DataProps) => {
    const classes = useStyles();
    const [isShown, setIsShown] = useState(false);
    const [hoverData, setHoverData] = useState([]);
    const [hoverCategory, setHoverCategory] = useState('');
    const xd = (data : DataModel) => {
        setIsShown(true);
        if(Array.isArray(data.subcategories)){
            setHoverData(data.subcategories);
        }
        else{
            setHoverData([]);
        }
        setHoverCategory(data.name)
    }
    const {query} = useRouter();

    const initialValues = {
        category: convertToStr(query.category) || 'all',
        id: convertToStr(query.id) || '0'
    }

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={(values) => {
                router.push({
                    pathname: '/header'
            }, undefined, {query: values.id})
            }}>
                {
                    ({values, setValues}) => (
                        <>
                            <Head>
                                <title>Header</title>
                            </Head>
                            <Form>
                                <Grid container direction="row" spacing={3}>
                                    <Grid item>
                                        {categoryData.map((el) => {
                                            return <div key={el.id}
                                                        onMouseEnter={() => {
                                                            if(el.id < 100){
                                                                xd(el);
                                                            }
                                                        }}
                                            >{el.id < 100 && el.name}</div>
                                        })}
                                    </Grid>
                                    <Grid container item direction="column">
                                        {isShown && hoverData.map((el) => {
                                            return <Grid key={el}>
                                                <button type="submit"
                                                        onClick={() => {
                                                            setValues({
                                                                category: el,
                                                                id: '5'
                                                            })
                                                        }}>{el}</button>
                                            </Grid>
                                        })}
                                    </Grid>
                                </Grid>
                            </Form>
                        </>
                    )
                }
            </Formik>
        </>
    )
}

export default Categories;
