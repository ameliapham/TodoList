import { TodoData } from "../data";
import { useState } from "react";


export function useTodos(initialTodos: TodoData[]) {
    const [todos, setTodos] = useState(initialTodos)

    function addTodo(params: { text: string }) {
        const { text } = params

        const newTodo: TodoData = {
            id: Math.random(),
            text: text,
            done: false,
        }
        const newTodos: TodoData[] = [
            ...todos,
            newTodo,
        ]

        setTodos(newTodos)
    }

    function deleteTodo(params: { id: number }) {
        const { id } = params

        const newTodos: TodoData[] = []

        for (let i = 0; i < todos.length; i++) {

            const newTodo: TodoData = {
                id: todos[i].id,
                text: todos[i].text,
                done: todos[i].done
            }

            if (todos[i].id !== id) {
                newTodos.push(newTodo)
            }
        }

        setTodos(newTodos)
    }

    function changeTextTodo(params: { id: number, text: string }) {
        const { id, text } = params

        const newTodos: TodoData[] = []

        for (let i = 0; i < todos.length; i++) {
            const newTodo: TodoData = {
                id: todos[i].id,
                text: todos[i].id === id ? text : todos[i].text,
                done: todos[i].done
            }
            newTodos.push(newTodo)
        }

        setTodos(newTodos)

    }

    function checkTodo(params: { id: number, done: boolean }) {
        const { id, done } = params

        const newTodos: TodoData[] = []

        for (let i = 0; i < todos.length; i++) {
            const newTodo: TodoData = {
                id: todos[i].id,
                text: todos[i].text,
                done: todos[i].id === id ? done : todos[i].done
            }

            newTodos.push(newTodo)
        }

        setTodos(newTodos)
    }

    return {todos, addTodo, deleteTodo, changeTextTodo, checkTodo}
}