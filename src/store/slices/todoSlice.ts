import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface ITodo {
	id?: number,
	title: string,
	description: string,
	status: boolean
}

export interface ITodosState {
	todos: ITodo[]
}

const initialState: ITodosState = {
	todos : []
}

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addToDo: (state, action: PayloadAction<ITodo>) => {
			state.todos.push({
				id: state.todos.length + 1,
				...action.payload
			})
			console.log(current(state.todos))
		},
		changeStatus: (state, action:PayloadAction<number>) => {
			const todo = state.todos.find(todo => todo.id === action.payload)
			
			if (todo) {
				todo.status = !todo.status
			}
		}
	}
})

export const { addToDo, changeStatus } = todoSlice.actions

export default todoSlice.reducer