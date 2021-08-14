import { Equal } from '@type-challenges/utils'
namespace _class {
  class TPoint {
    constructor(public x: number, public y: number) { }
  }

  interface IPoint {
    prototype: { x: number, y: number };
    new(x: number, y: number): { x: number, y: number };
  }

  type TPointProps = keyof typeof TPoint // "prototype"
  type R = Equal<typeof TPoint, IPoint>; // true
}