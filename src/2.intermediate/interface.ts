import { Equal } from '@type-challenges/utils'
namespace _interface {
  type TPerson = { name: string; age: number; }
  interface IPerson { name: string; age: number; }
  type R1 = Equal<TPerson, IPerson>; // true

  type TDict = { [key: string]: string };
  interface IDict { [key: string]: string };
  type R2 = Equal<TDict, IDict>; // true

  type TFn = (x: number) => string;
  interface IFn {
    (x: number): string;
  }
  type R3 = Equal<TFn, IFn>; // true


  type TTuple = [number, number];
  interface ITuple extends Array<number> {
    0: number;
    1: number;
    length: 2;
  }
  type R4 = Equal<TTuple, ITuple>; // true
}