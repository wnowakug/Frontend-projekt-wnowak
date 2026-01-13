"use client";

import { useState } from "react";
import { translations } from "@/i18n/translations";
import CartDrawer from "@/components/cart/CartDrawer";
import ConfiguratorBar from "@/components/configurator/ConfiguratorBar";
import ProductList from "@/components/ProductList";
import HeaderClient from "@/components/Header";

type Props = {
  products: any[];
  parts: any;
};

export default function HomeClient({ products, parts }: Props) {
  const [lang, setLang] = useState<"pl" | "en">("pl");

  const t = (key: string) => translations[lang][key] ?? key;

  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      {/* HEADER Z PRZEŁĄCZNIKIEM JĘZYKA */}
        <HeaderClient lang={lang} setLang={setLang} onCartClick={() => setIsCartOpen(true)} t={t} />

        <div className="corePage">
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} t={t}/>
            <ConfiguratorBar parts={parts} t={t}/>

            <h2>{t("shopTitle")}</h2>

            <ProductList
            products={products}
            parts={parts}
            t={t}
            />
        </div>
    </>
  );
}
