const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  database: "equibalance",
  user: "equibalance",
  password: "!&9276BSvu%JGU4fQKr",
});

client.connect();
