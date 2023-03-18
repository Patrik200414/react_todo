import TodoList from "./ToDoList.js";

export default function App(){
    return(
        <div>
            <TodoList />
            <input type="text"></input>
            <button>Add ToDo</button>
            <button>Clear Completed</button>
            <div>0 left to do</div>
        </div>
    )
}
