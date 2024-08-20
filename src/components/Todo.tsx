import Input from "@mui/material/Input"
import Button from "@mui/material/Button"

export type Props = {
    className?: string,
    text: string,
}


export function Todo(props: Props) {
    const {className, text} = props

    return (
        <li className={className}>
            <Input
                type="checkbox"
            />
            <span>{text}</span>
            <Button>Edit</Button>
            <Button>Delete</Button>
        </li>
    )
}