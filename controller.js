const carModel = require("./model")



//create new car
const createCar = async (req, res) => {
    try {
        // const newCar = await carModel.create(req.body)
        const newCar = await carModel.create({

            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password,
            email: req.body.email,
            image:req.file.path
            // note: req.body.firstName.charAt(0)+ req.body.lastName.charAt(0)
            
        })
        
        res.status(201).json({
            status: "Success",
            data: newCar
        })
    } catch (error) {
        res.status(404).json({
            status: "Failure",
            message: error.message
        })
    }
}


//get all data
const getAllCars = async (req, res) => {
    try {
        const allCars = await carModel.find()

        res.status(200).json({
            status: "Success",
            data: allCars
        })

    } catch (error) {
        res.status(404).json({
            status: "Failure",
            message: error.message
        })
    }
}

//update
const updateCar = async (req, res) => {
    try {
        const car = await carModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.status(200).json({
            status: "Success",
            data: car
        })
    } catch (error) {
        res.status(404).json({
            status: "Failure",
            message: error.message
        })
    }
}

//findOnebyid

const findOneCar = async (req, res) => {
    try {

    
        
    } catch (error) {
        res.status(404).json({
            status: "Failure",
            message: error.message
        })
    }
}

module.exports = {
    createCar,
     getAllCars,
     updateCar
}