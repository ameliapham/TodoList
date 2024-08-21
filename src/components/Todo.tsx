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

    return (
        <li className={className}>
            <Input
                type="checkbox"
            />
            {   isEditing ? 
                <Input
                    type="text"    
                /> : 
                <span>{text}</span>
            }
            <Button
                onClick={() => {
                    if (isEditing){
                        onTextChange({text})
                        setIsEditing(false)
                    } else {
                        setIsEditing(true)
                    }
                }}
            >
                Edit
            </Button>
            <Button
                onClick={() => onDelete()}
            >
                Delete
            </Button>
        </li>
    )
}