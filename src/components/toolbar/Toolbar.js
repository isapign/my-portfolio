import React, { useState } from 'react'
import { Button, Grid, List, ListItem, Switch, Typography, IconButton } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "row"
    }
}))

const Toolbar = () => {
    const classes = useStyles()

    const [switchTheme, setSwitchTheme] = useState(false)

    const menuList = [
        {
            name: "home",
            route: "/"
        },
        {
            name: "about",
            route: "/about"
        },
        {
            name: "skills",
            route: "/skills"
        },
        {
            name: "career",
            route: "/career"
        },
        {
            name: "projects",
            route: "/projects"
        },
        {
            name: "contact",
            route: "/contact"
        }
    ]

    return (
        <Grid container justifyContent="flex-end" style={{ background: '#261931', position: 'fixed'}}>
            <Grid item>
                <List className={classes.root}>
                    {menuList.map(e => (
                        <ListItem>
                            <Button>{e.name}</Button>
                        </ListItem>
                    ))}
                    <ListItem>
                        <IconButton
                            value={switchTheme}
                            onChange={e => setSwitchTheme(e.target.value)}
                            aria-label="change color theme"
                        >
                            <Close />
                        </IconButton>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}

export default Toolbar
