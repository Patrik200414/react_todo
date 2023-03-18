import TodoList from "./ToDoList.js";

export default function App() {
    return React.createElement(
        "div",
        null,
        React.createElement(TodoList, null),
        React.createElement("input", { type: "text" }),
        React.createElement(
            "button",
            null,
            "Add ToDo"
        ),
        React.createElement(
            "button",
            null,
            "Clear Completed"
        ),
        React.createElement(
            "div",
            null,
            "0 left to do"
        )
    );
}