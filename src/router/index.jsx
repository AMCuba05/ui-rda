import { Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home";
import {Book} from "../pages/Book";
import { Request } from "../pages/Request";

export const AppRoutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/reservar" element={<Book />} />
        <Route exact path="/request" element={<Request />} />
    </Routes>

}
