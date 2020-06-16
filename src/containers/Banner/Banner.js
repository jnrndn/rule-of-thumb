import React from "react"
import Typography from "@material-ui/core/Typography"
import { useStyles } from "./styles"

const Banner = () => {
  const classes = useStyles()
  return (
    <div className={classes.banner}>
      <div className={classes.motivation}>
        <Typography variant="h6" className={classes.greyText}>
          Speak out. Be heared.
        </Typography>
        <Typography
          variant="h5"
          className={classes.greyText}
          style={{ fontWeight: 600, lineHeight: "1.1rem" }}
        >
          Be counted
        </Typography>
      </div>
      <div className={classes.explanation}>
        <Typography variant="body1">
          Rule of Thumb is a crowd sourced court of public opinion where anyone
          and everywhere can speak out and speak freely, it's easy: You share
          your opinion, we analyze and put the data in a public report
        </Typography>
      </div>
    </div>
  )
}

export default Banner
