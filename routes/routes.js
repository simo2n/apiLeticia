import express from "express"
import {ControllerRooms} from '../controllers/ControllerRooms.js'
import  {ControllerReservations} from '../controllers/ControllerReservations.js'

//Para poder llamar al controlador
//debo crear un objeto de la clase controlador
let controllerRooms = new ControllerRooms()
let controllerReservations = new ControllerReservations()

export let routes = express.Router()

 //Aquí se atiende una peticion para manejar habitaciones y respondiendo
routes.post('/api/rooms', controllerRooms.registerRooms)
routes.get('/apiroom', controllerRooms.serchRoomForId)
routes.get('/api/rooms', controllerRooms.serchRooms)
routes.put('/api/rooms', controllerRooms.modifyRoom)
routes.delete('/api/rooms', controllerRooms.deleteRoom)

//Aquí se atiende una peticion para manejar reservas y respondiendo
routes.post('/api/reservations', controllerReservations.registerReservations)
routes.get('/api/reservation', controllerReservations.serchReservationForId)
routes.get('/api/reservations', controllerReservations.serchReservations)
routes.put('/api/reservations', controllerReservations.modifyReservation)
routes.delete('/api/reservations', controllerReservations.deleteReservation)
