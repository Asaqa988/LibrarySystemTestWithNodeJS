import express from 'express';
import { addBook, getBookById, deleteBook } from '../controllers/bookController.js';

const router = express.Router();

router.post('/Addbook', addBook);
router.get('/GetBook', getBookById);
router.delete('/DeleteBook', deleteBook);

export default router;
