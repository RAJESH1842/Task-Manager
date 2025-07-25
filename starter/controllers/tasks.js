const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')

const getAllTasks =asyncWrapper( async (req, res)=>{
    try{
        const tasks= await Task.find({})
        res.status(200).json({tasks})
    } catch (error){
        res.status(500).json({ msg: error })
    }
})

const createTask =async (req, res)=>{
    try {
    const tasks = await Task.create(req.body)
    res.status(201).json({tasks})
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const getTask = async (req, res)=>{
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID});
if(!task){
    const error = new Error('Not Found')
    error.status = 404;
    return next(error)
    return res.status(404).json({msg: `No task with id: ${taskID}`})
}
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error})
    }
}

const deleteTask = async (req, res)=>{
    try {
        const {id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID});
if(!task){
    return res.status(404).json({msg: `No task with id: ${taskID}`})
}
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error})
    }
}
const updateTask =async (req, res)=>{
    try {
       const {id: taskID}= req.params;

       const task = await Task.findOneAndUpdate({_id:taskID},req.bod,{
        new: true,
        runValidators: true,
       })
       
       res.status(200).json({})
    } catch (error) {
        
    }
}

module.exports ={
    getAllTasks,createTask,getTask,updateTask,deleteTask
}