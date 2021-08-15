import { Equal } from '@type-challenges/utils'
namespace _class {
  class Point {
    constructor(public x: number, public y: number) { }
  }

  interface IPoint {
    prototype: { x: number, y: number };
    new(x: number, y: number): { x: number, y: number };
  }

  type TPoint = {
    prototype: {x: number, y: number};
    new(x: number, y: number): { x: number, y: number };
  };

  type TPointProps = keyof typeof Point // "prototype"
  type R1 = Equal<IPoint, typeof Point>; // true
  type R2 = Equal<TPoint, typeof Point>; // true
  type R3 = Equal<IPoint, TPoint>; // true
}