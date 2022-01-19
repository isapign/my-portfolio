import React from "react"
import { Grid, Typography } from "@material-ui/core"

const Introduction = () => {
    return ( 
        <Grid container id="introduction" justifyContent="left">
            <Grid item xs={7}>
                <Typography variant="h1">hi, heyo here</Typography>
                <Typography variant="h2">I create stuff sometimes</Typography>
                <Typography variant="h5">I'm a software developer based in São Paulo. I have profound interest in full-stack development, artificial intelligence, automation and etc.</Typography>
            </Grid>
        </Grid>
    )
}

export default Introduction
