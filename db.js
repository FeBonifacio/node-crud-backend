import mysql from "mysql";

//CONEXÃO COM O BANCO

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'crud',
});