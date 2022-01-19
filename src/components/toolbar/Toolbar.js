import React, { useState } from 'react'
import { Button, Grid, List, ListItem, Switch, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "row"
    }
}))

const Toolbar = () => {
    const classes = useStyles()

    const [switchTheme, setSwitchTheme] = useState(false)

    return (
        <Grid id="toolbar">
            <Grid item>
            </Grid>
            <Grid item>
                <List className={classes.root}>
                    <ListItem>
                        <Typography>heyo</Typography> 
                    </ListItem>
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
                    <ListItem>
                        <Switch
                            checked={switchTheme}
                            onChange={e => setSwitchTheme(e.target.checked)}
                        >
                            projects
                        </Switch>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}

export default Toolbar
