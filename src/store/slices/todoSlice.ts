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
			// state.todos.push(action.payload)
			state.todos.push({...action.payload,id:state.todos.length})
			console.log(current(state.todos))
		},
		changeStatus:(state)=>{}
	}
})

export const { addToDo, changeStatus } = todoSlice.actions

export default todoSlice.reducer