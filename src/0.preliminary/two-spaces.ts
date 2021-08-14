namespace _two_spaces {
  interface IPoint {
    x: number;
    y: number;
  }

  const p = {x: 0, y: 0};

  // Error: 'IPoint' only
  // refers to a type,
  // but is being used as
  // a value here.
  if (p instanceof IPoint) {
    
  }
}

namespace _two_spaces {
  class Person {}

  const p = typeof Person;
  console.log(p); // "function"
  const person = new Person();


  type T = typeof Person;
}

namespace _two_spaces {
  interface Person{
      name: string;
      age: number;
  }

  type PersonName = Person['name'];// string
  type PersonAge = Person['age'];// number
  type PersonNameAge = Person['name' | 'age'];// string | number

  type StringList = string[];
  type StringListElement = StringList[number]; // string

  type TupleNameAge = [string, number];
  type PersonNameAge2 = TupleNameAge[number]; // string | number
  type TupleLength = TupleNameAge["length"]; // 2

}