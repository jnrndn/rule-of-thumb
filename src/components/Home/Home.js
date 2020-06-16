import React, { useEffect } from "react"
import Typography from "@material-ui/core/Typography"
import { connect } from "react-redux"
import Grid from "@material-ui/core/Grid"
import Card from "../Card/Card"
import celebrities from "../../assets/data/data"

import { setCelebrity } from "../../store/actions"

import { useStyles } from "./styles"

const Home = ({ setVotes, data }) => {
  const classes = useStyles()

  useEffect(() => {
    const celebs = JSON.parse(localStorage.getItem("data"))
    if (celebs) {
      setVotes(celebs)
    } else if (celebrities) {
      setVotes(celebrities)
    }
  }, [])

  useEffect(() => {
    if (data) {
      localStorage.setItem("data", JSON.stringify(data))
    }
  }, [data])

  return (
    <React.Fragment>
      <div className={classes.title}>
        <Typography variant="h3">Votes</Typography>
      </div>
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
                id={item.id}
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

const mapDispatchToProps = (dispatch) => ({
  setVotes: (celebrities) => {
    dispatch(setCelebrity(celebrities))
  },
})

const mapStateToProps = (state) => ({
  data: state.celebrities,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
