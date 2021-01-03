const client = require("./db_config");
client.connect()
    .then(() => client.query(`create table a
        (id int not null primary key, 
        nama varchar(20))`))
    // .then(() => client.query(`create table b
    //     (id int not null primary key,
    //     nama varchar(20))`))
    .then(() => console.log("table created"))
    // .catch(e => console.log("ERROR"))
    .finally(() => client.end());