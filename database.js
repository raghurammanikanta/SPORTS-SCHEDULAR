const { Pool } = require('pg');



const pool = new Pool({
   
        user: 'postgres',
        host: 'localhost',
        database: 'sportssch',
        password: 'raghu@RAM!',
        port: 5432,
});

module.exports = pool;
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Database connected successfully:', res.rows);
    }
});



