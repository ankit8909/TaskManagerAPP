const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Task_Manager').then(()=>{
    console.log("connection success");
}).catch(()=>{
    console.log("connection failed")
})

