import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"
import { useState } from "react"
import { tss } from "tss-react/mui"

type Props = {
    className?: string,
    onAddTodo: (params: { text: string }) => void

}

export function AddTodo(props: Props) {
    const { className, onAddTodo } = props
    const { classes, cx } = useStyles()
    const [inputValue, setInputValue] = useState("")
    return (
        <div className={cx(className, classes.root)}>
            <TextField
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}

                className={classes.textField}
                hiddenLabel
                variant="standard"
                size="small"
            />
            <Button
                variant='contained'
                disabled={inputValue === ""}
                onClick={() => {
                    setInputValue("")
                    onAddTodo({ text: inputValue })
                }}
            >Add</Button>
        </div>
    )
}

const useStyles = tss.create({
    "root": {
        "width": "100%",
        "border": "1px solid red",
        "display": "flex",
        "gap": "20px",
        "margin": "20px 0 50px 0"
    },
    "textField": {
        "flex" : "1"
    }
})