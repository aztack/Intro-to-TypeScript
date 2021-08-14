namespace _string {
  let a = 'hello'; // typeof a = string
  var b = 'world'; // typeof b = string
  const c = '!'; // typeof c = '!'

  type Dir = 'north' | 'south' | 'east' | 'west'
  type Direction = Dir | Capitalize<Dir> | Uppercase<Dir>;

  function echoDir(dir: Direction) {console.log(dir)}

  echoDir('north');
  echoDir('NORTH');
  echoDir('North');
  echoDir('NoRth');



  type RT = XMLHttpRequestResponseType;
}