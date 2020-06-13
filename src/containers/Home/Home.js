import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Card from "./../../components/Card/Card"
import Header from "./../Header/Header"
import celebrities from "../content/data"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  cardContainer: {
    width: "45%",
    marginTop: 30,
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  content: {
    width: "90%",
    marginLeft: "5%",
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Header />
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        className={classes.content}
      >
        {celebrities.map((item) => {
          return (
            <div key={item.id} className={classes.cardContainer}>
              <Card
                name={item.name}
                date={item.date}
                section={item.section}
                description={item.description}
                image={item.img}
              />
            </div>
          )
        })}
      </Grid>
    </React.Fragment>
  )
}

export default Home
