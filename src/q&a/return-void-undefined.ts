// https://stackoverflow.com/questions/58885485/why-does-typescript-have-both-void-and-undefined

// forEach0: callback MUST explicitly return undefined
function forEach0<T>(arr: T[], callback: (el: T) => undefined): void {
  for(let i = 0; i < arr.length; i++) {
      callback(arr[i]);
  }
}

// forEach1: I don't care what callback returns
function forEach1<T>(arr: T[], callback: (el: T) => void): void {
  for(let i = 0; i < arr.length; i++) {
      callback(arr[i]);
  }
}

const s = [];
// Error: Type 'number' is not assignable to type 'undefined'.ts(2322)
forEach0([1,2,3], n => s.push(n));

// Error: Argument of type '(n: number) => void' is not assignable to parameter of type '(el: number) => undefined'
forEach0([1,2,3], n => {
  // return undefined
});
forEach1([1,2,3], n => s.push(n)); // Array#push returns a number which is OK

// You can return anything(returns string in this case), 
// forEach1 promises not to use the return value by declaring return type of callback void
forEach1([1,2,3], n => '42'); 