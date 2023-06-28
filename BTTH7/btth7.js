function checkNamNhuan(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

let inputUser = Number(prompt("Nhạp vao số năm"));
let check = checkNamNhuan(inputUser);

if (check) {
  console.log("Đây là năm nhuận");
} else {
  console.log("Đây không phải là năm nhuận");
}
