import { Sequelize } from 'sequelize';

const db = new Sequelize( 'shenlongcomics','root','',{
    host: 'localhost',
    dialect: 'mysql'
}
)
export default db