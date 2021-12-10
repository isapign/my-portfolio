import { Grid, Typography } from "@material-ui/core"
import React from "react"

const TitleH3 = () => {
    return (
        <Grid container justifyContent="left">
            <Grid item xs={12} md={3} style={{ margin: '20vh 45vh' }}>
                <Typography variant="h3" align="left">Let's create the biggest Discord Server</Typography>
            </Grid>
        </Grid>
    )
}

export default TitleH3
