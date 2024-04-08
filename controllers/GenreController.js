import { Sequelize } from "sequelize";
import Genero from "../models/Genero.js";
import Producto from "../models/Porducto.js";

export const getAllGenresWithProductCount = async (req, res) => {
    try {
        // Obtener todos los géneros
        const genres = await Genero.findAll();

        // Para cada género, obtener la cantidad total de productos
        const genresWithProductCount = await Promise.all(genres.map(async (genre) => {
            const genreId = genre.idGenero;

            // Obtener la cantidad total de productos para el género
            const productCount = await Producto.count({
                where: {
                    generos_idGenero: genreId
                }
            });

            return {
                idGenero: genre.idGenero,
                genero: genre.genero,
                count: productCount,
                path: `http://localhost:8000/Genres/${genre.idGenero}`
            };
        }));

        res.json(genresWithProductCount);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getListByGenre = async (req, res) => {
    try {
        const genreId = req.params.id;
        const products = await Producto.findAll({
            where: {
                generos_idGenero: genreId
            },
            attributes: {
                include: [
                    [
                        Sequelize.literal(`CONCAT('http://localhost:8000/Products/', Producto.id)`),
                        "url"
                    ]
                ]
            }
        });
        const response = {
            meta: {
                status: 200,
                count: products.length,
                path: `http://localhost:8000/Genres/${genreId}`
            },
            data: products
        };
        res.json(response);
    } catch (error) {
        res.json({ message: error.message });
    }
};

export const getGenreCount = async (req, res) => {
    try {
        const counts = {};
        const products = await Producto.findAll();
        products.forEach(product => {
            if (counts[product.generos_idGenero] === req.params.id) {
                counts[product.generos_idGenero]++;
            } else {
                counts[product.generos_idGenero] = 1;
            }
        });
        res.json(counts);
    } catch (error) {
        res.json({ message: error.message });
    }
};
