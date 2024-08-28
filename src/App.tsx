import { TodoList } from "./TodoList"
import { GlobalStyles } from "@mui/material"

export function App() {
  return (
    <div>
      <GlobalStyles styles={{
        "*": {
          "margin": 0,
          "padding": 0,
        },
      }} />

      <TodoList />
    </div>
  )
}
