import { configureStore } from '@reduxjs/toolkit'
import saveRequestReducer from './reducers/crearSolicitud';
import saveMateriaReducer from './reducers/materias';
import saveClassroom from './reducers/aulasFiltradas';

export default configureStore({
    reducer: {
        request: saveRequestReducer,
        materias: saveMateriaReducer,
        filtered: saveClassroom
    },
})
