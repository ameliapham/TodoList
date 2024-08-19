import { initialTodos } from "./data";
import { tss } from "tss-react/mui"
import { Typography } from "@mui/material";
import { AddTodo } from "./components/AddTodo";


type Props = {
    className?: string
}

export function TodoList(props: Props) {

    const { className } = props
    const { classes } = useStyles()

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
                onAddTodo={({text}) => addTodo({text})}
            />
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