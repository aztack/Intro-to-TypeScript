/**
 * Value Space
 */
function IsUndefined(a: any) {
  return a === undefined ? true : false;
}
/**
 * Type Space
 */
type IsUndefined<T> = T extends undefined ? true : false;
type R1 = IsUndefined<string>; // false
type R2 = IsUndefined<undefined>; // true
