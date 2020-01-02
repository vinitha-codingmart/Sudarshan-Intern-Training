const express = require('express');
const mysql = require('mysql');
var path = require('path')


//Create Connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'db'
})

const app =  express();
app.use(express.static(path.join(__dirname, 'Public')));

var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'sampleDB'
});

connection.connect(function(error){
    if(!error){
        console.log('Error')
    }
    else{
        console.log('Connected')
    }
})

app.get('/',function(req,res) {
    res.sendFile('/home/system3/Documents/Project/Public/index.html');

  });

 
app.listen('3001',()=>{
    console.log('Server started on port 3000')
})