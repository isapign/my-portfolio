import { 
    Box,
    Button,
    Grid,
    Toolbar,
    Typography
} from '@material-ui/core'
import React from 'react'
import './HeaderToolbar.css'

const HeaderToolbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar>
            <Grid container alignItems="center" justifyContent="center" spacing={1}>
                <Grid item>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        Chronos
                    </Typography>
                </Grid>
            </Grid>
            <Grid container justifyContent="center">
                <Button color="inherit">Home</Button>
                <Button color="inherit">Pricing</Button>
                <Button color="inherit">Plugins</Button>
                <Button color="inherit">Suport Us</Button>
                <Button color="inherit">Log In</Button>
                <Button className="header-signup">Sign Up</Button>
            </Grid>
          </Toolbar>
      </Box>
    )
}

export default HeaderToolbar
