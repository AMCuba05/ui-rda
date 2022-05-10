import { configureStore } from '@reduxjs/toolkit'
import saveRequestReducer from './reducers/crearSolicitud';
import saveMateriReducer from './reducers/materias';

export default configureStore({
    reducer: {
        request: saveRequestReducer,
        materias: saveMateriReducer,
    },
})
