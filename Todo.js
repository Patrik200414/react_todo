export default function Todo(_ref) {
    var todo = _ref.todo,
        toggleTodo = _ref.toggleTodo;

    function handleTodoClick() {
        toggleTodo(todo.id);
    }
    return React.createElement(
        "div",
        null,
        React.createElement(
            "label",
            null,
            React.createElement("input", { type: "checkbox", checked: todo.compleate, onChange: handleTodoClick }),
            todo.name
        )
    );
}