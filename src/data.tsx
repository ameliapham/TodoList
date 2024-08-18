

export type TodoData = {
    id: number,
    text: string,
    done: boolean,
}

export const initialTodos: TodoData[] = [
    {
        id: 1,
        text: "Doing homework React",
        done: false
    },
    {
        id: 2,
        text: "Cooking",
        done: true
    },
    {
        id: 3,
        text: "Doing homework JS",
        done: false
    },
]