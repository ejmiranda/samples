/*
const removeFromArray = function(array) {
  let removedArray = [];
  outer:
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < arguments.length; j++) {
      if (array[i] === arguments[j]) {
        continue outer;
      }
    }
    removedArray.push(array[i]);
  }
  return removedArray;
}
*/

var removeFromArray = function(...args) {
  const array = args[0]
  return array.filter(val => !args.includes(val))
};