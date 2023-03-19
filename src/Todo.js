export default function Todo({todo}){
    return(
        <div>
            <label>
                <input type="checkbox" checked={todo.compleate}></input>
                {todo.name}
            </label>
            
        </div>
    )
}