function kiemTraTanSuatKiTu(string) {
  let count = {};
  //   Lăp các ky tự trong chuỗi
  for (let i = 0; i < string.length; i++) {
    let kytu = string[i];
    if (count[kytu]) {
      count[kytu]++;
    } else {
      count[kytu] = 1;
    }
  }
  // In ra màn hình
  for (const kytu in count) {
    console.log("Ky tu " + kytu + " xuat hien" + count[kytu] + " lan");
  }
}

let input = prompt("Nhao vao mot chuoi ky tu");

kiemTraTanSuatKiTu(input);
