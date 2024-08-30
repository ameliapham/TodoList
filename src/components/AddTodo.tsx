import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button"
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import { useState, useEffect } from "react"
import { tss } from "tss-react/mui"
import { useTodosApi } from "../todos-api"
import CircularProgress from '@mui/material/CircularProgress';

type Props = {
    className?: string,
    onAddTodo: (params: { text: string }) => void

}

export function AddTodo(props: Props) {
    const { className, onAddTodo } = props
    const { classes, cx } = useStyles()
    const [inputValue, setInputValue] = useState("")
    const { isPending } = useTodosApi()

    const [isButtonLoading, setIsButtonLoading] = useState(false)

    useEffect(
        () => {
            if (!isPending) {
                setIsButtonLoading(false)
            }
        },
        [isPending]

    )

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
                    setIsButtonLoading(true)
                }}
            >
                {isButtonLoading ?
                    <CircularProgress
                        size={24}
                        sx={{
                            color: "#1876D1",
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            marginTop: '-12px',
                            marginLeft: '-12px',
                        }}
                    /> :
                    (
                        <>
                            <AddRoundedIcon />Add
                        </>
                    )
                }

            </Button>
        </div>
    )
}

const useStyles = tss.create({
    "root": {
        "width": "100%",
        "display": "flex",
        "gap": "20px",
        "margin": "20px 0 50px 0"
    },
    "textField": {
        "flex": "1"
    }
})