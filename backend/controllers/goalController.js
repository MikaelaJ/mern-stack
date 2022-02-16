//Insall a package (for the spacinvader)
const asyncHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
// When yo communicate with the database you will get a promise back, 
// that is why you need to have async/await.
const getGoals = asyncHandler(async (req, res) => {
    res.status(200)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
    if(req.body.text) {
        //res.status(400).json({message: "Please add a text field"})
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({message: 'Set goal'})
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

// @desc    Delete goals
// @route   GDELETE /api/goals
// @access  Provate
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}