import React from 'react'
import { Grid, Paper, makeStyles } from '@material-ui/core'
import Item from './item/Item'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    flexGrow: 1,
  },
}))

const List = ({ jingles }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {Object.keys(jingles).map(key => (
          <Grid key={key} item xs={12} sm={6} md={4} lg={2}>
            <Item name={key} item={jingles[key]} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default List
