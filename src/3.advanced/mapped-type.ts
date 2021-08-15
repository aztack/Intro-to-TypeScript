import { Equal } from '@type-challenges/utils';
namespace _mapped_type {
  // Value Space
  function Foo(T: string[] = ['hello', 'world']) {
    let obj: Record<string, unknown> = {};
    for (let K in T) {
      if (K === 'hello') {
        obj[K] = 123;
      } else {
        obj[K] = 'abc'
      }
    }
    return obj;
  }

  // Type Space
  type Foo<T extends string = "hello" | "world"> = {
    [K in T]: K extends "hello" ? number : string
  }
  type Bar = {
    hello: number;
    world: string;
  }
  type R = Equal<Foo, Bar>; // true
}

namespace _mapped_type {
  type User = {
    id: number;
    name: string;
    age: number;
  };

  type OptionalUser = { [K in keyof User]?: User[K] }
  type NullableUser = { [K in keyof User]: User[K] | null }
  type ReadonlyUser = { readonly [K in keyof User]: User[K] }
  
  type User2 = { -readonly [K in keyof ReadonlyUser]: User[K] }
  type R1 = Equal<User2, User>; // true
  
  type User3 = { [K in keyof OptionalUser]-?: User[K] }
  type R2 = Equal<User3, User>; // true
}