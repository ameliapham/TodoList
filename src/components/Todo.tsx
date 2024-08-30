import Input from "@mui/material/Input"
import { Typography } from "@mui/material"
import Checkbox from '@mui/material/Checkbox'
import Button from "@mui/material/Button"
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded'
import { useState, useEffect } from "react"
import { tss } from "tss-react/mui"
import CircularProgress from '@mui/material/CircularProgress';

export type Props = {
    className?: string,
    text: string,
    done: boolean
    onDelete: () => void
    onTextChange: (params: { text: string }) => void
    onDoneChange: (params: { done: boolean }) => void
    isPending: boolean;
}


export function Todo(props: Props) {
    const { className, text, done, onDelete, onTextChange, onDoneChange, isPending } = props

    const { cx, classes } = useStyles()

    const [isEditing, setIsEditing] = useState(false)

    const [inputValue, setInputValue] = useState(text)

    const [isCheckboxLoading, setIsCheckboxLoading] = useState(false)
    const [isDeleteButtonLoading, setIsDeleteButtonLoading] = useState(false)
    const [isEditButtonLoading, setIsEditButtonLoading] = useState(false)

    useEffect(
        () => {
            if (!isPending) {
                setIsCheckboxLoading(false)
                setIsDeleteButtonLoading(false)
                setIsEditButtonLoading(false)
            }
        },
        [isPending]
    );

    return (
        <li className={cx(className, classes.root)}>
            <div className={classes.textZone}>



                {isCheckboxLoading ?
                    <CircularProgress
                        size={24}
                        sx={{
                            color: "#1876D1",
                            padding: "10px"
                        }} /> :
                    <Checkbox
                        checked={done}
                        onChange={e => {
                            setIsCheckboxLoading(true)
                            onDoneChange({ done: e.target.checked })

                        }}
                    />
                }



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
                    >{isEditButtonLoading ? inputValue : text}</Typography>
                }
            </div>
            <div className={classes.buttonZone}>
                <Button
                    disabled={isEditButtonLoading}
                    variant='outlined'
                    onClick={() => {
                        if (isEditing) {
                            onTextChange({ text: inputValue })
                            setIsEditing(false)
                            setIsEditButtonLoading(true)
                        } else {
                            setIsEditing(true)
                        }
                    }}
                >

                    {isEditing ?
                        <DoneOutlineRoundedIcon /> :

                        isEditButtonLoading ?
                            <CircularProgress
                                size={24}
                                sx={{
                                    color: "#1876D1",
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',
                                    marginLeft: '-12px',
                                }} /> :
                            <EditOutlinedIcon />
                    }


                </Button>

                <Button
                    disabled={isDeleteButtonLoading}
                    className={classes.deleteButton}
                    variant='contained'
                    onClick={() => {
                        onDelete()
                        setIsDeleteButtonLoading(true)
                    }}
                >
                    {isDeleteButtonLoading ?
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
                        <DeleteForeverOutlinedIcon />
                    }

                </Button>
            </div>
        </li>
    )
}

const useStyles = tss.create({
    "root": {
        "width": "100%",
        "height": "auto",
        "gap": "20px",
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
    "deleteButton": {
        "backgroundColor": "#bf0603"
    },
})