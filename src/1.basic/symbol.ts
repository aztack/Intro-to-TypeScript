import { Equal } from '@type-challenges/utils';
namespace _symbol {
  let a = Symbol('a'); // typeof a = symbol
  var a1 = Symbol('a'); // typeof a1 = symbol
  let a2: unique symbol = a1; // Error
  const b1: unique symbol = Symbol('b'); // "unique symbol b1"
  const b1x = Symbol('b') // "unique symbol b1x"
  type X = Equal<typeof b1, typeof b1x>; // false

  const b2 = b1; // typeof b2 = symbol
  type R1 = Equal<typeof b2, typeof b1>; // false
  type R11 = Equal<typeof b2, symbol>; // true
  console.log(b1 === b2); // true

  const b3: typeof b1 = b1;
  type R2 = Equal<typeof b3, typeof b1>; // true
  console.log(b1 === b3); // true

  console.log(Symbol('a') === Symbol('a')) // false
  console.log(Symbol.for('a') === Symbol.for('a')) // true
}