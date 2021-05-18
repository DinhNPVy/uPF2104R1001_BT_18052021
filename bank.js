let  lend = +prompt("Nhập số tiền vay: ");
let i_rate = parseFloat(prompt("Nhập lãi suất: "));
let n = +prompt("Nhập số năm: ");
let irate = (i_rate/100)/n;
soTienLai = lend * irate;

document.write(soTienLai);
