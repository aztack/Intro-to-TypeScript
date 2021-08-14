function log(msg: string): void {
  console.log(msg);
}

function error(msg: string): never {
  throw new Error(msg);
}

function loop(): never {
  while (true) { }
}

void function test() { console.log('boo!') }
// Error: Cannot find name 'test'
test();

/*
<a href="javascript:void(0)">link</a>
<a href="javascript:undefined">link</a>
*/
