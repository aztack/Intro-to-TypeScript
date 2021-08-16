import { Equal } from '@type-challenges/utils';

enum Enum1 {
  A = 1,
  B = 2
}

type Record1 = Record<1 | 2, boolean>;
type R1 = Equal<Record1, {1:boolean, 2: boolean}> // true
type R2 = Equal<Record<Enum1, boolean>, Record1>; // true

// make enum key optional
const a: Partial<Record<Enum1, boolean>> = {}; // with Partial
const b: {[K in Enum1]?: boolean} = {}; // with optional modifier

