import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductMainCategory from "./Components/Products/ProductMainCategory";
import ParticipationForm from "./Components/Form/ParticipationForm";
import ProductGrid from "./Components/Products/ProductGrid";
import ImageCarousel from "./Components/ImageCarousel";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryDetail from "./Components/Products/CategoryDetail";

import ProductDetail from "./Components/Products/ProductDetail";
import Result from "./Components/Result";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <ImageCarousel />
          {/* <ParticipationForm /> */}
          <ProductDetail />
          <ProductMainCategory />
          <Result />
          <Routes>
            {/* <Route path="/" element={<ProductMainCategory />} /> */}
            <Route path="/category/:name" element={<CategoryDetail />} />
          </Routes>
          <ProductGrid />
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
