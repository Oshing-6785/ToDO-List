const express = require("express");
const route = express.Router();
const todoController = require("../controllers/todoController");
const authMiddleware = require ('../middleware/auth')

route.post("/create",authMiddleware, todoController.createTodo);
route.get("/", todoController.getTodos);
route.get("/:id", todoController.getTodo);
route.put("/:id/update", todoController.updateTodo);
route.delete("/:id/delete", todoController.deleteTodo);

// route.get("/toDo", (req, resp) => {
//   resp.send("Hello world");
// });

module.exports = route;


