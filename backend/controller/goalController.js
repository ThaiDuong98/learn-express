const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    // res.send("say hello")
    res.status(200).json({message: "medthod get"})
})

const setGoals = asyncHandler (async (req, res) => {
    // res.send("say hello")
    console.log(req.body)
    if(!req.body.text){
        res.status(400)
        throw new Error('Please enter the text field')
    }
    res.status(200).json({message: "medthod post"})
})

const updateGoal = asyncHandler(async (req, res) => {
    // res.send("say hello")
    res.status(200).json({
        message: "method put",
        id: `thiss is id ${req.params.id}`,
        params: `thiss is params ${req.params}`
    })
})

const deleteGoal = asyncHandler(async (req, res) => {
    // res.send("say hello")
    res.status(200).json({message: "delete medthod"})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoal
}