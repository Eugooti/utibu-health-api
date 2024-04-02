const { Sequelize } = require('sequelize');

// Create a Sequelize instance
const sequelize = new Sequelize({
    dialect: 'mssql',
    dialectOptions: {
        options: {
            trustedConnection: true // Use Windows authentication
        }
    },
    server: 'localhost\\SQLEXPRESS', // SQL Server host and instance name
    database: 'master', // Database name
    port: 1433, // Port number
    logging: false // Disable logging for SQL queries (optional)
});

module.exports = sequelize;
