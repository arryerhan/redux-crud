import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { create } from "../redux/actions";
import api from "../api";

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value.trim();

    if (!text) return alert("Input cannot be empty!");

    const newTodo = {
      id: v4(),
      text,
      isDone: false,
      createdAt: new Date().getTime(),
    };

    api
      .post("todos", newTodo)
      .then(() => dispatch(create(newTodo)))
      .catch(() => alert("Delete process failed!"));

    e.target.reset();
  };

  return (

    <div className="form-container">
       <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        type="text"
        placeholder="Type something..."
        className="form-control"/>
      <button className="btn btn-warning">Send</button>
    </form>
    </div>
   
  );
};

export default Form;