import React from 'react';
import Symbol from '../components/Symbol';
import Symbols from '../providers/Symbols';

class Home extends React.Component {
  state = {
    symbols: []
  };

  constructor(props) {
    super(props);
    this.symbolsProvider = new Symbols();
  }

  async componentDidMount() {
    try {
      const symbols = await this.symbolsProvider.all();
      this.setState({
        ...this.state,
        symbols: symbols
      });
      console.log('SYMBOLS', symbols);
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
        {this.state.symbols.map(s => (<Symbol key={s.symbol_id} symbol={s} onSymbolSelected={(s) => this.selectSymbol(s)}/>))}
        <button onClick={() => this.props.history.push('/about')}>About</button>
      </div>
    )
  }
}

export default Home;
