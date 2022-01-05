import { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addTask, deleteTask, editTask } from "../../redux";
import Todo from "../todo/Todo";
import "./todoList.css";

const TodoList = ({ tasks, saveTask, deleteTodo, updateTask }) => {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState(null);
  const [query, setQuery] = useState("all");

  const taskHandler = () => {
    if (title && !task) {
      saveTask({ id: uuidv4(), title, completed: false });
    } else if (title && task) {
      updateTask({ id: task.id, title, completed: task.completed });
      setTask(null);
    }
    setTitle("");
  };

  const deleteHandler = (taskId) => {
    deleteTodo(taskId);
  };

  const editHandler = (task) => {
    setTask(task);
    setTitle(task.title);
  };

  let filteredTasks = tasks;

  if (query === "completed") {
    filteredTasks = tasks.filter((task) => (task.completed ? true : false));
  } else if (query === "remaining") {
    filteredTasks = tasks.filter((task) => (!task.completed ? true : false));
  }

  return (
    <div className="container">
      <main>
        <header>
          <h1>Todo App</h1>
          <form noValidate onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Add a new task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <button className="btn-add" onClick={taskHandler}>
              Add
            </button>
          </form>
        </header>
        <section className="task-type">
          <ul>
            <li
              className={query === "all" ? "list-item" : ""}
              onClick={() => setQuery("all")}
            >
              All task
            </li>
            <li
              className={query === "remaining" ? "list-item" : ""}
              onClick={() => setQuery("remaining")}
            >
              Remaining
            </li>
            <li
              className={query === "completed" ? "list-item" : ""}
              onClick={() => setQuery("completed")}
            >
              Completed
            </li>
          </ul>
        </section>
        <section className="taskList">
          {filteredTasks &&
            filteredTasks.map((task) => (
              <Todo
                key={task.id}
                task={task}
                deleteHandler={deleteHandler}
                editHandler={editHandler}
              />
            ))}
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state, ownProp) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = (dispatch, ownProp) => {
  return {
    saveTask: (task) => dispatch(addTask(task)),
    deleteTodo: (taskId) => dispatch(deleteTask(taskId)),
    updateTask: (task) => dispatch(editTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
