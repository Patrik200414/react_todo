var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

import TodoList from "./ToDoList.js";
import uniqueid from "./uuid.js";

var LOCAL_STORAGE_KEY = 'todoApp.todos';

export default function App() {
    var _React$useState = React.useState([]),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        todos = _React$useState2[0],
        setTodos = _React$useState2[1];

    var todoNameRef = React.useRef();

    React.useEffect(function () {
        var storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

        if (storedTodos) {
            setTodos(storedTodos);
        }
    }, []);

    React.useEffect(function () {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }, [todos]);

    function toggleTodo(id) {
        var newTodos = [].concat(_toConsumableArray(todos));
        var todo = newTodos.find(function (todo) {
            return todo.id === id;
        });
        todo.compleate = !todo.compleate;
        setTodos(newTodos);
    }

    function handleAddTodo(event) {
        var name = todoNameRef.current.value;
        if (name === '') {
            return;
        } else {
            setTodos(function (prevTodos) {
                return [].concat(_toConsumableArray(prevTodos), [{
                    id: uniqueid(),
                    name: name,
                    compleate: false
                }]);
            });
            todoNameRef.current.value = '';
        }
    }

    function handleClearTodos() {
        var newTodos = todos.filter(function (todo) {
            return !todo.compleate;
        });
        setTodos(newTodos);
    }

    return React.createElement(
        "div",
        null,
        React.createElement(TodoList, { todos: todos, toggleTodo: toggleTodo }),
        React.createElement("input", { ref: todoNameRef, type: "text" }),
        React.createElement(
            "button",
            { onClick: handleAddTodo },
            "Add ToDo"
        ),
        React.createElement(
            "button",
            { onClick: handleClearTodos },
            "Clear Completed"
        ),
        React.createElement(
            "div",
            null,
            todos.filter(function (todo) {
                return !todo.compleate;
            }).length,
            " left to do"
        )
    );
}