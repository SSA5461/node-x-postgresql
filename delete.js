const client = require('./db_config')

client.connect()
    .then(() => client.query("drop table a"))
    .then(() => console.log("table deleted"))
    .catch(e => console.log("error"))
    .finally(() => client.end())