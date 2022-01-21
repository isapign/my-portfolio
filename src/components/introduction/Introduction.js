import React from "react"
import { Button, Grid, Typography } from "@material-ui/core"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Toolbar from "../toolbar/Toolbar"

const Introduction = () => {
    return (
        <Grid container style={{marginTop: '15%'}}>
            <Grid item xs={12}>
                <Grid container id="introduction" justifyContent="left">
                    <Grid item xs={7}>
                        <Typography variant="h1">hello, I'm Heyo</Typography>
                        <Typography variant="h5">I'm a software developer based in São Paulo. I have profound interest in full-stack development, artificial intelligence, automation and etc.</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Button>
                        about me
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <KeyboardArrowDownIcon />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Introduction
