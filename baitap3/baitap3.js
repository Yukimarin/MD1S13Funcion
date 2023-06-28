function kiemTraKyTuSo(kytu) {
  return !isNaN(kytu);
}

let input = prompt("nhap vao mot ku tu");

if (kiemTraKyTuSo(input)) {
  console.log("Ky tu nhap vao la mot so");
} else {
  console.log("ky tu nhap vao khong phai la so");
}
