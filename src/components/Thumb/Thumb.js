import React from "react"
import Checkbox from "@material-ui/core/Checkbox"
import Radio from "@material-ui/core/Radio"
import ThumbDownIcon from "@material-ui/icons/ThumbDown"
import ThumbUpIcon from "@material-ui/icons/ThumbUp"
import { useStyles } from "./styles"

const ThumbUp = ({ iconStyle, ...props }) => {
  const classes = useStyles()
  return (
    <Radio
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
    <Radio
      {...props}
      className={classes.thumbsDown}
      icon={<ThumbDownIcon className={classes.icon} style={iconStyle} />}
      checkedIcon={<ThumbDownIcon className={classes.icon} style={iconStyle} />}
      name="checkedThumbDown"
    />
  )
}

export { ThumbUp, ThumbDown }
