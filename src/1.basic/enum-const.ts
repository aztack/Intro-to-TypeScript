namespace _enum {
  const enum CJK {
    Chinese,
    Japanese = 'Japanese',
    Korean = 1
  }
  console.log(CJK);
  const c1 = CJK.Chinese;

  const enum Colors { Red, Green, Blue }

  const enum Colors {
    Orange = 3, Yellow, Purple
  }
  console.log(Colors.Blue);
}