const express = require('express');
const router = express.Router();
const Author = require('../models/author');
const Book = require('../models/book');

// Добавление автора
router.post('/authors', async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).send(author);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Получение всех авторов
router.get('/authors', async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).send(authors);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Добавление книги
router.post('/books', async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Получение всех книг
router.get('/books', async (req, res) => {
  try {
    const books = await Book.find().populate('author');
    res.status(200).send(books);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
