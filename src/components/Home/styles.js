import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  cardContainer: {
    width: "48%",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  content: {
    width: "80%",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  title: {
    marginLeft: "10%",
    marginTop: "5%",
  },
}))
