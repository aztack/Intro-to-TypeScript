namespace _unknown {
  let a: unknown = 30; // typeof a == unknown

  let b1 = a > 123; // Error TS2571: Object is of type 'unknown'
  let b2 = a < 123; // Error TS2571
  let b3 = a === 123; // typeof b == boolean

  let c = a + 10 // Error TS2571

  if (typeof a === 'number') {
    let d = a + 10; // typeof d == number
  }
}