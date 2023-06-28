function kiemTraSoNguyenTo(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

let input = Number(prompt("Nhap vao so bat ki"));

if (kiemTraSoNguyenTo(input)) {
  console.log("Day la so nguyen to");
} else {
  console.log("Day khong phai la so nguyen to");
}
