const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')

// router.get('/', getGoals)
// router.post('/', setGoal)
// this line does the same thing as the two above
router.route('/').get(getGoals).post(setGoal)

// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
// this line does the same thing as the two above
router.route('/:id').put(updateGoal).delete(deleteGoal)

module.exports = router