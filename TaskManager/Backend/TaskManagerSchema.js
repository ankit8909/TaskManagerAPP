const mongoose = require("mongoose");
const TaskMangerSchema = new mongoose.Schema({
    taskname:{
        type:String,
        required:true,
    },
     isDone :{
        type:Boolean,
        required:true 
     }
});

//crrate collection or model

const TaskModel = new mongoose.model("TaskModel", TaskMangerSchema);

module.exports = TaskModel;