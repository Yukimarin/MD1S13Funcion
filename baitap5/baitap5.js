function swapNumber(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

let number1 = Number(prompt("Nhap vao so thu nhat"));
let number2 = parseInt(prompt("Nhap vao so thu hai"));

console.log("Truoc khi doi cho");
console.log(`So thu nhat la:${number1}`);
console.log(`So thu hai la:${number2}`);

// Destrucring
let [sauDoiCho1, sauDoiCho2] = swapNumber(number1, number2);

console.log("Sau khi doi cho");
console.log(`So thu nhat la:${sauDoiCho1}`);
console.log(`So thu hai la:${sauDoiCho2}`);
