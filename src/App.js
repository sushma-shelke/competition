import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductMainCategory from "./Components/Products/ProductMainCategory";
import ParticipationForm from "./Components/Form/ParticipationForm";
import ProductGrid from "./Components/Products/ProductGrid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <ParticipationForm />
        <ProductMainCategory />
        <ProductGrid />
        <Footer />
      </header>
    </div>
  );
}

export default App;
