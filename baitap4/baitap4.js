function checkInteger(number) {
  if (Number.isInteger(number) && number > 0) {
    return true;
  } else {
    return false;
  }
}

let input = Number(prompt("nhap vao mot so bat ky"));

if (checkInteger(input)) {
  console.log("So nhap vao la mot so nguyen duong");
} else {
  console.log("So nhap vao khong phai la so nguyen duong");
}
