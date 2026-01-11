"use client";

import { useState } from "react";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import { filterProducts } from "@/lib/filters";

export default function ProductList({
  products,
  parts
}: {
  products: any[];
  parts: any;
}) {
  const [filters, setFilters] = useState({
    purpose: "",
    price: "",
    cpuBrand: "",
    gpuBrand: ""
  });

  const filteredProducts = filterProducts(products, filters);

  return (
    <>
      <FilterBar filters={filters} onChange={setFilters} />

      <div className="pc-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            parts={parts}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p>Brak zestawów spełniających kryteria.</p>
      )}
    </>
  );
}
