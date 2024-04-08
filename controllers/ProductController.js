import { Sequelize } from "sequelize";
import Porducto from "../models/Porducto.js";

    export const Allporducts= async(req,res)=>{
    try {

        const Porductos= await Porducto.findAll({
            attributes: {
                include: [
                    [
                        Sequelize.literal(`CONCAT('http://localhost:8000/Products/', Producto.id)`),
                        "url"
                    ]
                ]
            }
        })
        res.json(Porductos)
    }catch (error){
        res.json({message: error.message})
    }
}
export const getList= async (req,res)=>{
    try{
        const lists=await Porducto.findAll({
            attributes: {
                include: [
                    [ 
                        Sequelize.literal(`CONCAT('http://localhost:8000/Products/',Producto.id)`),
                        "url;"
                    ]
                ], 
            }   
        })
        const response= {
            meta:{
                status: 200,
                count: lists.length,
                path: "http://localhost:8000/Products/"
            },
            data: lists
        }
        res.json(response)


    }catch(error){

    }
}

 export const getproducts= async (req,res)=>{
    try{
        const product=await Porducto.findByPk(req.params.id)
    
        res.json (product)

    }catch (error){
        res.json({message: error.message})
 }

 }
 export const getCount= async (req,res)=>{
    try{
        const counts = {};
        const products= await Porducto.findAll()

        // Calcula la cantidad de productos por género
        products.forEach(product => {
            if (counts[product.genreId]== req.params) {
                counts[product.genreId]++;
            } else {
                counts[product.genreId] = 1;
            }
        });
       
        // Envía la respuesta con la cantidad de productos por género
        res.json(counts);
    }catch (error){
        res.json({message: error.message})
 }
 
}
export const getLastProduct = async (req,res) => {
    try {
        const Porductos= await Porducto.findOne({
        
                order: [['id', 'DESC']], // Ordena por ID de forma descendente
            
            attributes: {

                include: [
                    [
                        Sequelize.literal(`CONCAT('http://localhost:8000/Products/', Producto.id)`),
                        "url"
                    ]
                ]
            }
        })
        res.json(Porductos)
    }catch (error){
        res.json({message: error.message})
    }
}