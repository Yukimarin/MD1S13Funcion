function searchMinNumber(a, b, c) {
  let min = a;
  if (b < min) {
    min = b;
  }
  if (c < min) {
    min = c;
  }
  return min;
}

let number1 = Number(prompt("Nhap vao so thu nhat"));
let number2 = Number(prompt("Nhap vao so thu hai"));
let number3 = Number(prompt("Nhap vao so thu ba"));

console.log(`So be nhat la: ${searchMinNumber(number1, number2, number3)}`);
