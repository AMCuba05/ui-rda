import { createSlice } from '@reduxjs/toolkit'

export const saveRequestSlice = createSlice({
    name: 'saveRequest',
    initialState: {
        data: []
    },
    reducers: {
        setRequest: (state, action) => {
            state.data = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setRequest } = saveRequestSlice.actions

export default saveRequestSlice.reducer
