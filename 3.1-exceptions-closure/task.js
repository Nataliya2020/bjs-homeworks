'use strict'

// Задача 1
function parseCount(quantity) {

  if (isNaN(Number.parseInt(quantity))) {
    throw new Error('Невалидное значение');
  }
  return Number.parseInt(quantity);
}

function validateCount(numberOfUnits) {
  try {
    return parseCount(numberOfUnits);
  } catch (e) {
    return e;
  }
}

//  Задача 2
class Triangle {
  constructor(a, b, c) {
    if (a + b < c || b + c < a || a + c < b) {
      throw new Error('Треугольник с такими сторонами не существует');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    this.p = this.getPerimeter() / 2;
    this.s = Math.sqrt(this.p * (this.p - this.a) * (this.p - this.b) * (this.p - this.c));
    this.s = this.s.toFixed((3));
    this.s = +this.s;
    return this.s;
  }
}

function getTriangle(sideA, sideB, sideC) {
  try {
    return new Triangle(sideA, sideB, sideC);
  } catch (e) {
    return {
      getArea: function () {
        return 'Ошибка! Треугольник не существует';
      },
      getPerimeter: function () {
        return 'Ошибка! Треугольник не существует';
      }
    }
  }
}
