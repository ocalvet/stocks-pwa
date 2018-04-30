import React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';

class SymbolQuote extends React.Component {

  state = {
    symbol: {}
  }

  async componentDidMount() {
    try {
      // Get the symbol
      console.log('location', this.props.match);
      const symbol = _.find(this.props.symbols, s => s.symbol_id === this.props.match.params.id);
      this.setState({
        ...this.state,
        symbol
      });
    } catch (e) {
      console.log('ERROR', e);
    }
  }

  render() {
    const { symbol } = this.state;
    return (
      symbol ?
      <div>
        <h1>Symbol Quote</h1>
        <p>Exchange: {symbol.exchange_id}</p>
      </div> :
      <h1>Select a Symbol</h1>
    )
  }
}

const mapStateToProps = state => ({
  symbols: state.symbols
});

export default connect(mapStateToProps)(SymbolQuote);