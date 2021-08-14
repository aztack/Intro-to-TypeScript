import { Equal } from '@type-challenges/utils';
namespace _object {
  /**
   * Value Space
   */
  //Inline object type annotation
  const person: { name: string, age: number } = {
    name: 'Mary',
    age: 21
  };
  const personKeys = Object.keys(person); // ["name", "age"]
  /**
   * Type Space
   */
  // Type aliases
  type Person = {
    name: string,
    age: number
  }
  type PersonKeys = keyof Person;
  type R1 = Equal<PersonKeys, 'name' | 'age'>; // true
}