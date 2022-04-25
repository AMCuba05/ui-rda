import { Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home";
import {Book} from "../pages/Book";


export const AppRoutes = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/reservar" element={<Book />} />
    </Routes>

}
