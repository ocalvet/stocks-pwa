import React from 'react';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui';

const styles = theme => ({
  spacing: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  data: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  }
})

const Symbol = ({ symbol, onSymbolSelected, classes }) => {
  return symbol ?
    <Paper className={classes.spacing} onClick={() => onSymbolSelected(symbol)}>
      <div className={classes.data}>
        <div>{symbol.exchange_id}</div>
        <div>{symbol.data_start}</div>
      </div>
    </Paper>
    :
    null
}

export default withStyles(styles)(Symbol);