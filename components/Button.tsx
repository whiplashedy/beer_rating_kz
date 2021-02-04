import React, {useState} from 'react';

import {makeStyles} from "@material-ui/core";

import {List} from "@material-ui/icons";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
 button:{
     maxHeight: 100
 }
}));

const ButtonToggle = ({view, setView}) => {
    const classes = useStyles();
    return (
        <>
            <Button
                variant={view ? 'contained' : 'outlined'}
                color="primary"
                className={classes.button}
                startIcon={<List/>}
                onClick={() => {
                    setView(!view)
                }}
            >
                Все категории
            </Button>
        </>
    )
}

export default ButtonToggle;
