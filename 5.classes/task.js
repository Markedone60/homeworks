'use strict';

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = Math.round(this.state * 1.5);
    }

    set state(number) {
        if (number <= 0) {
            number = 0;
        } else if (number >= 100) {
            number = 100;
        } 
        this._state = number;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    type = 'magazine';
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
    }
    type = 'book';
}

class NovelBook extends Book {
    type = 'novel';
}

class FantasticBook extends Book {
    type = 'fantastic';
}

class DetectiveBook extends Book {
    type = 'detective';
}

//Task 2

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let foundBook = this.books.find((book) => book[type] === value);
        if (foundBook === undefined) {
            return null;
        } else return foundBook;
    }

    giveBookByName(bookName) {
        let givenBook = this.books.find((book) => book.name === bookName);
        if (givenBook === undefined) {
            return null;
        } else return this.books.splice(givenBook);
    }
}
