import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface ITodo {
	id?: number,
	title: string,
	description: string,
	status: boolean
}

export interface ITodosState {
	todos: ITodo[]
	currentTodo?: ITodo
}

const initialState: ITodosState = {
	todos: [],
	currentTodo: {
		title: '',
		description: '',
		status:false
	}
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
		},
		changeStatus: (state, action:PayloadAction<number>) => {
			const todo = state.todos.find(todo => todo.id === action.payload)

			console.log(todo)

			if (todo) {
				todo.status = !todo.status
			}

			//Also, change the status of the current todo object so that when the modal is open, the status automatically changes
			if (state.currentTodo && state.currentTodo.status !== undefined) {
				if (todo?.id === state.currentTodo?.id) { 
					state.currentTodo.status = !state.currentTodo.status
				}
			 }
		},
		setCurrentTodo: (state, action: PayloadAction<ITodo>) => {
			state.currentTodo = action.payload
		}
	}
})

export const { addToDo, changeStatus,setCurrentTodo } = todoSlice.actions

export default todoSlice.reducer