import { configureStore } from '@reduxjs/toolkit'
import saveRequestReducer from './reducers/crearSolicitud';
import saveMateriaReducer from './reducers/materias';
import saveClassroom from './reducers/aulasFiltradas';
import loader from './reducers/loading'

export default configureStore({
    reducer: {
        request: saveRequestReducer,
        materias: saveMateriaReducer,
        filtered: saveClassroom,
        loader: loader
    },
})
