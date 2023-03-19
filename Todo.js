export default function Todo(_ref) {
    var todo = _ref.todo;

    return React.createElement(
        "div",
        null,
        React.createElement(
            "label",
            null,
            React.createElement("input", { type: "checkbox", checked: todo.compleate }),
            todo.name
        )
    );
}