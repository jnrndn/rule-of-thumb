import { makeStyles } from "@material-ui/core/styles"
import palette from "./../../theme/palette"

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  cardContainer: {
    height: 500,
    backgroundImage: (props) => `url(${props.backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  cardOpacity: {
    height: "100%",
    backgroundColor: palette.transparent.bg2,
  },
  content: {
    paddingTop: 145,
    color: "white",
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    height: 50,
    fontSize: "2.5rem",
    marginBttom: 10,
  },
  description: {
    width: "60%",
    height: 120,
    margin: "20px 0px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  thumbsDown: {
    backgroundColor: palette.secondary,
    borderRadius: 0,
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
  percentageBar: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    "& .MuiFormGroup-row": {
      flexWrap: "no-wrap",
      opacity: 0.8,
    },
  },
  checked: {
    border: "1px solid",
  },
  voteButton: {
    border: "1px solid white",
    padding: "5px 15px",
    color: "white",
    fontWeight: 500,
    borderRadius: 0,
  },
}))
