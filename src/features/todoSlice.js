import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log("addTodo " + action.payload + "      items=" + state.items)

            return { items: [...state.items, action.payload]}
        },
        removeOne: (state, action) => {
            console.log("removeOne payload = " + action.payload + " items=" + state.items)

            let array = [...state.items]
            let index = action.payload
            console.log("index = " + index)
            if(index !== -1) {
                console.log(array)
                array.splice(index, 1)
                console.log(array)

                return { items: array }
            }
        },
        clearTodo: () => {
            return { items: ["Empty List"] }
        }
    }
})

export const { addTodo, removeOne, clearTodo } = todoSlice.actions

export default todoSlice.reducer