export const translations: Record<
  "pl" | "en",
  Record<string, string>
> = {
  pl: {
    // header
    shopTitle: "Gotowe zestawy PC",
    cart: "Koszyk",

    // product list
    choose: "Wybierz",
    basePrice: "Cena bazowa: ",
    noResults: "Brak zestawów spełniających kryteria.",
    dysk: "Dysk: ",

    // parts
    cpu: "Procesor",
    gpu: "Karta graficzna",
    ram: "Pamięć RAM",
    storage: "Dysk",

    // configurator
    chooseToConfig: "Wybierz komputer do konfiguracji",
    pcConfig: "Konfiguracja komputera",
    addToCart: "Dodaj do koszyka",
    closeConfigurator: "Zamknij konfigurator",
    totalPrice: "Cena całkowita",
    assembly: "(w tym 200zł za montaż)",
    discountCode: "Kod rabatowy",
    apply: "Zastosuj",
    invalidCode: "Nieprawidłowy kod rabatowy",

    // cart
    summary: "Podsumowanie",
    checkout: "Przejdź do finalizacji",
    remove: "Usuń",
    emptyCart: "Koszyk jest pusty",

    // wizard
    orderSummary: "Podsumowanie zamówienia",
    deliveryMethod: "Sposób odbioru",
    pickup: "Odbiór osobisty",
    courier: "Kurier",
    processing: "Przetwarzanie zamówienia…",
    success: "Zamówienie złożone",
    backToShop: "Wróć do sklepu",

    // filters
    filters: "Filtry",
    purpose: "Zastosowanie",
    priceRange: "Przedział cenowy",
    cpuBrand: "Producent CPU",
    gpuBrand: "Producent GPU"
  },

  en: {
    // header
    shopTitle: "PC Bundles",
    cart: "Cart",

    // product list
    choose: "Choose",
    basePrice: "Base price: ",
    noResults: "No products match your filters.",
    dysk: "Drive: ",

    // parts
    cpu: "Processor",
    gpu: "Graphics card",
    ram: "RAM memory",
    storage: "Storage",

    // configurator
    chooseToConfig: "Select a computer for configuration",
    pcConfig: "Configuration",
    addToCart: "Add to cart",
    closeConfigurator: "Close configurator",
    totalPrice: "Total price",
    assembly: "(Includes a 200zł assembly fee)",
    discountCode: "Discount code",
    apply: "Apply",
    invalidCode: "Invalid discount code",

    // cart
    summary: "Summary",
    checkout: "Proceed to checkout",
    remove: "Remove",
    emptyCart: "Your cart is empty",

    // wizard
    orderSummary: "Order summary",
    deliveryMethod: "Delivery method",
    pickup: "Store pickup",
    courier: "Courier",
    processing: "Processing order…",
    success: "Order placed",
    backToShop: "Back to shop",

    // filters
    filters: "Filters",
    purpose: "Purpose",
    priceRange: "Price range",
    cpuBrand: "CPU brand",
    gpuBrand: "GPU brand"
  }
};
