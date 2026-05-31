import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <div id="firstDiv">My first react App</div>
      <div className="bg-success">
        <div>
           this is my bootstrap
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
