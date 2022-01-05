import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux";
import "./todo.css";

const Todo = ({ task, deleteHandler, editHandler }) => {
  const [isChecked, setIsChecked] = useState(task.completed);
  const dispatch = useDispatch();

  const clickHandler = () => {
    setIsChecked(!isChecked);
    dispatch(editTask({ ...task, completed: !isChecked }));
  };

  return (
    <div className="task">
      <input type="checkbox" checked={isChecked} onChange={clickHandler} />
      <p className={isChecked ? "cross-text" : ""}>{task.title}</p>
      <button onClick={() => editHandler(task)} className="btn btn-edit">
        Edit
      </button>
      <button onClick={() => deleteHandler(task.id)} className="btn btn-delete">
        Delete
      </button>
    </div>
  );
};

export default Todo;
