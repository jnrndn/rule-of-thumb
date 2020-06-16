import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { useStyles } from "./styles"

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Rule Of Thumb
          </Typography>
          <Button href="/past-trails" color="inherit">
            Past Trials
          </Button>
          <Button href="#" color="inherit">
            How It Works
          </Button>
          <Button href="#" color="inherit">
            Log In / Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
