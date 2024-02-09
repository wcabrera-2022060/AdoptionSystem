'use strict'

import Animal from './animal.model.js'

export const test = (req, res) => {
    return res.send('Funciona el animal xd')
}

export const addAnimal = async (req, res) => {
    try{
        let data = req.body
        let animal = new Animal(data)
        await animal.save()
        return res.send({ message: 'Registered succesfully' })
    }catch(err){
        console.error(err)
        return res.status(500).send({message: 'Error registering animal', err})
    }
}

export const deleteAnimal = async (req, res) => {
   try{
    let { id } = req.params
    let deleteAnimal = await Animal.findOneAndDelete({_id: id})
    if(!deleteAnimal) return res.status(404).send({message: 'Animal not found and not deleted'})
    return res.send({message: `Animal ${deleteAnimal.name} deleted successfully`})
   }catch(err){
    console.error(err)
    return res.status(500).send({message: 'Error deleting animal'})
   }
}

export const updateAnimal = async (req, res) => {
    try{
        let { id } = req.params
        let data = req.body
        let updateAnimal = await Animal.findOneAndUpdate(
            {_id: id},
            data,
            {new : true}
        )
        if (!updateAnimal) return res.status(401).send({ message: 'Animal not found and not updated' })

        return res.send({ message: 'Updated animal', updateAnimal})
    }catch(err){
        console.error(err)
        return res.status(500).send({ message: 'Error updating animal' })
    }
}

export const listAnimals = async (req, res) => {
    try{
        let animals = await Animal.find()
        return res.send(animals)
    }catch(err){
        console.error(err)
    }
}

export const findAnimal = async (req, res) => {
    try{
        let {id} = req.params
        let animal = await Animal.find({_id: id})
        return res.send(animal)
    }catch(err){
        console.error(err)
    }
}