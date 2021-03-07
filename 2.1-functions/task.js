'use strict'
// Задача 1
function getSolutions(a, b, c) {
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
    return {
      D: D,
      roots: []
    };
  } else if (D === 0) {
    let x1 = -b / (2 * a);
    return {
      D: D,
      roots: [x1]
    };
  } else if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    return {
      D: D,
      roots: [x1, x2]
    };
  }
}

function showSolutionsMessage(a, b, c) {
  let result = getSolutions(a, b, c);
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);

  if (result.roots.length === 0) {
    console.log(`Уравнение не имеет вещественных корней`);
  } else if (result.roots.length === 1) {
    console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
  } else if (result.roots.length === 2) {
    console.log(`Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage(1, 2, 3)
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

// Задача 2
function getAverageScore(data) {
  let averageMarks = {};
  let averageInAllSubject = 0;
  let count = 0;

  for (let property in data) {
    averageMarks[property] = getAverageMark(data[property]);
  }

  for (let property in averageMarks) {
    averageInAllSubject += averageMarks[property];
    count++;
  }

  if (count === 0) {
    averageMarks.average = averageInAllSubject;
    return averageMarks;
  }

  averageInAllSubject /= count;
  averageMarks.average = averageInAllSubject;
  return averageMarks;
}

function getAverageMark(marks) {
  let averageMarks = 0;

  if (marks.length === 0) {
    return averageMarks;
  } else {
    for (let i = 0; i < marks.length; i++) {
      averageMarks += marks[i];
    }
    return averageMarks / marks.length;
  }
}

// Задача 3
function getPersonData(secretData) {
  let person = {};

  for (let property in secretData) {
    if (property === 'aaa') {
      let valueName = secretData[property];
      property = 'firstName';
      person.firstName = getDecodedValue(valueName);
    } else if (property === 'bbb') {
      let valueLastName = secretData[property];
      property = 'lastName';
      person.lastName = getDecodedValue(valueLastName);
    }
  }

  return person;
}

function getDecodedValue(secret) {
  if (secret === 0) {
    return 'Родриго';
  } else if (secret === 1) {
    return 'Эмильо';
  }
}
