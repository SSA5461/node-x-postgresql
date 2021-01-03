const { Client } = require('pg');

const client = new Client({
    user: 'postgres', //username
    host: '127.0.0.1',  //server
    database: "db2",  //database name
    password: '',  //password
    port: 5432   //port
});

module.exports = client;