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
            ...todos,
            newTodo,
        ]

        setTodos(newTodos)
    }

    function deleteTodo(params: {id: number}){
        const { id } = params

        const newTodos: TodoData[]=[]

        for (let i=0; i<todos.length; i++){

            const newTodo: TodoData = {
                id : todos[i].id,
                text : todos[i].text,
                done : todos[i].done
            }

            if (todos[i].id !== id) {
                newTodos.push(newTodo)
            }
        }

        setTodos(newTodos)
    }

    function changeTextTodo(params: {id: number, text: string}) {
        const { id, text } = params
        
        const newTodos: TodoData[] = []

        for (let i=0; i<todos.length; i++){
            const newTodo: TodoData = {
                id : todos[i].id,
                text : todos[i].id === id? text : todos[i].text,
                done : todos[i].done
            }
            newTodos.push(newTodo)
        }

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
                        onDelete={() => deleteTodo({id: todo.id})}
                        onTextChange={({text}) => changeTextTodo({id: todo.id, text})}
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