import React from 'react';

const Symbol = ({ symbol, onSymbolSelected }) => {
  return symbol ?
    <div>
      <h4 onClick={() => onSymbolSelected(symbol)}>{symbol.exchange_id}</h4>
    </div>
    :
    null
}

export default Symbol;