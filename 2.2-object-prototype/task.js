"use strict"

// Задача 1
String.prototype.isPalindrome = function isPalindrome() {
  let str = this.split(' ').join('').toLowerCase();
  let reversedString = '';

  for (let i = this.length - 1; i >= 0; i--) {
    reversedString += this[i];
  }
  reversedString = reversedString.split(' ').join('').toLowerCase();

  if (str === reversedString) {
    return true;
  } else {
    return false
  }
}

console.log("А роза упала на лапу Азора".isPalindrome());

// Задача 2
function getAverageMark(marks) {
  let average = 0;

  if (marks.length === 0) {
    return 0;
  }

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 0) {
      return `Введено отрицательное число`;
    }
    average += marks[i];
  }

  average /= marks.length;
  let roundedAverage = Math.round(average);

  return roundedAverage;
}

// Задача 3
function checkBirthday(userBirthday) {
  let birthday;
  let now = new Date();
  now.setHours(0, 0, 0, 0);
  now = +now;

  let date = userBirthday.split('-');
  birthday = new Date(date[0], date[1] - 1, date[2]);
  birthday = +birthday;

  let diff = now - birthday;
  let millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  let age = diff / millisecondsPerYear;
  age = Number(new Date(age));

  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}
