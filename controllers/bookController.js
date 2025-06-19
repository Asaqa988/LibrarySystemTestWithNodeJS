import Book from '../models/Book.js';

export const addBook = async (req, res) => {
  const { name, isbn, aisle, author } = req.body;
  const ID = isbn + aisle;

  try {
    const book = new Book({ name, isbn, aisle, author, ID });
    await book.save();
    res.status(200).json({ Msg: 'successfully added', ID });
  } catch (err) {
    res.status(500).json({ Msg: 'error', error: err.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const books = await Book.find({ ID: req.query.ID });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { ID } = req.body;
    const deleted = await Book.findOneAndDelete({ ID });
    if (deleted) {
      res.status(200).json({ msg: 'book is successfully deleted' });
    } else {
      res.status(404).json({ msg: 'book not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
