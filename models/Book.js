import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  isbn: { type: String, required: true },
  aisle: { type: String, required: true },
  author: { type: String, required: true },
  ID: { type: String, unique: true }
});

export default mongoose.model('Book', bookSchema);
