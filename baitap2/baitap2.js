function tinhDienTichHinhTron(bankinh) {
  return Math.PI * bankinh * bankinh;
}

function tinhChuViHinhTron(bankinh) {
  return 2 * Math.PI * bankinh;
}

let input = Number(prompt("Nhap vao ban kinh hinh tron"));

console.log(tinhChuViHinhTron(input));
console.log(tinhDienTichHinhTron(input));
