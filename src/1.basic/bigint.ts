namespace _bigint {
  let a = 1234n; // typeof a = bigint
  const b = 5678n; // typeof b = 5678n
  var c = a + b;
  const hugeString = BigInt("9007199254740991"); // typeof hugeString = bigint
  const hugeHex = BigInt("0x1fffffffffffff"); // typeof hugeHex = bigint

  const rounded = 5n / 2n; // typeof rounded = bigint, rounded = 2n;

  // Error: Operator '+' cannot be applied to types 'bigint' and '123'
  let d = a + 123;
  let e = a + BigInt(123);
  let f = Number(a) + 123;
}