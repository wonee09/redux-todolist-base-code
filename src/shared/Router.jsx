import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Header from "../redux/components/header";

const Router = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
