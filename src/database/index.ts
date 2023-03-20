import { DataSource } from "typeorm"


//Aqui ficará a configuração relacionada ao BD
export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/db.sqlite",
    migrations: [
        "./src/database/migrations"
    ],
    
})