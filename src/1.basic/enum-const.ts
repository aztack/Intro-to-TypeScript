namespace _enum {
  const enum CJK {
    Chinese,
    Japanese = 'JP',
    Korean = 1
  }
  console.log(CJK.Chinese);
  console.log(CJK.Japanese)
  console.log(CJK[0]) // Error
  console.log(CJK); // Error

  const enum Colors { Red, Green, Blue }

  const enum Colors {
    Orange = 3, Yellow, Purple
  }
  console.log(Colors.Blue);
}