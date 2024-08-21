import Input from "@mui/material/Input"
import { Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox'
import Button from "@mui/material/Button"
import { useState } from "react"
import { tss } from "tss-react/mui"

export type Props = {
    className?: string,
    text: string,
    onDelete: () => void
    onTextChange: (params: { text: string }) => void
}


export function Todo(props: Props) {
    const { className, text, onDelete, onTextChange } = props

    const { cx, classes } = useStyles()

    const [isEditing, setIsEditing] = useState(false)

    const [inputValue, setInputValue] = useState(text)

    return (
        <li className={cx(className, classes.root)}>
            <div className={classes.textZone}>
                <Checkbox />

                {isEditing ?
                    <Input
                        type="text"
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        className={classes.text}

                    /> :
                    <Typography
                        variant="body1"
                        className={classes.text}
                    >{text}</Typography>
                }
            </div>
            <div className={classes.buttonZone}>
                <Button
                    variant='outlined'
                    onClick={() => {
                        if (isEditing) {
                            onTextChange({ text: inputValue })
                            setIsEditing(false)
                        } else {
                            setIsEditing(true)
                        }
                    }}
                >
                    {isEditing ? "Validate" : "Edit"}
                </Button>
                <Button
                    variant='contained'
                    onClick={() => onDelete()}
                >
                    Delete
                </Button>
            </div>
        </li>
    )
}

const useStyles = tss.create({
    "root": {
        "width": "100%",
        "height": "auto",
        "gap": "10px",
        "display": "flex",
        "justifyContent": "space-between",
        "margin": "0 0 10px 0"
    },
    "textZone": {
        "display": "flex",
        "flex": "1",
        "justifyContent": "start"
    },
    "buttonZone": {
        "display": "flex",
        "alignSelf": "center",
        "gap": "10px",
    },
    "text": {
        "width": "100%",
        "display": "flex",
        "alignItems": "center"
    },
})