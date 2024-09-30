import mongoose from "mongoose";

const schema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
  },
  autor: {
    type: String,
    required: true,
    trim: true,
  },
  editorial: {
    type: String,
    required: true,
    trim: true,
  },
  descripcion: {
    type: String,
    required: true,
    trim: true,
  },
  tipo: {
    type: String,
    enum: [
      "Autoayuda",
      "Ciencia Ficción",
      "Religión",
      "Fantasía",
      "Historia",
      "Novela",
      "Biografía",
      "Misterio",
    ],
    required: true,
  },
  edicion: {
    type: String,
    required: true,
    trim: true,
  },
});

const bookModel = mongoose.model("Book", schema);

export default bookModel;