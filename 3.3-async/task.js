'use strict'
// Задача 1
class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, callback, id) {
    if (id === undefined) {
      throw new Error('error text');
    }
    if (this.alarmCollection.some(alarm => alarm.id === id)) {
      return console.error(`Будильник ${id} уже существует`);
    }

    this.alarmCollection.push({
      id,
      time,
      callback
    });
  }

  removeClock(id) {
    this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
    return !this.alarmCollection.some(alarm => alarm.id === id);
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString().slice(0, -3);
  }

  checkClock(alarm) {
    if (this.getCurrentFormattedTime() === alarm.time) {
      alarm.callback();
    }
  }

  start() {
    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(item => this.checkClock(item))
      }, 60000);
    }
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
    }
    this.timerId = null;
  }

  printAlarms() {
    console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
    this.alarmCollection.forEach(item => console.log(`Будильник ${item.id} установлен на ${item.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection.splice(0);
  }
}

function testCase() {
  function gettingTheTime(delay) {
    const time = Date.now() + 60000 * delay;

    return new Date(time).toLocaleTimeString().slice(0, -3);
  }

  const alarm = new AlarmClock;

  function catchError(time, callback, id) {
    try {
      return alarm.addClock(time, callback, id);
    } catch (e) {
      return console.log('Невозможно идентифицировать будильник. Не передан параметр id');
    }
  }

  catchError(gettingTheTime(1), () => console.log('Пора вставать'), 1);

  catchError(gettingTheTime(2), () => {
    console.log('Давай вставай уже');
    alarm.removeClock(2)
  }, 2);

  catchError(gettingTheTime(3), () => console.log('Иди умываться'));

  catchError(gettingTheTime(3), () => {
    console.log('Вставай');
    alarm.clearAlarms();
    alarm.printAlarms();
  }, 3);

  catchError(gettingTheTime(3), () => console.log('Вставай, проспишь'), 3);
  catchError(gettingTheTime(4), () => console.log('Вставай, опоздаешь'), 4);

  console.log('\nПечать звонков до удаления звонка');
  alarm.printAlarms();

  console.log('\nУдаление звонка');
  console.log(alarm.removeClock(4));

  console.log('\nПечать звонков после удаления звонка');
  alarm.printAlarms();

  alarm.start();
}

console.log(testCase());
