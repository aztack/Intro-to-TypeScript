namespace _template_literal {
  /**
  * Value Space
  */
  const hello = 'hello';
  const world = 'world';
  const exclamation = '!';
  const helloworld = `${hello} ${world}${exclamation}`;
  console.log(helloworld); // "hello world!"

  /**
   * Type Space
   */
  type Hello = 'hello';
  type World = 'world';
  type Exclamation = '!';
  // typeof HelloWorld = "hello world!"
  type HelloWorld = `${Hello} ${World}${Exclamation}`;

  // Distribution
  type Colors = 'red' | 'green' | 'blue';
  type Fruits = 'apple' | 'peach' | 'pear';

  // type ColoredFruits = 
  //   "RED Apple" | "RED Peach" | "RED Pear" 
  // | "GREEN Apple" | "GREEN Peach" | "GREEN Pear"
  // | "BLUE Apple" | "BLUE Peach" | "BLUE Pear"
  type ColoredFruits = `${Uppercase<Colors>} ${Capitalize<Fruits>}`;
  // Uppercase, Lowercase, Capitalize, Uncapitalize
}