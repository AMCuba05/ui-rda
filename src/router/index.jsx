import { Routes, Route } from "react-router-dom";

import {PendingRequests} from "../pages/PendingRequests";
import { Request } from "../pages/Request";
import {SuggestClassroom} from "../pages/SuggestClassroom";
import {Home} from "../pages/Home";
import {Book} from "../pages/Book";
import {SearchClassroom} from "../pages/SearchClassroom";
import {CreateBooking} from "../pages/CreateBooking";
import { RegistrationRequest } from "../pages/RegistrationRequest";

export const AppRoutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/reservar" element={<CreateBooking />} />
        <Route exact path="/buscar" element={<SearchClassroom />} />
        <Route exact path="/admin/buscar" element={<SearchClassroom />} />
        <Route exact path="/crear" element={<Book />} />
        <Route exact path="/admin/pendientes" element={<PendingRequests />} />
        <Route exact path="/admin/sugerir" element={<SuggestClassroom />} />
        <Route exact path="/admin/reserva" element={<Request />} />
        <Route exact path="/admin/solicitudRegistro" element={<RegistrationRequest/>}/>
    </Routes>

}
