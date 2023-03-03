const ToDoModel = require("../models/ToDoModels");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveTodo = async (req, res) => {
  try {
    const { text, lastEdit } = req.body;
    ToDoModel.create({ text, lastEdit }).then((data) => {
      console.log("Added successfully...");
      console.log(data);
      res.send(data);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.updateTodo = async(req,res)=>{
    try {
        const {_id, text, lastEdit} = req.body;
        ToDoModel.findByIdAndUpdate(_id, {text, lastEdit}).then(()=>{
            res.status(200).send("Updated Successfully...");
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports.deleteTodo = async(req,res)=>{
    try {
        const {_id, text} = req.body;
        ToDoModel.findByIdAndDelete(_id).then(()=>{
            res.status(200).send("Deleted Successfully...");
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        console.log(error);
    }
}