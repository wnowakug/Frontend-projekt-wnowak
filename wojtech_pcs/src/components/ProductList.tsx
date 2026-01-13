"use client";

import { useState } from "react";
import FilterBar from "./FilterBar";
import ProductCard from "./ProductCard";
import { filterProducts } from "@/lib/filters";

type Props = {
  products: any[];
  parts: any;
  t: (key: string) => string;
};

export default function ProductList({ products, parts, t }: Props) {
  const [filters, setFilters] = useState({
    purpose: "",
    price: "",
    cpuBrand: "",
    gpuBrand: ""
  });

  const filteredProducts = filterProducts(products, filters);

  return (
    <>
      <FilterBar filters={filters} onChange={setFilters} t={t}/>

      <div className="pc-grid">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            parts={parts}
            t={t}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p>{t("noResults")}</p>
      )}
    </>
  );
}
