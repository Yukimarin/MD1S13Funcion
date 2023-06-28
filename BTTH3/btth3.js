let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function timCapSo(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === 10) {
        result.push([array[i], array[j]]);
      }
    }
  }
  return result;
}

console.log(timCapSo(arr));
