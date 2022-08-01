import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Private from "./views/Private";
import injectContext from "./store/appContext";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
