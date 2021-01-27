import Head from 'next/head'
import Image from 'next/image'
import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import BorderLinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { beers } from '../beer-data';

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
    },
}));
export default function Home() {
    const classes = useStyles();
    const [isShown, setIsShown] = useState(false);
    const [hoverData, setHoverData] = useState({});
    const xd = (data) => {
        setIsShown(true);
        setHoverData(data);
    }

    return (
        <div>
            <Head>
                <title>Beer Stats</title>
            </Head>
                <Grid container direction = "row" > {
                    beers.map((el) => {
                        return <Grid item md = {4}><Image
                            key={el.id}
                            src={el.photoUrl}
                            alt="Picture of the author"
                            width={200}
                            height={200}
                            onMouseEnter={() => xd(el)}
                            onMouseLeave={() => setIsShown(false)}
                        />
                        </Grid>
                    })
                }
                    {isShown && (
                        <div className={classes.root}>
                            <BorderLinearProgress variant="determinate" value={50}/>
                            {JSON.stringify(hoverData, null, 4)}
                        </div>
                    )}
                </Grid>

        </div>
    )
}
