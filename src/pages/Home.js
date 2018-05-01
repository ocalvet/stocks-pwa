import React from 'react';
import { connect } from 'react-redux';
import { loadSymbols } from '../actions';
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button';
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
    this.props.history.push(`/symbol-quote/${s.symbol_id}`);
  }

  render() {
    return (
      <div>
        <h1>Home Page</h1>
        {this.props.symbols.map(s => (<Symbol key={s.symbol_id} symbol={s} onSymbolSelected={(s) => this.selectSymbol(s)}/>))}
        <Button component={Link} to="/about">
          About
        </Button>
        {/* <button onClick={() => this.props.history.push('/about')}>About</button> */}
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
