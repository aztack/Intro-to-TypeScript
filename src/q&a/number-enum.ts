// https://github.com/microsoft/TypeScript/issues/29879#issuecomment-900193016
namespace _number_enum {
  enum D {Zero = 0}
  const d0: D = D.Zero;
  const d1: D = 0;
  const d2: D = NaN; 
  const d3: D = Infinity;
  const d4: D = Math.PI;
  const d5: D = 0.1
  const d6: D = rand();

  enum S {First = 'first'};
  const s1: S = S.First; // OK
  const s2: S = 'first'; // error as expected
  const s3: S = 'foo'; // error as expected

  function rand(): number {
    return Math.random()
  }
}