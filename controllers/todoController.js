const Todo = require("../models/Todo");

const createTodo = async (req, resp) => {
  try {
    const { id } = req.user;
    const { title, description, status, public } = req.body;
    const todo = await Todo.create({
      title,
      description,
      status,
      public,
      userId: id,
    });
    resp.status(201).json(todo);
  } catch (error) {
    resp.status(500).json({ message: "Todo not created" });
  }
};

const getTodos = async (req, resp) => {
  try {
    const todos = await Todo.findAll();
    resp.status(200).json(todos);
  } catch (error) {
    console.log(error);
    resp.status(500).json({ message: "Todos not found" });
  }
};

const getTodo = async (req, resp) => {
  try {
    const { id } = req.params;
    const toDo = await Todo.findByPk(id);
    if (toDo) {
      resp.status(200).json(toDo);
    } else {
      resp.status(404).json({ message: `Todo is with id ${id} not found` });
    }
  } catch (error) {
    resp.status(404).json({ message: `Tod do with id ${id} not found` });
  }
};

const updateTodo = async (req, resp) => {
  const { id } = req.params;
  try {
    const { title, description, status } = req.body;
    const todo = await Todo.findByPk(id);
    if (todo) {
      const updatedTodo = await todo.update({ title, description, status });
      resp.status(200).json(updatedTodo);
    } else {
      resp.status(404).json({ message: `Todo with id ${id} not found` });
    }
  } catch (error) {
    resp.status(404).json({ message: `Todo with id ${id} not found` });
  }
};

const deleteTodo = async (req, resp) => {
  const { id } = req.params;
  try {
    const result = await Todo.destroy({
      where: { id: id },
    });
    if (result) {
      console.log(result);
      resp.status(200).json({ message: `Todo with id ${id} deleted` });
    } else {
      resp.status(404).json({ message: `Todo with id ${id} not found` });
    }
  } catch (error) {
    resp.status(404).json({ message: `error occured::${error.message}` });
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
