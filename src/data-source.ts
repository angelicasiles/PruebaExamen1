import "reflect-metadata"
import { DataSource } from "typeorm"
import { cliente } from "./entity/cliente"

export const AppDataSource = new DataSource({ 
    type: "mysql",
    host: "db-mysql-nyc1-67716-do-user-14199295-0.b.db.ondigitalocean.com",
    port: 25060,
    username: "doadmin",
    password: "AVNS_a5pFK4Ti8Pt_HngEIFy",
    database: "defaultdb",
    synchronize: true,
    logging: false,
    entities:[cliente],
    migrations: [],
    subscribers: [],
})
