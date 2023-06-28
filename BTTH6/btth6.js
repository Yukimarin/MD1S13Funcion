function sapXep(numberString) {
  let numberArr = numberString.split(",");
  numberArr.sort(function (a, b) {
    return a - b;
  });
  let result = numberArr.join(",");
  return result;
}

let input = prompt("Nhap vao mot choi so");
console.log(sapXep(input));
