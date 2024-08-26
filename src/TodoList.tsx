import { initialTodos } from "./data"
import { tss } from "tss-react/mui"
import { Typography } from "@mui/material"
import { AddTodo } from "./components/AddTodo"
import { Todo } from "./components/Todo"
import { useTodos } from "./hooks/useTodos"
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "./i18n/i18n"



export function TodoList() {

    const { classes } = useStyles()

    const { todos, addTodo, changeTextTodo, checkTodo, deleteTodo } = useTodos(initialTodos)

    const { t } = useTranslation({TodoList})

    return (
        <div className={classes.root}>
            <Typography
                variant="h4"
            >
                {t("Todo List")}
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
                        onDoneChange={({ done }) => checkTodo({ id: todo.id, done })}
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