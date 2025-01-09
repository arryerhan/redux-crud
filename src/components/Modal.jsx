import { useDispatch } from "react-redux";
import { update } from "../redux/actions";
import api from "../api";

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newText = e.target[1].value;

    const updatedTodo = { ...todo, text: newText };

    api
      .put(`/todos/${todo.id}`, updatedTodo)
      .then(() => dispatch(update(updatedTodo)))
      .catch(() => alert("Update process failed"));

    close();
  };

  return (
    <div className="modal d-block bg-blur">
      <div className="modal-dialog modal-dialog-centered text-black">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Item</h5>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>

          <div className="modal-body">
            <div>
              <label>New Title</label>
              <input
                type="text"
                className="form-control shadow mt-2"
                defaultValue={todo.text}
                autoFocus
              />
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={close}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;