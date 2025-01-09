import ActionTypes from "../actionTypes";

const initialState = {
    todos: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET:
            return { todos: action.payload };

        case ActionTypes.CREATE:
            // aksiyonun payload'ı ile gelen todoyu eskileirin arasına ekle
            // 1.yöntem:
            const newTodos = [...state.todos, action.payload];

            // 2.yöntem:
            // const newTodos = state.todos.concat(action.payload)

            // state'in son halini return et
            return { todos: newTodos };

        case ActionTypes.DELETE:
            // payload ile gelen id'li elemanı diziden kaldır
            const filtred = state.todos.filter((i) => i.id !== action.payload);

            return { todos: filtred };

        case ActionTypes.TOGGLE:
            // nesnenin isDone değerini tersine çevir
            const updated = { ...action.payload, isDone: !action.payload.isDone };

            // dizideki eski nesnenin yerine yenisini koy
            const updatedTodos = state.todos.map((i) =>
                i.id === updated.id ? updated : i
            );

            return { todos: updatedTodos };

        case ActionTypes.UPDATE:
            const editedTodos = state.todos.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );

            return { todos: editedTodos };

        default:
            return state;
    }
};

export default todoReducer;