import { createSlice } from '@reduxjs/toolkit'

export const saveMateriasSlice = createSlice({
    name: 'saveMaterias',
    initialState: {materias:[]},
    reducers: {
        setMaterias: (state, action) => {
            state.materias = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setMaterias } = saveMateriasSlice.actions

export default saveMateriasSlice.reducer
