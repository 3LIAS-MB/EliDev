import { products as initalProducts } from "./mocks/products.json";
import { Products } from "./components/Products";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "../config.js";
import { useFilters } from "./hooks/useFilters.jsx";
import { Cart } from "./components/Cart.jsx";
import { CartProvider } from "./context/cart.jsx";

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initalProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider> 
  );
}

export default App;
