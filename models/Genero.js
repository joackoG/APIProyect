import db from "../database/db.js";
import { DataTypes } from "sequelize";

const alias = 'Genero';
const cols = {
    idGenero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    genero: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
    }
};

const confi = {
    tableName: 'generos',
    timestamps: false
    };

const Genero = db.define(alias, cols, confi);
Genero.associate= function(models){
    Genero.hasMany(models.Producto,{
        as:"Producto",
        foreignKey: "generos_idGenero", 

    })
}
export default Genero