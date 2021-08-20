// https://github.com/microsoft/TypeScript/issues/29879#issuecomment-900193016
namespace _number_enum {
  /**
   * 由于历史原因，TS中任何number类型的值都可以赋值给number enum，并不会进行检查。在TS源码checker.ts的
   * function isSimpleTypeRelatedTo 中有这么一段注释
   * Type number or any numeric literal type is assignable to any numeric enum type or any
   * numeric enum literal type. This rule exists for backwards compatibility reasons because
   * bit-flag enum types sometimes look like literal enum types with numeric literal values.
   */
  enum D {Zero = 0}
  const d0: D = D.Zero;
  const d1: D = 0;
  const d2: D = NaN; 
  const d3: D = Infinity;
  const d4: D = Math.PI;
  const d5: D = 0.1
  const d6: D = rand();

  /**
   * 但是string enum会进行检查，并且枚举项不等同于同内容的字符串字面量类型
   */
  enum S {First = 'first'};
  const s1: S = S.First; // OK
  const s2: S = 'first'; // error as expected
  const s3: S = 'foo'; // error as expected

  function rand(): number {
    return Math.random()
  }
}