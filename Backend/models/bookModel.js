import { Sequelize } from "sequelize";
import db from "../config/dBase.js";

const {DataTypes} = Sequelize;

const Book = db.define('books',{
  author : DataTypes.STRING,
  title : DataTypes.STRING,
  genre : DataTypes.STRING
},{
    freezeTableName: true
});

export default Book;

(async()=>{
    await db.sync();
})();