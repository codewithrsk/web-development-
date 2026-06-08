import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Footer from "./components/Footer";
import Feedback from "./pages/Feedback";
import About from "./pages/About";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/feedback" element={<Feedback/>}/>
      <Route path="/about" element={<About/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
      
    </>
  );
}

export default App;
