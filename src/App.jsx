import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./pages/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/registrar" element={<SignUp />} />
        <Route path="/pesquisar" element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
