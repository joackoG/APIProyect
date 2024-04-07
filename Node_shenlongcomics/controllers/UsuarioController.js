import { Sequelize } from "sequelize";
import Usuario from "../models/Usuario.js";

    export const Allusers= async(req,res)=>{
    try {

        const Usuarios= await Usuario.findAll({
            attributes: {
                include: [
                    [
                        Sequelize.literal(`CONCAT('http://http://localhost:8000/Users/', Usuario.id)`),
                        "url"
                    ]
                ]
            }
        })


        res.json(Usuarios)
    }catch (error){
        res.json({message: error.message})
    }
}

 export const getUser= async (req,res)=>{
    try{
        const user=await Usuario.findByPk(req.params.id)
        res.json (user)

    }catch (error){
        res.json({message: error.message})
 }
}


