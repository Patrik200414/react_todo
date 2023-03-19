export default function Todo({todo, toggleTodo}){
    function handleTodoClick(){
        toggleTodo(todo.id);
    }
    return(
        <div>
            <label>
                <input type="checkbox" checked={todo.compleate} onChange={handleTodoClick}></input>
                {todo.name}
            </label>
            
        </div>
    )
}