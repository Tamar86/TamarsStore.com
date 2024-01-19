import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./components/Landing";
import WomenProducts from "./components/WomenProducts";
import MenProducts from "./components/MenProducts";
import Cart from "./components/Cart";
import KidsProducts from "./components/KidsProducts";
import Footer from "./components/Footer";
import LogIn from "./components/LogIn";
//import styles from '../src/components/styles.css'



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/women" element={<WomenProducts />} />
        <Route path="/men" element={<MenProducts />} />
        <Route path="/kids" element={<KidsProducts />} />
        <Route exact path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LogIn/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
