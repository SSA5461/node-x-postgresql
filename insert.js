const client = require("./db_config");

client.connect()
    .then(() => client.query(`insert into a values
        (234, 'abc'),
        (123, 'bcd')`))
    .then(() => console.log("value masuk"))
    .catch(e => console.log("error"))
    .finally(() => client.end())