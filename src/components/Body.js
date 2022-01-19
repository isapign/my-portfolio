import React from 'react'
import AboutMe from './about/AboutMe'
import Introduction from './introduction/Introduction'
import Experience from './experience/Experience'
import { Grid } from '@material-ui/core'

const Body = () => {
    return (
        <Grid container>
            <Grid item>
                <Introduction />
            </Grid>
            <Grid item>
                <AboutMe />
            </Grid>
            <Grid item>
                <Experience />
            </Grid>
        </Grid>
    )
}

export default Body
