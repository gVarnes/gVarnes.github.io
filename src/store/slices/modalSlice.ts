import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface IModalState {
	isOpen: boolean
}

const initialState:IModalState = {
	isOpen: false
}

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		setIsOpen: (state, action: PayloadAction<boolean>) => {
			console.log(action.payload)
			state.isOpen = action.payload
		}
	}
})

export const {setIsOpen} = modalSlice.actions

export default modalSlice.reducer