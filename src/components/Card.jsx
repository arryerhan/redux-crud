import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { remove, toggle } from "../redux/actions";
import api from "../api";

const Card = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  // sil
  const handleDelete = () => {
    api
      .delete(`/todos/${todo.id}`)

      .then(() => {
        dispatch(remove(todo.id));
      })
      .catch((err) => alert("operation failed"));
  };

  const handleStatus = () => {
    api
      .patch(`/todos/${todo.id}`, { isDone: !todo.isDone }) //
      .then(() => dispatch(toggle(todo)))
      .catch(() => alert("Sorry, an error occurred."));
  };

  return (
    <div className="border rounded my-5 p-4 shadow-lg">
      <h5>{todo.text}</h5>
      <h6>{new Date(todo.createdAt).toLocaleDateString()}</h6>
      <h6>{todo.isDone ? "Completed" : "Continuing..."}</h6>

      <button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Edit
      </button>

      <button className="btn btn-success mx-3" onClick={handleStatus}>
        {todo.isDone ? "Undo" : "Complete"}
      </button>

      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>

      {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
  );
};

export default Card;