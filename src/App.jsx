import "./App.css";
import Clients from "./components/Clients";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import Hroperations from "./components/Hroperations";
import Newsletter from "./components/Newsletter";
import Payroll from "./components/Payroll";
// import Products from "./components/Products";
import Reviews from "./components/Reviews";

function App() {
  return (
    <>
      {/* <Products /> */}
      <Hroperations />
      <Payroll />
      <Clients />
      <Reviews />
      <Demo />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
