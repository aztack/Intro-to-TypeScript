namespace _enum {
  enum CJK {
    Chinese,
    Japanese = 'JP',
    Korean = 1
  }
  console.log(CJK);
  const c1 = CJK.Chinese;
}

namespace _enum {
  namespace Colors {
    export function toString(color: Colors) {
      return Colors[color];
    }
  }

  enum Colors { Red, Green, Blue }

  enum Colors {
    Orange = 3, Yellow, Purple
  }
  console.log(Colors.toString(Colors.Blue)); // "Blue"
}