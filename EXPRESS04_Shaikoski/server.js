//como carregar do mysql atraves de arquivo externo

const express = require("express")
const mysql = require("mysql2")

const mysql_config = require("./mysql.config")

const app =express
app.listen(3000,()=>{
    console.log('servidor em execução')
})

const connection = mysql.createConnection(mysql_config)