import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductMainCategory from "./Components/Products/ProductMainCategory";
import ParticipationForm from "./Components/Form/ParticipationForm";
import ProductGrid from "./Components/Products/ProductGrid";
import ImageCarousel from "./Components/ImageCarousel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ImageCarousel />
        <ParticipationForm />
        <ProductMainCategory />
        <ProductGrid />
        <Footer />
      </header>
    </div>
  );
}

export default App;
