import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Checkbox from "@material-ui/core/Checkbox"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import palette from "./../../theme/palette"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  thumbsDown: {
    backgroundColor: palette.secondary,
    borderRadius: 0,
    "& .MuiCheckbox-root": {
      color: "white",
    },
  },
  thumbsUp: {
    backgroundColor: palette.primary,
    borderRadius: 0,
  },
  icon: {
    fontSize: 12,
    color: "white",
  },
})

const ThumbUp = ({ iconStyle, ...props }) => {
  const classes = useStyles()
  return (
    <Checkbox
      {...props}
      className={classes.thumbsUp}
      icon={<ThumbUpIcon className={classes.icon} style={iconStyle} />}
      checkedIcon={<ThumbUpIcon className={classes.icon} style={iconStyle} />}
      name="checkedThumbUp"
    />
  )
}

const ThumbDown = ({ iconStyle, ...props }) => {
  const classes = useStyles()
  return (
    <Checkbox
      {...props}
      className={classes.thumbsDown}
      icon={<ThumbDownIcon className={classes.icon} style={iconStyle} />}
      checkedIcon={<ThumbDownIcon className={classes.icon} style={iconStyle} />}
      name="checkedThumbDown"
    />
  )
}

export { ThumbUp, ThumbDown }
