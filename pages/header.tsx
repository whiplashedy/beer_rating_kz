import React from 'react';
import {GetStaticProps} from "next";

import SearchModule from '../components/SearchModule';
import Categories from "../components/Categories";
import { getCategory } from '../data/getCategory';
import ButtonToggle from '../components/Button';

import {Grid} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { DataModel } from '../interfaces/data-model';

interface DataProps{
    data: DataModel[];
}

export default function HeaderSelector({data}: DataProps) {
    const [view, setView] = React.useState(false);
    return (
        <>
            <Grid container spacing={3}>
                <Grid item sm={2}>

                </Grid>
                <Grid item xs={12} md={10}>
                    <Paper>Navbar</Paper>
                </Grid>
                <Grid item sm={2}>
                </Grid>
                <Grid container item xs={12} md={2}>
                    <ButtonToggle view={view} setView={setView}/>
                </Grid>
                <Grid item xs={12} md={8}>
                    <SearchModule categoryData={data}/>
                </Grid>
                <Grid item md={2}>
                </Grid>
                <Grid item xs={12} md = {8}>
                    {view ?<Categories categoryData = {data}/>: null}
                </Grid>
            </Grid>
                <Grid/>
                </>
                )
}

export const getStaticProps: GetStaticProps = async () =>{
    let data = await getCategory();
    console.log(data);
    return {
        props:{
            data
        }
    }
}
