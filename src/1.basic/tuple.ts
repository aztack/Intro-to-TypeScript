namespace _tuple {
  let a: [number] = [1];
  let b: [string, string, number] = ['a', 'b', 123];
  // Error: Type 'string' is not assignable to type 'number'
  b = ['c', 'd', 'e'];

  let c: [number, number?][] = [
    [1.2],
    [3.4, 5.6],
    [7]
  ];
  type C = typeof c[0];// type C = [number, (number | undefined)?][]

  type StringTuple = [string, ...string[]]
  let d: StringTuple = ['a', 'b', 'c'];

  type NBS = [number, boolean, ...string[]];
  let list: NBS = [1, false, 'a', 'b', 'c'];
}