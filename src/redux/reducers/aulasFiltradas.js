import { createSlice } from '@reduxjs/toolkit'

export const filterClassroom = createSlice({
    name: 'filterClassroom',
    initialState: {
        data: []
    },
    reducers: {
        setFilter: (state, action) => {
            state.data = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setRequest } = filterClassroom.actions

export default filterClassroom.reducer
