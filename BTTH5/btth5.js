function tinhGiaiThua(number) {
  let giaiThua = 1;
  if (number === 0 || number === 1) {
    return giaiThua;
  } else {
    for (let i = 2; i < number; i++) {
      giaiThua = giaiThua * i;
    }
    return giaiThua;
  }
}

let input = Number(prompt("Nhap vao mot so nguyen"));
console.log(tinhGiaiThua(input));
