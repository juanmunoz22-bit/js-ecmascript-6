// flat
const array = [1, 2, 3, 4, 5, [6, 7, 8, [1, 2]]];
console.log(array.flat(3));

// flatMap
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array2.flatMap(value => [value * 2]));
