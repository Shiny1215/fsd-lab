const globalSymbol1 = Symbol.for('sharedKey');
const globalSymbol2 = Symbol.for('sharedKey');
console.log(globalSymbol1 === globalSymbol2);
const localSymbol = Symbol('key');
const globalSymbol = Symbol.for('key');
console.log(Symbol.keyFor(localSymbol));
console.log(Symbol.keyFor(globalSymbol));
