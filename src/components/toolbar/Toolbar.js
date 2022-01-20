import React, { useState } from 'react'
import { Button, Grid, List, ListItem, Switch, Typography, IconButton } from '@material-ui/core'
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
        <Grid container justifyContent="flex-end">
            <Grid item>
                <List className={classes.root}>
                    <ListItem>
                        <Button>home</Button>
                    </ListItem>
                    <ListItem>
                        <Button>about</Button>
                    </ListItem>
                    <ListItem>
                        <Button>skills</Button>
                    </ListItem>
                    <ListItem>
                        <Button>career</Button>
                    </ListItem>
                    <ListItem>
                        <Button>projects</Button>
                    </ListItem>
                    <ListItem>
                        <Button>contact</Button>
                    </ListItem>
                    <ListItem>
                        <IconButton
                            value={switchTheme}
                            onChange={e => setSwitchTheme(e.target.value)}
                            aria-label="change color theme"
                        >
                            c
                        </IconButton>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}

export default Toolbar
