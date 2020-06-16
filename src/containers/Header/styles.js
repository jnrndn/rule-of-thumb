import { makeStyles } from "@material-ui/core/styles"
import palette from "./../../theme/palette"

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    position: "relative",
    height: 650,
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  backgroundOpacity: {
    height: "100%",
    backgroundColor: palette.transparent.bg,
  },
  opinion: {
    position: "absolute",
    height: 389,
    width: 409,
    backgroundColor: palette.transparent.bg,
    color: palette.common.white,
    top: 70,
    left: 150,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      left: 0,
      width: 300,
    },
  },
  title: {
    margin: 10,
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
    },
  },
  subtitle: {
    margin: "20px 0 0 15px",
  },
  info: {
    margin: "10px 0 20px 15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
    },
  },
  description: {
    margin: 10,
  },
  thumbSection: {
    display: "flex",
    flexDirection: "row",
    height: 65,
  },
  thumbs: {
    width: "50%",
  },
  timeRemaining: {
    width: "100%",
    height: 50,
    position: "absolute",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
  },
  closing: {
    width: "30%",
    backgroundColor: palette.transparent.bg,
    color: palette.common.white,
    display: "flex",
    justifyContent: "flex-end",
  },
  daysCounter: {
    width: "70%",
    backgroundColor: palette.transparent.main,
    color: palette.common.black,
    display: "flex",
    justifyContent: "flex-start",
  },
  closingText: {
    textAlign: "left",
    margin: 10,
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      textAlign: "center",
      margin: 12,
    },
  },
  daysText: {
    textAlign: "right",
    margin: "0px 10px",
    color: palette.grey[100],
    [theme.breakpoints.down("sm")]: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
    },
  },
}))
