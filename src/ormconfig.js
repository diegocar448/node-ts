module.exports = {
    type: "sqlite",
    database: "./src/database/db.sqlite",
    migrations: [
        "./src/database/migrations"
    ],
    cli: {
        //diretorio onde ficam as migrations
        migrationsDir: "./src/database/migrations"
    }
}