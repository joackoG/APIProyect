import express from 'express';
import { getAllGenresWithProductCount, getListByGenre, getGenreCount } from '../controllers/GenreController.js';

const router = express.Router();

// Ruta para obtener todos los géneros
router.get('/', getAllGenresWithProductCount);

// Ruta para obtener la lista de productos por género
router.get('/:id', getListByGenre);

// Ruta para obtener el contador de productos por género
router.get('/count/:id', getGenreCount);

export default router;
