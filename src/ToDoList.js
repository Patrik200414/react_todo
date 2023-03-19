import Todo from "./Todo.js";

export default function TodoList({todos}){
    return(
        todos.map((todo) => {
            return(
                <Todo key={todo.id} todo={todo} />
            )
        })
    )
}