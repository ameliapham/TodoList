//import { initialTodos } from "./data"
import { tss } from "tss-react/mui"
import { Typography } from "@mui/material"
import { AddTodo } from "./components/AddTodo"
import { Todo } from "./components/Todo"
//import { useTodos } from "./hooks/useTodos"
import { useTodosApi } from "./todos-api"
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "./i18n/i18n"
//import { useOidc } from "./oidc"
import CircularProgress from '@mui/material/CircularProgress';



export function TodoList() {

    const { classes } = useStyles()

    const { todos, createTodo, updateTodo, isPending, deleteTodo } = useTodosApi()

    //const { oidcTokens } = useOidc();

    const { t } = useTranslation({ TodoList })

    if (todos === undefined) {
        return <CircularProgress/>
    }

    return (
        <div className={classes.root}>
            {isPending && <CircularProgress />}
            
            <Typography
                variant="h4"
            >
                {t("Todo List")}
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
                        done={todo.done}
                        onDelete={() => deleteTodo(todo.id)}
                        onTextChange={({ text }) => updateTodo({ id: todo.id, text })}
                        onDoneChange={({ done }) => updateTodo({ id: todo.id, isDone: done })}
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

export const { i18n } = declareComponentKeys<
    | "Todo List"
>()({ TodoList })