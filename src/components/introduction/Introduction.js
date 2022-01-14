import { Grid, Typography } from "@material-ui/core"
import React from "react"

const Introduction = () => {
    return ( 
        <Grid container id="introduction" justifyContent="center">
            <Grid item xs={8}>
                <Typography variant="h1">hi, heyo here</Typography>
                <Typography variant="h2">I create stuff sometimes</Typography>
            </Grid>
        </Grid>
    )
}

export default Introduction
