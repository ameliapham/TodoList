/* eslint-disable @typescript-eslint/no-explicit-any */
//import { initialTodos } from "./data";
import { tss } from "tss-react/mui"
import { Typography } from "@mui/material";
import { AddTodo } from "./components/AddTodo";
import { Todo } from "./components/Todo";
//import { useTodos } from "./hooks/useTodos";
import Button from "@mui/material/Button";
import { useOidc } from "./oidc";
import { useTodosApi } from "./todos-api";
import CircularProgress from '@mui/material/CircularProgress';

export function TodoList() {

    const { classes } = useStyles()

    //const { todos, addTodo, changeTextTodo, checkTodo, deleteTodo } = useTodos(initialTodos)
    const { todos, createTodo, updateTodo, deleteTodo, isPending } = useTodosApi();

    const { oidcTokens, logout } = useOidc();

    if(todos === undefined){
        return <div>Loading...</div>
    }

    return (
        <div className={classes.root}>
            {isPending && <CircularProgress />}
            <Typography
                variant="h4"
            >
                {oidcTokens.decodedIdToken.name}'s Todo List
            </Typography>
            <AddTodo
                onAddTodo={({ text }) => createTodo(text)}
            />
            <ul
            //className={classes.listTodo}
            >
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        done={todo.isDone}
                        onDelete={() => deleteTodo(todo.id)}
                        onTextChange={({ text }) => updateTodo({ id: todo.id, text })}
                        onDoneChange={({ done }) => updateTodo({ id: todo.id, isDone: done })}
                    ></Todo>
                ))}
            </ul>
            <Button
                onClick={() => logout({
                    "redirectTo": "home",
                })}
            >
                Log out
            </Button>

        </div>
    )
}

const useStyles = tss
    .withName("TodoList")
    .create({
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