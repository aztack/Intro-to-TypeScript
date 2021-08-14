namespace _enum {
  enum CJK {
    Chinese,
    Japanese = 'Japanese',
    Korean = 1
  }
  /* {
    "0": "Chinese", "1": "Korean",
    "Chinese": 0, "Japanese": "Japanese", "Korean": 1
  }*/
  console.log(CJK);
  const c1 = CJK.Chinese;

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