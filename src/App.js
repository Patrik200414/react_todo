import TodoList from "./ToDoList.js";

export default function App(){
    const [todos, setTodos] = React.useState(['Todo 1', 'Todo 2']);
    return(
        <div>
            <TodoList todos={todos}/>
            <input type="text"></input>
            <button>Add ToDo</button>
            <button>Clear Completed</button>
            <div>0 left to do</div>
        </div>
    )
}
