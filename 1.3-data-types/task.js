"use strict"
// Задача 1
function calculateTotalMortgage(percent, contribution, amount, date) {

  if (isNaN(parseInt(percent)) || percent === '' || percent === ' ') {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  } else {
    percent = parseInt(percent);
  }
  if (isNaN(parseInt(contribution)) || contribution === '' || contribution === ' ') {
    return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
  } else {
    contribution = parseInt(contribution);
  }
  if (isNaN(parseInt(amount)) || amount === '' || amount === ' ') {
    return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
  } else {
    amount = parseInt(amount);
  }

  percent = +percent;
  contribution = +contribution;
  amount = +amount;
  date = date.getFullYear();

  if ((date - new Date().getFullYear()) * 12 < 12) {
    return `Выберите корректную дату.`;
  }

  let monthForPayment = (date - new Date().getFullYear()) * 12; // кол-во месяцев
  let bodyOfTheLoan = amount - contribution; // тело кредита
  let theInterestRatePerMonth = percent / 100 / 12; // 1/12 процентной ставки
  let S = bodyOfTheLoan;
  let P = theInterestRatePerMonth;
  let n = monthForPayment;

  let monthlyPayment = S * (P + P / ((Math.pow((1 + P), n)) - 1));

  let totalAmount = (amount + (monthlyPayment * n - amount)).toFixed(2);
  totalAmount = +totalAmount;

  console.log(totalAmount);
  return totalAmount;
}

//Задача 2
function getGreeting(name) {
  let greeting;
  if (!name || name === ' ') {
    greeting = 'Привет, мир! Меня зовут Аноним.';
    console.log(greeting);
  } else {
    greeting = `Привет, мир! Меня зовут ${name}.`;
    console.log(greeting);
  }
  return greeting;
}
