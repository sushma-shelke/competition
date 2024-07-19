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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <div>
                <ImageCarousel />
                <ProductMainCategory />
                <ProductGrid />
              </div>
            } 
          />
            <Route path="/category/:name" element={<CategoryDetail />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
