import TodoList from "./ToDoList.js";
import uniqueid from "./uuid.js";

const LOCAL_STORAGE_KEY = 'todoApp.todos';

export default function App(){
    const [todos, setTodos] = React.useState([]);
    let todoNameRef = React.useRef();
    
    React.useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        
        if(storedTodos){
            setTodos(storedTodos);
        }
    }, [])

    React.useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    function toggleTodo(id){
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.id === id);
        todo.compleate = !todo.compleate;
        setTodos(newTodos);
    }

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
            <TodoList todos={todos} toggleTodo={toggleTodo}/>
            <input ref={todoNameRef} type="text"></input>
            <button onClick={handleAddTodo}>Add ToDo</button>
            <button>Clear Completed</button>
            <div>0 left to do</div>
        </div>
    )
}
