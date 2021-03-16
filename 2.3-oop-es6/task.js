'use strict'

// Задача 1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state *= 1.5;
    return this.state;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

// Задача 2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book._state > 30) {
      this.books.push(book);
      return `Книга "${book.name}" добавлена`;
    } else {
      return `Книга не может быть добавлена`;
    }
  }

  findBookBy(type, value) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i][type] === value) {
        return this.books[i];
      }
    }
    return null;
  }

  giveBookByName(bookName) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === bookName) {
        this.giveBook = this.books[i];
        this.books.splice(i, 1);
        return this.giveBook;
      }
    }
    return null;
  }
}

// Задача 3
class StudentLog {
  constructor(name) {
    this.name = name;
    this.marks = [];
  }

  getName() {
    return this.name;
  }

  addGrade(grade, subject) {
    if (grade >= 1 && grade <= 5 && !this.hasOwnProperty(subject)) {
      let newProperty = subject;
      this[newProperty] = [grade];
      this.marks.push(grade);// для подсчета общей средней оценки по всем предметам
      return this[newProperty].length;
    } else if (grade >= 1 && grade <= 5 && this.hasOwnProperty(subject)) {
      this[subject].push(grade);
      this.marks.push(grade);// для подсчета общей средней оценки по всем предметам
      return this[subject].length;
    } else if (!this.hasOwnProperty(subject)) {
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.\n0`;
    } else {
      return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.\n${log[subject].length}`
    }
  }

  getAverageBySubject(subject) {
    let averageRating = 0;
    if (!this.hasOwnProperty(subject)) {
      return 0;
    }
    for (let i = 0; i < this[subject].length; i++) {
      averageRating += this[subject][i];
    }
    averageRating /= this[subject].length;
    return averageRating;
  }

  getTotalAverage() {
    console.log(this.marks.length);
    if (this.marks.length === 0) {
      return 0;
    }
    let totalAverage = 0;
    for (let i = 0; i < this.marks.length; i++) {
      totalAverage += this.marks[i];
    }
    return totalAverage / this.marks.length;
  }
}

// Тестовый сценарий задачи 2

const library = new Library("Библиотека имени Ленина");
console.log(library.name);

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
library.addBook(new Book("Михаил Осипович Гершензон", "Мудрость Пушкина", 1919, 232));

console.log(library.findBookBy("releaseDate", 1919));
console.log(library.giveBookByName("Пикник на обочине")); // выдача книги
console.log(library.books);
console.log(`Состояние книги на момент выдачи ${library.giveBook.state}`); //проверка состояния книги перед выдачей
console.log(`Состояние книги на момент возврата ${library.giveBook.state = 30}`); //порча книги
console.log(`Книгу удалось восстановить до состояния ${library.giveBook.fix()}`); // восстановление книги
console.log(library.addBook(library.giveBook)); // добавление книги









