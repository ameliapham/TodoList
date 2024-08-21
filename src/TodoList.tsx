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

    function deleteTodo(params: { id: number }) {
        const { id } = params

        const newTodos: TodoData[] = []

        for (let i = 0; i < todos.length; i++) {

            const newTodo: TodoData = {
                id: todos[i].id,
                text: todos[i].text,
                done: todos[i].done
            }

            if (todos[i].id !== id) {
                newTodos.push(newTodo)
            }
        }

        setTodos(newTodos)
    }

    function changeTextTodo(params: { id: number, text: string }) {
        const { id, text } = params

        const newTodos: TodoData[] = []

        for (let i = 0; i < todos.length; i++) {
            const newTodo: TodoData = {
                id: todos[i].id,
                text: todos[i].id === id ? text : todos[i].text,
                done: todos[i].done
            }
            newTodos.push(newTodo)
        }

        setTodos(newTodos)

    }

    function checkTodo(params: {id: number, done: boolean}){
        const {id, done} = params

        const newTodos : TodoData[] = []

        for (let i=0; i<todos.length; i++) {
            const newTodo: TodoData = {
                id: todos[i].id,
                text: todos[i].text,
                done: todos[i].id === id? done : todos[i].done
            }

            newTodos.push(newTodo)
        }

        setTodos(newTodos)
    }

    return (
        <div className={classes.root}>
            <Typography
                variant="h4"
            >
                Todo List
            </Typography>
            <AddTodo
                onAddTodo={({ text }) => addTodo({ text })}
            />
            <ul
            //className={classes.listTodo}
            >
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        done={todo.done}
                        onDelete={() => deleteTodo({ id: todo.id })}
                        onTextChange={({ text }) => changeTextTodo({ id: todo.id, text })}
                        onDoneChange={({done}) => checkTodo({id: todo.id, done})}
                    ></Todo>
                ))}
            </ul>
        </div>
    )
}

const useStyles = tss.create({
    "root": {
        "backgroundColor": "#fad2e1",
        "padding": "50px",
        "borderRadius": "15px",
        "width": "60vw",
        "display": "flex",
        "flexDirection": "column",
        "position": "absolute",
        "top": "10%",
        "left": "50%",
        "transform": "translate(-50%)",
    },
})