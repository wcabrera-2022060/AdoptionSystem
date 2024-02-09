'use strict'

import express from 'express'
import {test, addAnimal, deleteAnimal, listAnimals, findAnimal,updateAnimal } from './animal.controller.js'

const api = express.Router()

//api.get('/test', test)
api.post('/addAnimal', addAnimal)
api.delete('/deleteAnimal/:id', deleteAnimal)
api.put('/updateAnimal/:id', updateAnimal)
api.get('/listAnimals', listAnimals)
api.get('/findAnimal/:id', findAnimal)

export default api