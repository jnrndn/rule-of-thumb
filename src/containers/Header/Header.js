import React from "react"
import Link from "@material-ui/core/Link"
import Typography from "@material-ui/core/Typography"
import { ThumbUp, ThumbDown } from "./../../components/Thumb/Thumb"
import Pope from "./../../assets/images/pope-francis.jpg"
import Navbar from "../Navbar/Navbar"
import { useStyles } from "./styles"

const Header = () => {
  const styleProps = { backgroundImage: Pope }

  const classes = useStyles(styleProps)

  return (
    <div className={classes.container}>
      <div className={classes.backgroundOpacity}>
        <Navbar />
        <div className={classes.opinion}>
          <Typography variant="subtitle1" className={classes.subtitle}>
            What's your opinion on
          </Typography>
          <Typography variant="h3" className={classes.title}>
            Pope Francis?
          </Typography>
          <Typography variant="body1" className={classes.description}>
            He's talking tough on clergy sexual abuse, but is he just another
            papal pervert protector? (thumbs down) or a true pedophile punishing
            pontiff? (thumbs up )
          </Typography>
          <Typography variant="h5" className={classes.info}>
            <Link
              href="https://wikipedia.org/wiki/Pope_Francis"
              variant="body2"
              underline="always"
              color="inherit"
            >
              More Information
            </Link>
          </Typography>
          <Typography variant="h5" className={classes.info}>
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
        <div className={classes.timeRemaining}>
          <div className={classes.closing}>
            <Typography variant="subtitle1" className={classes.closingText}>
              CLOSING IN
            </Typography>
          </div>
          <div className={classes.daysCounter}>
            <Typography variant="h4" className={classes.daysText}>
              22 days
            </Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
