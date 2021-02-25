'use strict'

//Задача 1
function getResult(a, b, c) {
  let x = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;

  if (discriminant < 0) {
    x = [];
  } else if (discriminant === 0) {
    x.push((-b + Math.sqrt(discriminant)) / (2 * a));
  } else {
    x.push((-b + Math.sqrt(discriminant)) / (2 * a));
    x.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }
  return x;
}

//Задача 2
function getAverageMark(marks) {
  let averageMark;
  let sum = 0;

  if (marks.length === 0) {
    averageMark = 0;
  } else if (marks.length > 5) {
    console.log('Оценок больше пяти');
    marks.splice(5);
  }

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    averageMark = sum / marks.length;
  }

  return averageMark;
}

// Задача 3
function askDrink(name, dateOfBirthday) {
  let yearBirthday = dateOfBirthday.getFullYear();
  let currentYear = new Date().getFullYear();
  let age = currentYear - yearBirthday;
  let result;

  if (age > 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
  }

  return result;
}
