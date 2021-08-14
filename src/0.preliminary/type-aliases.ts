// Value Space
namespace _type_aliases {
  let ID = 9527;
  const PI = 3.14;
  var myPI = PI;

  // Type Space
  type ID = string;
  type User = {
    id: ID;
    name: string;
  }
  // Error: Duplicate identifier 'User'
  type User = {}

  // 块级作用域
  {
    // OK
    type User = {
      id: number;
      name: string;
    }
  }
}