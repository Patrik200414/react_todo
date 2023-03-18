import Todo from "./Todo.js";

export default function TodoList(_ref) {
    var todos = _ref.todos;

    return todos.map(function (todo) {
        return React.createElement(Todo, { key: todo, todo: todo });
    });
}