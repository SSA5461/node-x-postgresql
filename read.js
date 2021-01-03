const { end } = require("./db_config");
const client = require("./db_config");

client.connect()
    .then(() => client.query("select *from a"))
    .then(results => console.table(results.rows))
    .catch(e => console.log("error"))
    .finally(() => client.end())