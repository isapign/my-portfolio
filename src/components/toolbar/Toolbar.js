import React from 'react'
import { Button, Grid, List, ListItem, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "row",
      padding: 0
    }
}))

const Toolbar = () => {
    const classes = useStyles()

    return (
        <Grid id="toolbar">
            <Grid item>
                <Typography>heyo</Typography>
            </Grid>
            <Grid item>
                <List className={classes.root}>
                    <ListItem>
                        <Button>Home</Button>
                    </ListItem>
                    <ListItem>
                        <Button>about</Button>
                    </ListItem>
                    <ListItem>
                        <Button>experience</Button>
                    </ListItem>
                    <ListItem>
                        <Button>projects</Button>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}

export default Toolbar
