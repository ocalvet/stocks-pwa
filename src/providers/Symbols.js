import *  as symbols from '../data/symbols.json';

export default class Symbols {
  all() {
    return new Promise((resolve, reject) => {
      resolve(symbols);
    })
  }
}