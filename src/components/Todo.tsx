import Input from "@mui/material/Input"
import Button from "@mui/material/Button"

export type Props = {
    className?: string,
    text: string,
    onDelete: () => void
}


export function Todo(props: Props) {
    const { className, text, onDelete } = props

    return (
        <li className={className}>
            <Input
                type="checkbox"
            />
            <span>{text}</span>
            <Button>
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