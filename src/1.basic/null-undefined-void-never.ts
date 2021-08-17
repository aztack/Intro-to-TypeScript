function log(msg: string) {
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
<a onclick={() => void doSomething()}>OK</a>
*/

// any > void > undefined
// see https://github.com/microsoft/TypeScript/pull/11263
let a = undefined; // typeof a = any

const b = undefined; // typeof b = undefined
let c: void = undefined;
let d: void = void 0;

// not value can be assigned to variable of never type
let e: never;
let f: never = e;
