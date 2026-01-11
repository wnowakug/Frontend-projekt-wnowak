type Filters = {
  purpose: string;
  price: string;
  cpuBrand: string;
  gpuBrand: string;
};

const PRICE_RANGES: Record<string, { min: number; max: number }> = {
  low: { min: 0, max: 5000 },
  mid: { min: 5000, max: 8000 },
  high: { min: 8000, max: Infinity }
};

export function filterProducts(products: any[], filters: Filters) {
  return products.filter(product => {
    const tags: string[] = product.tags ?? [];

    // zastosowanie kompa
    if (filters.purpose && !tags.includes(filters.purpose)) {
      return false;
    }

    // przedział cenowy
    if (filters.price) {
      const range = PRICE_RANGES[filters.price];
      if (
        product.basePrice < range.min ||
        product.basePrice >= range.max
      ) {
        return false;
      }
    }

    // producent cpu
    if (filters.cpuBrand && !tags.includes(filters.cpuBrand)) {
      return false;
    }

    // producent gpu
    if (filters.gpuBrand && !tags.includes(filters.gpuBrand)) {
      return false;
    }

    return true;
  });
}
