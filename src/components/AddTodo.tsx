import { Input } from "@mui/material"
import Button from "@mui/material/Button"

type Props = {
    className?: string,
    text: string,
}

export function AddTodo(props: Props) {
    const { text, className } = props

    return (
        <div className={className}>
            <Input
                type="text"
                //value={ }
                //onChange={ }
            />
            <Button>Add</Button>
        </div>
    )
}