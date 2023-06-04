const express = require('express')
const router = express.Router()
const {getGoals, setGoals, updateGoal, deleteGoal} = require("../controller/goalController")

// router.get("/", (req, res) => {
//     // res.send("say hello")
//     res.status(200).json({message: "method get"})
// })

// router.get("/", getGoals)
// router.post("/", setGoals)
// router.put("/:id", updateGoal)
// router.delete("/:id", deleteGoal)

//viết tắt của những dòng trên 10, 11, 12, 13
router.route('/').get(getGoals).post(setGoals) // method get và post cùng chung url
router.route('/:id').put(updateGoal).delete(deleteGoal) // method put và delete cùng chung url

module.exports = router