let n = +prompt ("Введіть початкове число");
while ((!Number.isInteger(n)) || (Number.isNaN(n))) {
  n = +prompt ("Введіть ціле число");
}

let m = +prompt ("Введіть кінцеве число");
while ((!Number.isInteger(m)) || (Number.isNaN(m)) || (m < n)) {
  m = +prompt ("Введіть ціле число, більше за попереднє");
}

let pairedSkip = confirm ("Пропустити парні числа?");

let sum = 0;

if (pairedSkip) {
  for (let a = n; a <= m; a ++) {
      if (a % 2 === 0) continue;
      sum = sum + a;
  }
}

else {
  for (let a = n; a <= m; a ++) {
      sum = sum + a;
  }
}

alert (sum);
