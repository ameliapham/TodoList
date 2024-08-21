import Input from "@mui/material/Input"
import Button from "@mui/material/Button"
import { useState } from "react"

export type Props = {
    className?: string,
    text: string,
    onDelete: () => void
    onTextChange: (params: {text: string}) => void
}


export function Todo(props: Props) {
    const { className, text, onDelete, onTextChange } = props

    const [isEditing, setIsEditing] = useState(false)

    const [inputValue, setInputValue] = useState(text)

    return (
        <li className={className}>
            <Input
                type="checkbox"
            />
            {   isEditing ? 
                <Input
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                /> : 
                <span>{text}</span>
            }
            <Button
                onClick={() => {
                    if (isEditing){
                        onTextChange({text: inputValue})
                        setIsEditing(false)
                    } else {
                        setIsEditing(true)
                    }
                }}
            >
                {isEditing? "Validate" : "Edit"}
            </Button>
            <Button
                onClick={() => onDelete()}
            >
                Delete
            </Button>
        </li>
    )
}