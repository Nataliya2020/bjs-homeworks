'use strict'
// Задача 1
console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(strength) {
  return weapons.filter(weapon => weapon.durability > strength).length;
}

function hasReliableWeapons(strength) {
  return weapons.some(weapon => weapon.durability > strength);
}

function getReliableWeaponsNames(strength) {
  return weapons.filter(weapon => weapon.durability > strength).map(weapon => weapon.name);
}

function getTotalDamage() {
  return weapons.reduce((sum, damage) => sum + damage.attack, 0);
}

// Необязательное задание
function getValuestCountToSumValues(arr, sum) {
  return arr.reduce((obj, item, index) => {
    if (obj.amount < sum) {
      obj.amount += item;
      obj.index += 1;
    }
    return obj;
  }, {amount: 0, index: 0}).index;
}

// Задача 2
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {
  }
}

function sum(...args) {
  // Замедление на половину секунды.
  //sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((arr1Item, i) => arr1Item === arr2[i]);
}

//мемоизация новая версия
function memorize(fn, limit) {
  const memory = [];
  let comparisonFind;
  let res;
  return (...value) => {
    comparisonFind = memory.find(memoryItem => compareArrays(memoryItem.args, value));
    if (comparisonFind) {
      console.log('Результат взят из памяти');
      return comparisonFind.result;
    }

    res = fn(...value);
    console.log('Функция вызвана не из памяти');
    memory.push({
      args: value,
      result: res
    })

    if (memory.length > limit) {
      memory.splice(0, 1);
    }
    return res;
  }
}

// Задача 3
function testCase(testFunction, processTime) {
  const arr = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];
  console.time(processTime);

  for (let i = 0; i <= 1; i++) {
    arr.forEach(function (...arr) {
      testFunction.apply(this, ...arr)
    });
  }

  console.timeEnd(processTime);
}

console.log(testCase(sum, 'Время выполнения функции sum'));
console.log(testCase(memorize, 'Время выполнения функции memorize'));

// При вывозве функций 100 раз * 5 элементов массива аргументов
// и задержке в функции sum равной 100 миллисекунд
// время выполнения функции sum составляет  1011.908203125 ms
// время выполнения функции memorize составляет 0.674072265625 ms

// При вывозве функций 100 раз * 5 элементов массива аргументов
// и без задержки в функции sum
// время выполнения функции sum составляет 0.37890625 ms
// время выполнения функции memorize составляет 0.148193359375 ms
//
// Вывод - оптимизация для ускорения работы функций необходиа.

