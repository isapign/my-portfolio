import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import {
    Grid,
    List,
    ListItem,
    Typography,
    ListItemIcon,
    ListItemText
} from '@material-ui/core'

const AboutMe = () => {
    return (
        <Grid container justifyContent="left">
            <Grid item xs={6}>
                <Typography variant="h3">
                    / about me
                </Typography>
                <Typography variant="h5">
                    I am currently studying Analysis and Systems Development at UNIP and I'm at the final semester. Moreover, I'm a Jr Web Developer at E-Deploy, where I program using Python and Javascript. 
                </Typography>
                <Typography variant="h5">
                    I'm into any sort of software development that requires creativity. My other areas of interest include machine learning, human-computer interactions and frontend development. I also like my fair share of visual arts and video editing. In my free time, I eat guava fruit and play video games.
                </Typography>
                <Typography variant="h5">
                    Here are some technologies I have been working on:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                    <ListItemText primary="Javascript ES6+" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                    <ListItemText primary="React.js" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                    <ListItemText primary="Ruby" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                    <ListItemText primary="Python" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                    <ListItemText primary="Java" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                    <ListItemText primary="Robot Framework" />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <ArrowRightIcon />
                        </ListItemIcon>
                    <ListItemText primary="HTML & CSS" />
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    )
}

export default AboutMe
