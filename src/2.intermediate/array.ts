namespace _array {
    let a = [1, 2, 3]; // typeof a = number[]
    var b = ['a', 'b']; // typeof b = string[]
    let c = [1, 'a']; // typeof c = (string | number)[]
    const d = [2, 'b']; // typeof d = (string | number)[]

    // Error: Argument of type 'string' is not assignable
    // to parameter of type 'number'.
    a.push('red');

    let e = []; // typeof e = any[]
    e.push(1);
    e.push('red');

    function buildArray() {
        let e = []; // typeof e = any[]
        e.push(1); // 
        e.push('red');


        return e;
    }

    const myarray = buildArray();
    // Error: Argument of type 'boolean' is not 
    // assignable to parameter of type 'string | number'
    myarray.push(true);
    myarray.push(2); // OK
    myarray.push('blue'); // OK
}