import { CartProvider } from "@/context/CartContext";
import { ConfiguratorProvider } from "@/context/ConfiguratorContext";
import HomeClient from "@/components/Home";

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
          <HomeClient products={products} parts={parts} />
        </ConfiguratorProvider>
      </CartProvider>
    );
  } catch {
    return <h2>Błąd pobierania danych z API</h2>;
  }
}
