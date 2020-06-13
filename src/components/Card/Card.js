import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Typography from "@material-ui/core/Typography"
import palette from "./../../theme/palette"
import { ThumbUp, ThumbDown } from "../Thumb/Thumb"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  cardContainer: {
    height: 600,
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  cardOpacity: {
    height: "100%",
    backgroundColor: palette.transparent.bg,
  },
  content: {
    paddingTop: 295,
    color: "white",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
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
  iconContainer: {
    paddingLeft: 12,
  },
  icon: {
    fontSize: 12,
    color: "white",
  },
  info: {
    marginLeft: 40,
  },
})

const Card = ({ name, date, section, description, image }) => {
  const styleProps = { backgroundImage: image }

  const classes = useStyles(styleProps)

  const [votedIcon, setVotedIcon] = useState(true)

  const setIcon = () => {
    const vote = {
      up: true,
    }
    if (votedIcon) {
      if (vote.up) {
        return <ThumbUp />
      } else {
        return <ThumbDown />
      }
    }
  }

  return (
    <div className={classes.cardContainer}>
      <div className={classes.cardOpacity}>
        <div className={classes.content}>
          <div className={classes.title}>
            <div className={classes.votedIcon}>{votedIcon && setIcon()}</div>
            <Typography variant="h3" style={{ marginLeft: 10 }}>
              {name}
            </Typography>
          </div>
          <div className={classes.info}>
            <Typography variant="body1">{`${date} in ${section}`}</Typography>
            <Typography variant="body1" style={{ width: "50%" }}>
              {description}
            </Typography>
            <FormGroup row className={classes.iconContainer}>
              <FormControlLabel
                className={classes.thumbsUp}
                control={<ThumbUp />}
              />
              <FormControlLabel
                className={classes.thumbsDown}
                control={<ThumbDown />}
              />
            </FormGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
