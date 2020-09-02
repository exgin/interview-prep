/* turn an array to an object

1) if there are not enough values for keys, the rest of the keys value is null
2) if there is not enough keys, ignore the rest of the values

*/
function twoArrayObject(keys, values) {
  const newMap = new Map();

  return keys.reduce((obj, cur, idx) => {
    /* 
    when the idx of keys is less than our value's length | set the value to the idx value
    else its null
    */
    obj[cur] = idx < values.length ? values[idx] : null;

    return obj;
  }, {});
}

console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3, 4]));
