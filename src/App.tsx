import { TodoList } from "./TodoList"
import { GlobalStyles } from "@mui/material"


export function App() {
  return (
    <>
      <GlobalStyles styles={{
        "*": {
          "margin": 0,
          "padding": 0,
        },
      }} />
      <TodoList />
    </>
  );
}
