import { makeStyles } from "@material-ui/core/styles"
import palette from "./../../theme/palette"

export const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  thumbsDown: {
    backgroundColor: palette.secondary,
    borderRadius: 0,
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
