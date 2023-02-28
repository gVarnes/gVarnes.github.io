import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface ITodo {
	id: number,
	title: string,
	description: string,
	status: boolean
}

export interface IInitialState {
	todos: ITodo[]
}

const initialState: IInitialState = {
	todos : []
}

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addToDo: (state,action:PayloadAction<number>) => { },
		changeStatus:(state)=>{}
	}
})

export const { addToDo, changeStatus } = todoSlice.actions

export default todoSlice.reducer