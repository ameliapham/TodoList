import { Input } from "@mui/material"
import Button from "@mui/material/Button"
import { useState } from "react"

type Props = {
    className?: string,
    onAddTodo: (params: {text: string}) => void

}

export function AddTodo(props: Props) {
    const { className, onAddTodo } = props
    const [inputValue, setInputValue] = useState("")
    return (
        <div className={className}>
            <Input
                type="text"
                value={inputValue}
                onChange={e => e.target.value}
            />
            <Button
                onClick={()=> {
                    setInputValue("")
                    onAddTodo({text: inputValue})
                }}
            >Add</Button>
        </div>
    )
}