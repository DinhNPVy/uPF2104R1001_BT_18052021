let  lend = +prompt("Nhập số tiền vay: ");
let i_rate = parseFloat(prompt("Nhập lãi suất: "));
let year = +prompt("Nhập số năm: ");
let irate = (i_rate/100)/n;
Amountofprofit = lend * irate;

document.write(Amountofprofit + " triệu đồng");
