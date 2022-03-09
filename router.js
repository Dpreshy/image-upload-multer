const express = require("express")
const route = express.Router()
// const {createCar, getAllCars, updateCar} = require("./controller")
const {createCar, getAllCars, updateCar} = require("./controller")
const uploadImage = require ('./multer/multer')

//route to create
route.post("/create", uploadImage, createCar)

//get/read all cars
route.get("/get", getAllCars)

 route.patch("/:id", updateCar)

module.exports = route
