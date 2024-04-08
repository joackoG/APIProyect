import db from "../database/db.js";
import { DataTypes } from "sequelize";
const alias = 'Usuario';
const cols = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },

    correo: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    fechaNac: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    fotoPerfil:{
        type: DataTypes.STRING(100),
    },
    admin: {
        type: DataTypes.BOOLEAN,
    },
    roles_id: {
        type: DataTypes.INTEGER,
    }
};

const confi = {
    tableName: 'usuarios',
    timestamps: false

};

const Usuario = db.define(alias, cols, confi);

Usuario.associate = function(models) {
    Usuario.belongsTo(models.Rol, {
        as: 'rol',
        foreignKey: 'roles_id'
    });
}


export default Usuario;
