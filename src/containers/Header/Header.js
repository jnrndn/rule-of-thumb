import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import { ThumbUp, ThumbDown } from "./../../components/Thumb/Thumb"
import Pope from "./../../assets/images/pope-francis.jpg"
import pallete from "./../../theme/palette"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    height: 650,
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  opinion: {
    position: "absolute",
    height: 389,
    width: 409,
    backgroundColor: pallete.transparent.bg,
    color: pallete.common.white,
    top: 70,
    left: 150,
    display: "flex",
    flexDirection: "column",
  },
  thumbSection: {
    display: "flex",
    flexDirection: "row",
    height: 65,
  },
  thumbs: {
    width: "50%",
  },
})

const Header = () => {
  const styleProps = { backgroundImage: Pope }

  const classes = useStyles(styleProps)

  return (
    <div className={classes.container}>
      <div className={classes.opinion}>
        <Typography variant="subtitle1" style={{ margin: "20px 0 0 10px" }}>
          What's your opinion on
        </Typography>
        <Typography variant="h2" style={{ margin: "0 0 20px 10px" }}>
          Pope Francis
        </Typography>
        <Typography variant="body1" style={{ margin: "20px 0 20px 10px" }}>
          He's talking tough on clergy sexual abuse, but is he just another
          papal pervert protector? (thumbs down) or a true pedophile punishing
          pontiff? (thumbs up )
        </Typography>
        <Typography variant="h5" style={{ margin: "20px 0 20px 10px" }}>
          What's Your veredict?
        </Typography>
        <div className={classes.thumbSection}>
          <ThumbUp
            style={{ width: "50%", opacity: "70%" }}
            iconStyle={{ fontSize: 30 }}
          />
          <ThumbDown
            style={{ width: "50%", opacity: "70%" }}
            iconStyle={{ fontSize: 30 }}
          />
        </div>
      </div>
    </div>
  )
}

export default Header
