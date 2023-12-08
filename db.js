const { Pool } = require("pg");

const connectionString =
  "postgresql://postgres:3dcAAG3-G41EFG4g-FBAAdd4gf1e3c4-@monorail.proxy.rlwy.net:49983/railway";

const pool = new Pool({
  connectionString,
});

module.exports = pool;