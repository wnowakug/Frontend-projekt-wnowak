import ProductList from "@/components/ProductList";
import ConfiguratorBar from "@/components/configurator/ConfiguratorBar";
import { ConfiguratorProvider } from "@/context/ConfiguratorContext";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";


async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error("Nie udało się pobrać listy produktów");
  }

  return res.json();
}

async function getParts() {
  const res = await fetch("http://localhost:3000/api/parts", {
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    throw new Error("Nie udało się pobrać komponentów");
  }

  return res.json();
}

export default async function HomePage() {
  try {
  const products = await getProducts();
  const parts = await getParts();

  return (
    <CartProvider>
      <ConfiguratorProvider>
        {/* koszyk */}
        <CartDrawer />

        {/* konfigurator*/}
        <ConfiguratorBar parts={parts} />

        <h2>Gotowe zestawy PC</h2>

        {/* produkty */}
        <ProductList
          products={products}
          parts={parts}
        />
      </ConfiguratorProvider>
    </CartProvider>
  );
} catch (error) {
    return (
      <h2>Błąd pobierania danych z API</h2>
    );
  }
}