namespace _number {
  let a = 1234; // typeof a = number
  var b = Infinity * 0.1; // typeof b = number
  const PI = 3.1415926; // typeof PI = 3.1415926
  const nan = NaN; // typeof nan = number;

  let c: number = 2.34; // typeof c = number
  let d: 4.56 = 4.56; // typeof d = 4.56

  // Error: Type '10' is not assignable to type '4.56'
  let e: 4.56 = 10;
}