import { Grid } from '@material-ui/core'
import React from 'react'
import Body from './components/Body'
import Toolbar from './components/toolbar/Toolbar'

const App = () => {
  return (
    <Grid container>
      <Grid item>
        <Toolbar />
      </Grid>
      <Grid item>
        <Body />
      </Grid>
    </Grid>
  )
}

export default App
