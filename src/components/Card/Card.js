import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import FormGroup from "@material-ui/core/FormGroup"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { ThumbUp, ThumbDown } from "../Thumb/Thumb"
import { useStyles } from "./styles"
import clsx from "clsx"

import { upVote, downVote } from "../../store/actions"

const Card = ({
  id,
  name,
  date,
  section,
  description,
  image,
  setUpVote,
  setDownVote,
  celebrity,
}) => {
  const styleProps = { backgroundImage: image }

  const classes = useStyles(styleProps)

  const [voted, setVoted] = useState(false)
  const [votedIcon, setVotedIcon] = useState(true)
  const [value, setValue] = useState("")
  const [checked, setChecked] = useState({
    up: false,
    down: false,
  })
  const [percent, setPercentage] = useState({
    up: 0,
    down: 0,
  })

  useEffect(() => {
    if (celebrity) {
      calculatePercentage()
    }
  }, [celebrity])

  const setIcon = () => {
    if (celebrity) {
      if (celebrity.upVotes > celebrity.downVotes) {
        return <ThumbUp />
      } else {
        return <ThumbDown />
      }
    }
  }

  const setChekedStyle = (prop) => (event) => {
    setChecked({ [prop]: event.target.checked })
  }

  const setCheckedValue = (event) => {
    setValue(event.target.value)
  }

  const handleVote = (id) => (event) => {
    setVoted(true)
    if (value === "up") {
      setUpVote(id, celebrity.upVotes + 1)
    }
    if (value === "down") {
      setDownVote(id, celebrity.downVotes + 1)
    }
  }

  const handleVoteAgain = () => {
    setVoted(false)
  }

  const calculatePercentage = () => {
    const total = celebrity.upVotes + celebrity.downVotes
    const upPercent = (celebrity.upVotes * 100) / total
    const downPercent = (celebrity.downVotes * 100) / total
    setPercentage((prevState) => ({
      ...prevState,
      down: downPercent,
      up: upPercent,
    }))
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

            {!voted ? (
              <div>
                <Typography variant="body1" className={classes.description}>
                  {description}
                </Typography>
                <FormGroup row className={classes.iconContainer}>
                  <RadioGroup row value={value} onChange={setCheckedValue}>
                    <FormControlLabel
                      className={clsx(
                        classes.thumbsUp,
                        checked.up && classes.checked
                      )}
                      value="up"
                      control={<ThumbUp onChange={setChekedStyle("up")} />}
                    />
                    <FormControlLabel
                      className={clsx(
                        classes.thumbsDown,
                        checked.down && classes.checked
                      )}
                      value="down"
                      control={<ThumbDown onChange={setChekedStyle("down")} />}
                    />
                  </RadioGroup>
                  <Button
                    type="submit"
                    onClick={handleVote(id)}
                    className={classes.voteButton}
                  >
                    Vote Now
                  </Button>
                </FormGroup>
              </div>
            ) : (
              <div>
                <Typography variant="body1" className={classes.description}>
                  Thanks for Voting!
                </Typography>
                <Button
                  onClick={handleVoteAgain}
                  className={classes.voteButton}
                >
                  Vote Again
                </Button>
              </div>
            )}
          </div>
          <div className={classes.percentageBar}>
            <FormGroup row>
              <FormControlLabel
                className={classes.thumbsUp}
                style={{ margin: 0, width: `${percent.up}%` }}
                control={
                  <ThumbUp iconStyle={{ fontSize: 20 }} label="Testing" />
                }
                label={`${Math.round(percent.up)}%`}
              />
              <FormControlLabel
                className={classes.thumbsDown}
                style={{ margin: 0, width: `${percent.down}%` }}
                control={<ThumbDown iconStyle={{ fontSize: 20 }} />}
                label={`${Math.round(percent.down)}%`}
                labelPlacement="start"
              />
            </FormGroup>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps
  const celebrity = state.celebrities.find((celeb) => celeb.id === id)
  return { celebrity }
}

const mapDispatchToProps = (dispatch) => ({
  setUpVote: (id, newState) => {
    dispatch(upVote({ id, newState }))
  },
  setDownVote: (id, newState) => {
    dispatch(downVote({ id, newState }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)
