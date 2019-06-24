import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    position: 'fixed',
    bottom: 16,
    right: 16,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const Playing = () => {
  const classes = useStyles()
  const [expanded, setExpandedn] = React.useState()

  return (
    <Card className={classes.card} elevation={12}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Currently playing
        </Typography>
        <Typography variant="h5">
          <marquee scrollamount="3">Current affairs</marquee>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Playing
