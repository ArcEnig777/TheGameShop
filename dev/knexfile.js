module.exports = {
    development: {
        client: 'pg',
        connection : {
            // db_type://user:password@IP:PORT/database_name
            connectionString: `postgres://postgres:postgres@127.0.0.1:5433/testdb`
        }
    }
}