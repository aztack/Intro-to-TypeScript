namespace _boolean {
  let a = true; // typeof a = boolean
  var b = false; // typeof b = boolean
  const c = true; // typeof c = true

  let d: boolean = true; // typeof d = boolean
  let e: true = true; // typeof e = true

  // Error: Type 'false' is not assignable to type 'true'
  let f: true = false;


  let g: true | false = true;
}