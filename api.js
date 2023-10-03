import express from 'express'
import {routes} from './routes/routes.js'

export class api{
    constructor(){
        this.app = express()
        this.procesarPeticiones()
    }

    //levantando el servidor
    levantarServidor(){
        this.app.listen(3000, function(){
            console.log('servidor operando con éxito')
        })
    }

    //procesamiento de las peticiones
    procesarPeticiones(){
        //estoy usando las peticiones del archivo de routes (contrate un intermendiario)
        this.app.use('/',routes)
    }

    conectarBD(){}
}