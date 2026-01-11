import ProductCard from "@/components/ProductCard";

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
    <>
      <h2>Gotowe zestawy PC</h2>

      <div className="pc-grid">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            parts={parts}
          />
        ))}
      </div>
    </>
  );
}
