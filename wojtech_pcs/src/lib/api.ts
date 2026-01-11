export async function fetchProducts() {
  const res = await fetch("/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchParts() {
  const res = await fetch("/api/parts");
  if (!res.ok) throw new Error("Failed to fetch parts");
  return res.json();
}
