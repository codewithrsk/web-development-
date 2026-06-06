import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
