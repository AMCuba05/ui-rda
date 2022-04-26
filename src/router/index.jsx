import { Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home";
import {Book} from "../pages/Book";
import {PendingRequests} from "../pages/PendingRequests";


export const AppRoutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/reservar" element={<Book />} />
        <Route exact path="admin/pendientes" element={<PendingRequests />} />
    </Routes>

}
