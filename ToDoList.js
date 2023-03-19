import Todo from "./Todo.js";

export default function TodoList(_ref) {
    var todos = _ref.todos,
        toggleTodo = _ref.toggleTodo;

    return todos.map(function (todo) {
        return React.createElement(Todo, { key: todo.id, toggleTodo: toggleTodo, todo: todo });
    });
}