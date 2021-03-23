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
  const moreThanThePassedValue = weapons.filter(weapon => weapon.durability > strength);
  return moreThanThePassedValue.map(moreThanThePassedValue => moreThanThePassedValue.name);
}

function getTotalDamage() {
  let amount = 0;
  let damage = weapons.map(weapon => {
    amount += weapon.attack;
    return amount;
  })
  damage = damage.reverse();
  return damage[0];
}

// Необязательное задание
function getValuestCountToSumValues(arr, sum) {
  let amount = 0;
  let count = 0;
  const sumItem = arr.map(item => {
    amount += item;
    return amount;
  })
  if (sumItem.some(item => item === sum)) {
    count = (sumItem.findIndex(item => item === sum) + 1);
  } else if (sumItem.some(item => item > sum)) {
    count = (sumItem.findIndex(item => item > sum) + 1);
  } else {
    count = arr.length;
  }
  return count;
}

// Задача 2
function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {
  }
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(100); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((arr1Item, i) => arr1Item === arr2[i]);
}

//мемоизация
function memorize(fn, limit) {

  const memory = [];
  let mSum;
  return mSum = (...value) => {
    let arrArgumentsMSum = [];
    arrArgumentsMSum.push(value);
    let comparisonFind;

    comparisonFind = memory.find(memoryItem => {
      if (compareArrays(memoryItem.args[0], arrArgumentsMSum[0])) {
        console.log('Результат взят из памяти');
        return memoryItem.result;
      } else {
        return false;
      }
    })

    let res;
    if (typeof comparisonFind === 'undefined') {
      console.log('Функция вызвана не из памяти');
      res = fn(...value);
      memory.push({
        args: arrArgumentsMSum,
        result: res
      })
    } else {
      res = comparisonFind.result;
    }

    if (memory.length > limit) {
      memory.splice(0, 1);
    }
    return res;
  }
}

const mSum = memorize((a, b, c, d) => a + b + c + d, 5);
mSum(3, 5, 6, 7);
mSum(3, 3, 6, 7);
mSum(3, 5, 6, 7);

// Задача 3
function testCase(testFunction, processTime) {
  const arr = [[1, 2, 3], [1, 2], [1, 2, 3], [1, 2], [9, 5, 2, 4]];
  console.time(processTime);

  for (let i = 0; i <= 100; i++) {
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
// время выполнения функции sum составляет 51006.919189453125 ms
// время выполнения функции memorize составляет 0.2529296875 ms

// При вывозве функций 100 раз * 5 элементов массива аргументов
// и без задержки в функции sum
// время выполнения функции sum составляет 0.620849609375 ms
// время выполнения функции memorize составляет 0.251220703125 ms
//
// Вывод - оптимизация для ускорения работы функций необходиа.


// Альтернативный вариант задачи 2

// 2.1

// function alternativeMemorize() {
//   let empty;
//   return empty = () => {};
// }
//
// const resultFunction = alternativeMemorize();
// resultFunction();

// 2.2

// function alternativeMemorize() {
//   let outputOfValues = (...value) => {
//     console.log(value);
//     return value;
//   }
//    return outputOfValues;
// }
//
// const resultFunction = alternativeMemorize();
// resultFunction(1, 2, 3, 4);

// 2.3

// function alternativeMemorize(fn) {
//   let res;
//   return res = (arg) => fn(arg);
// }
//
// const resultFunction = alternativeMemorize(a => a ** 2);
// console.log(resultFunction(2));
// console.log(resultFunction(5));

// 2.4

// function alternativeMemorize(fn) {
//   const values = [ {
//     args: [3, 4],
//     result: 7
//   },
//     {
//       args: [1, 3],
//       result: 4
//     }
//   ]
//   let funcGet;
//   return funcGet = (...value) => {
//     let argum = [];
//     argum.push(value);
//     let comparisonFind;
//
//     comparisonFind = values.find(valuesItem => {
//       if (compareArrays(valuesItem.args, argum[0])) {
//         return valuesItem.result;
//       } else {
//         return false;
//       }
//     })
//
//     let res;
//     if (typeof comparisonFind === 'undefined') {
//       res = 'Ничего не найдено';
//     } else {
//       res = comparisonFind.result;
//     }
//
//     return res;
//   }
// }
//
// const resultFunction = alternativeMemorize((a, b) => a + b);
// console.log(resultFunction(3, 4));
// console.log(resultFunction(5, 6));


// 2.5

// второй вариант мемоизации
// function memorize(fn, limit) {
//   const values = [];
//   let funcGet;
//   return funcGet = (...value) => {
//     let argum = [];
//     argum.push(value);
//     let comparisonFind;
//
//     comparisonFind = values.find(valuesItem => {
//       if (compareArrays(valuesItem.args[0], argum[0])) {
//         return valuesItem.result;
//       } else {
//         return false;
//       }
//     })
//
//     let res;
//     if (typeof comparisonFind === 'undefined') {
//       res = fn(...value);
//       values.push({
//         args: argum,
//         result: res
//       })
//     } else {
//       res = comparisonFind.result;
//     }
//
//     if (values.length > limit) {
//       values.splice(0, 1);
//     }
//
//     return res;
//   }
// }

