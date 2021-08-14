import { Equal } from '@type-challenges/utils'
namespace _keyof {
  type Person = {
    name: string;
    age: number;
  }
  type PersonKeys = keyof Person;
  type R1 = Equal<PersonKeys, "name" | "age">; // true

  type Arrayish = { [n: number]: unknown };
  type A = keyof Arrayish; // typeof A = number

  type Mapish = { [k: string]: boolean };
  type M = keyof Mapish;  // typeof M = string | number

  type SymbolKeyed = { [k: symbol]: boolean };
  type S = keyof SymbolKeyed;  // typeof S = symbol (>=4.4)

  // typeof HasSomeArrayMethod = true
  type HasSomeArrayMethod =
    ("concat" | "push" | "splice") extends keyof number[] ? true : false;
}

namespace _keyof {
  type K1 = keyof unknown; // never
  type K3 = keyof undefined; // never
  type K4 = keyof void; // never
  type K5 = keyof null; // never
  type K11 = keyof object;  // never
  type K12 = keyof never;  // never

  type K2 = keyof any;  // string | number | symbol

  // "toString" | "toFixed" | "toExponential"
  // | "toPrecision" | "valueOf" | "toLocaleString"
  type K6 = keyof number;

  // typeof Symbol.toStringTag | "toString" | "toLocaleString" | "valueOf"
  type K7 = keyof bigint;

  // "valueOf"
  type K8 = keyof boolean;

  // number | typeof Symbol.iterator | "toString" | "charAt" | "charCodeAt"
  // | "concat" | "indexOf" | "lastIndexOf" | "localeCompare" | "match" |
  // "replace" | "search" | "slice" | ... 36 more ... | "replaceAll"
  type K9 = keyof string;

  // typeof Symbol.toPrimitive | typeof Symbol.toStringTag
  // | "toString" | "valueOf" | "description"
  type K10 = keyof symbol;

}