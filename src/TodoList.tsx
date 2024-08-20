import { initialTodos, TodoData } from "./data";
import { tss } from "tss-react/mui"
import { Typography } from "@mui/material";
import { AddTodo } from "./components/AddTodo";
import { useState } from "react";
import { Todo } from "./components/Todo";



export function TodoList() {

    const { classes } = useStyles()

    const [todos, setTodos] = useState(initialTodos)

    function addTodo(params: { text: string }) {
        const { text } = params

        const newTodo: TodoData = {
            id: Math.random(),
            text: text,
            done: false,
        }
        const newTodos: TodoData[] = [
            ...initialTodos,
            newTodo,
        ]

        setTodos(newTodos)
    }

    return (
        <div className={classes.root}>
            <Typography
                variant="h3"
                className={classes.title}
            >
                Todo List
            </Typography>
            <AddTodo
                className={classes.addTodo}
                onAddTodo={({ text }) => addTodo({ text })}
            />
            <ul>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                    ></Todo>
                ))}
            </ul>
        </div>
    )
}

const useStyles = tss.create({
    "root": {
        "height": "100vh",
        "border": "1px solid red",
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "center",

    },
    "title": {
        "display": "flex",
        "justifyContent": "center",
    },
    "addTodo": {
        "display": "flex",
        "justifyContent": "center"
    }

})