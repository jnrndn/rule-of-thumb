import { makeStyles } from "@material-ui/core/styles"
import palette from "./../../theme/palette"

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  banner: {
    display: "flex",
    flexDirection: "row",
    height: 90,
    margin: "5% 10%",
    backgroundColor: palette.grey[200],
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
  motivation: {
    display: "flex",
    width: "45%",
    flexDirection: "column",
    paddingLeft: 20,
  },
  explanation: {
    margin: "15px 5px",
  },
  greyText: {
    color: palette.grey[100],
    [theme.breakpoints.down("sm")]: {
      fontSize: 18,
    },
  },
}))
