// import logo from "./logo.svg";
// import "./App.css";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import ProductMainCategory from "./Components/Products/ProductMainCategory";
// import ParticipationForm from "./Components/Form/ParticipationForm";
// import ProductGrid from "./Components/Products/ProductGrid";
// import ImageCarousel from "./Components/ImageCarousel";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import CategoryDetail from "./Components/Products/CategoryDetail";
// import ProductDetail from "./Components/Products/ProductDetail";
// import AboutUs from "./Components/AboutUs/AboutUs";
// import AboutCompetition from "./Components/AboutUs/AboutCompetition";

// import MainCounter from "./Components/Counter/MainCounter";

// import TopVotedProductGrid from "./Components/Stats/TopVotedProductGrid";
// import TopVotedProduct from "./Components/Stats/TopVotedProduct";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 <ImageCarousel />
//                 <ProductMainCategory />
//                 <ProductGrid />
//                 <AboutUs />
//                 <MainCounter />
//                 <AboutCompetition />
//                 <TopVotedProductGrid products={TopVotedProduct} />
//               </div>
//             }
//           />
//           <Route path="/category/:name" element={<CategoryDetail />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
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
import AboutUs from "./Components/AboutUs/AboutUs";
import AboutCompetition from "./Components/AboutUs/AboutCompetition";
import MainCounter from "./Components/Counter/MainCounter";
import TopVotedProductGrid from "./Components/Stats/TopVotedProductGrid";
import TopVotedProduct from "./Components/Stats/TopVotedProduct";

function Home() {
  return (
    <div>
      <ImageCarousel />
      <ProductMainCategory />
      <ParticipationForm />
      <ProductGrid />
      <AboutUs />
      <MainCounter />
      <AboutCompetition />
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
          <Route path="/products" element={<ProductGrid />} />
          <Route path="/categories" element={<ProductMainCategory />} />
          <Route path="/category/:name" element={<CategoryDetail />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
