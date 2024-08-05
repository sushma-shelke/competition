import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductMainCategory from "./Components/Products/ProductMainCategory";
import ProductGrid from "./Components/Products/ProductGrid";
import ImageCarousel from "./Components/ImageCarousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryDetail from "./Components/Products/CategoryDetail";
import ProductDetail from "./Components/Products/ProductDetail";
import AboutUs from "./Components/AboutUs/AboutUs";
import AboutCompetition from "./Components/AboutUs/AboutCompetition";
import MainCounter from "./Components/Counter/MainCounter";
import TopVotedProductGrid from "./Components/Stats/TopVotedProductGrid";
import TopVotedProduct from "./Components/Stats/TopVotedProduct";
import UserDetail from "./Components/User/UserDetail";
import Result from "./Components/Result";
import ParticipationForm from "./Components/Form/ParticipationForm";
import FAQ from "./Components/AboutUs/FAQComponent";
import WinnerProducts from "./Components/Winner/WinnerProducts";

function Home() {
  return (
    <div>
      <ImageCarousel />
      <ProductMainCategory />
      <ProductGrid />
      <AboutUs />
      <MainCounter />
      <AboutCompetition />
      {/* <Result /> */}
      <TopVotedProductGrid products={TopVotedProduct} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/participationform" element={<ParticipationForm />} />
          <Route path="/products" element={<ProductGrid />} />
          <Route path="/categories" element={<ProductMainCategory />} />
          <Route path="/category/:name" element={<CategoryDetail />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/userdetail" element={<UserDetail />} />
          <Route path="/result" element={<Result />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/winner" element={<WinnerProducts />} />
          {/* <Route path="/winner" element={<Winner />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
