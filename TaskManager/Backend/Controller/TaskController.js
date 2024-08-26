//Schema import  here
const TaskModel = require("../TaskManagerSchema");

// create function createTask

const createTask = async (req, res) => {
  const data = req.body;
  try {
    const myData = new TaskModel(data);
    await myData.save();
    res.status(200).json({ message: "Task is created", success: true });
  } catch (error) {
    res.status(400).json({ error: "Failed to create Task", success: false });
  }
};

const fetchTask = async (req, res) => {
  try {
    const fetchData = await TaskModel.find({});
    res
      .status(200)
      .json({ message: "All Task is here", success: true, fetchData });
  } catch (error) {
    res.status(500).json({ message: "failed to get all task", success: false });
  }
};

const updateTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const obj = { $set: { ...body } };
    const findnb =  await TaskModel.findByIdAndUpdate(id, obj);
    res.status(200).json({ message: "Task is  updated", success: true });
  } catch (error) {
    res.status(400).json({ message: "Failed to Update task", success: false });
  }
};


const deleteTaskById = async(req,res)=>{
    try {
        const id = req.params.id;
        await TaskModel.findByIdAndDelete(id);
        res.status(200).json({message: "Task is delete", success:true});

        
    } catch (error) {
        res.status(400).json({message: "Failed to delete Task", success: false})
    }
}

module.exports = {
  createTask,
  fetchTask,
  updateTaskById,
  deleteTaskById
};
