import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response } from "express"
import { AppDataSource } from "./data-source"
import { cliente } from "./entity/cliente"

import cors = require("cors")
import helmet from "helmet"
import routes from "./routes"


const port = process.env.port || 3000;
AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(cors());
    app.use(helmet());
    app.use(express.json());


    //Rutas
    app.use('/', routes)
    
    app.listen(port,()=>{console.log(`Servidor corriendo en puerto: ${port}`)});

    const Cliente1 = new cliente()
    Cliente1.cedula = 255215421;
    Cliente1.nombre = "Tracy";
    Cliente1.apellido1 = "Mora";
    Cliente1.apellido2 = "Solano";
    Cliente1.FechaNacimiento = "29-07-1998";
    Cliente1.Genero = 'F';
    Cliente1.Estado = true;


    const Cliente2= new cliente()
    Cliente2.cedula = 4578751668;
    Cliente2.nombre = "Michell";
    Cliente2.apellido1 = "Mendez";
    Cliente2.apellido2 = "Herrera";
    Cliente2.FechaNacimiento = "28-10-1981";
    Cliente2.Genero = 'F';
    Cliente2.Estado = false;

    await AppDataSource.manager.save(Cliente1)
    await AppDataSource.manager.save(Cliente2)




}).catch(error => console.log(error))
