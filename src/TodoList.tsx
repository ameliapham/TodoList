//import { initialTodos } from "./data"
import { tss } from "tss-react/mui"
import { AddTodo } from "./components/AddTodo"
import { Todo } from "./components/Todo"
//import { useTodos } from "./hooks/useTodos"
import { useTodosApi } from "./todos-api"
import CircularProgress from '@mui/material/CircularProgress';
import { Header } from "./components/Header"



export function TodoList() {

    const { classes } = useStyles()

    const { todos, isPending, createTodo, updateTodo, deleteTodo } = useTodosApi()

    if (todos === undefined) {
        return <CircularProgress />
    }

    return (
        <div className={classes.root}>

            <Header
                isPending= {isPending}
            />

            <AddTodo
                onAddTodo={({ text }) => createTodo(text)}
            />

            <ul>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        done={todo.isDone}
                        isPending={isPending}
                        onDelete={() => deleteTodo(todo.id)}
                        onTextChange={({ text }) => updateTodo({ id: todo.id, text })}
                        onDoneChange={({ done }) => updateTodo({ id: todo.id, isDone: done })}
                    ></Todo>
                ))}
            </ul>

        </div>
    )
}

const useStyles = tss
    .withName({ TodoList })
    .create({
        "root": {
            "backgroundColor": "#fad2e1",
            "padding": "50px",
            "borderRadius": "15px",
            "width": "60vw",
            "display": "flex",
            "flexDirection": "column",
            "gap": "20px",
            "position": "absolute",
            "top": "10%",
            "left": "50%",
            "transform": "translate(-50%)",
        },
    })