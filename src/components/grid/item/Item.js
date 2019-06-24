import React from 'react'
import {
  Grid,
  Paper,
  makeStyles,
  Card,
  CardActions,
  IconButton,
  Icon,
  Typography,
  CardHeader,
  Avatar,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  likeButton: {
    marginLeft: 'auto',
  },
}))

const Item = ({ name, item }) => {
  const classes = useStyles()

  return (
    <Card className={classes.paper}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {name.slice(0, 1)}
          </Avatar>
        }
        title={name}
        subheader="Jingle"
      />
      <CardActions disableSpacing>
        <IconButton aria-label="Play item">
          <Icon>play_arrow</Icon>
        </IconButton>
        <IconButton aria-label="Add to playlist" disabled>
          <Icon>playlist_add</Icon>
        </IconButton>
        <IconButton aria-label="Add to playlist" className={classes.likeButton}>
          <Icon>favorite_border</Icon>
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Item
