/* turn an array to an object

1) if there are not enough values, the rest of the keys value is null
2) if there is not enough keys, ignore the rest of the values

*/
function twoArrayObject(keys, values) {
  let ds = new Map(keys, values);
}

console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3, 4]));
