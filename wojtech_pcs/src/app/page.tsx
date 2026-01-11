import ProductList from "@/components/ProductList";
import ConfiguratorBar from "@/components/configurator/ConfiguratorBar";
import { ConfiguratorProvider } from "@/context/ConfiguratorContext";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    next: { revalidate: 60 }
  });
  return res.json();
}

async function getParts() {
  const res = await fetch("http://localhost:3000/api/parts", {
    next: { revalidate: 60 }
  });
  return res.json();
}

export default async function HomePage() {
  const products = await getProducts();
  const parts = await getParts();

  return (
    <ConfiguratorProvider>
      {/* konfigurator*/}
      <ConfiguratorBar parts={parts} />

      <h2>Gotowe zestawy PC</h2>

      {/* produkty */}
      <ProductList
        products={products}
        parts={parts}
      />
    </ConfiguratorProvider>
  );
}
