import TodoList from "./ToDoList.js";
import uniqueid from "./uuid.js";

export default function App(){
    const [todos, setTodos] = React.useState([]);
    let todoNameRef = React.useRef();

    function handleAddTodo(event){
        let name = todoNameRef.current.value;
        if(name === ''){
            return
        }
        else{
            setTodos((prevTodos) => {
                return [...prevTodos, {
                    id: uniqueid(),
                    name: name,
                    compleate: false
                }]
            })
            todoNameRef.current.value = '';
        }
    }
    return(
        <div>
            <TodoList todos={todos}/>
            <input ref={todoNameRef} type="text"></input>
            <button onClick={handleAddTodo}>Add ToDo</button>
            <button>Clear Completed</button>
            <div>0 left to do</div>
        </div>
    )
}
