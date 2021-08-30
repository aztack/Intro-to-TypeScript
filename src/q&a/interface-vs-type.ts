// https://github.com/microsoft/TypeScript/issues/15300#issuecomment-332366024
// https://stackoverflow.com/questions/65559426/interface-cannot-extend-mapped-type-in-conditional-type
// Type aliases have implicit index signature, but interfaces "don't".

/* Type alias */
type A = {}; 
type R12 = A extends {[P in string]: any} ? true : false; // true
type R13 = A extends Record<string, any> ? true : false; // true
type R14 = A extends Record<string, string> ? true : false; // true

/* interface */
interface B {};
type R22 = B extends {[P in string]: any} ? true : false; // true
type R23 = B extends Record<string, any> ? true : false; // true
type R24 = B extends Record<string, string> ? true : false; // false

/* Example */
type K1 = ConstructorParameters<typeof URLSearchParams>[0]; // = string | string[][] | Record<string, string> | URLSearchParams | undefined;
// change Record<string, string> to Record<string, any>
type K2 = string | string[][] | Record<string, /*string*/any> | URLSearchParams | undefined;

class URLSearchParams2 {
  constructor(k: K2) {}
}

const x = {} as B;
new URLSearchParams(x) // Error
new URLSearchParams2(x) // OK
