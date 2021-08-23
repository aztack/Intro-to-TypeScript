enum T {
  X = 'x',
  Y = 'y',
  Z = 'z'
}

function narrowed_as_expected<t extends T>(a: t): void {
  if (a === T.X) return;
  console.log(a); // typeof a == T.Y | T.Z
}

function widen_by_assign_to_const<t extends T>(a: t): void {
  if (a === T.X) return;
  const b = a; // typeof b = t extends T
  console.log(a, b); // typeof a == T.Y | T.Z
}

function widen_by_assign_to_self<t extends T>(a: t): void {
  if (a === T.X) return;
  a = a; // typeof a = t extends T
  console.log(a); // typeof a == T
}