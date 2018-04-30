import React from 'react';
import { connect } from 'react-redux';
import { loadSymbols } from '../actions'
import Symbol from '../components/Symbol';
import Symbols from '../providers/Symbols';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.symbolsProvider = new Symbols();
  }

  async componentDidMount() {
    try {
      const symbols = await this.symbolsProvider.all();
      console.log('PROPS SYMBOLS', symbols);
      this.props.onSymbolsLoaded(symbols);
    } catch (e) {
      console.log('ERROR', e);
    }
  }

  selectSymbol(s) {
    console.log('Symbol selected', s);
    this.props.history.push('/symbol-quote');
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.props.symbols.map(s => (<Symbol key={s.symbol_id} symbol={s} onSymbolSelected={(s) => this.selectSymbol(s)}/>))}
        <button onClick={() => this.props.history.push('/about')}>About</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  symbols: state.symbols
});

const mapActionsToProps = dispatch => ({ 
  onSymbolsLoaded: symbols => dispatch(loadSymbols(symbols))
});

export default connect(mapStateToProps, mapActionsToProps)(Home);
