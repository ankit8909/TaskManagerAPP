//destructure all function from TaskController
const {createTask, fetchTask, updateTaskById, deleteTaskById} = require('./Controller/TaskController');




const router = require("express").Router();

// to get all the task 
router.get('/', fetchTask);

router.post('/', createTask);


router.put('/:id', updateTaskById);
router.delete('/:id', deleteTaskById)




module.exports = router;