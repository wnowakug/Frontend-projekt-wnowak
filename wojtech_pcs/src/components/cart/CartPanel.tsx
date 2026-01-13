"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import CheckoutWizard from "@/components/wizard/CheckoutWizard";
import { useState } from "react";

type Props = {
  t: (key: string) => string;
};

export default function CartPanel({ t }: Props) {
  const { items, removeItem, totalPrice } = useCart();
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  if (items.length === 0) {
    return (
      <div className="cartPanel empty">
        <h3>{t("cart")}</h3>
        <p>{t("emptyCart")}</p>
      </div>
    );
  }

  return (
    <>
      <div className="cartPanel">
        <h3>{t("cart")}</h3>

        <ul className="cartList">
          {items.map(item => (
            <li key={item.id} className="cartItem">
              <Image
                src={item.imgPath}
                alt={item.name}
                width={64}
                height={96}
              />

              <div className="cartDetails">
                <strong>{item.name}</strong>

                <div className="cartConfig">
                  <div>{t("cpu")}: {item.config.cpu}</div>
                  <div>{t("gpu")}: {item.config.gpu}</div>
                  <div>{t("ram")}: {item.config.ram}</div>
                  <div>{t("storage")}: {item.config.drives}</div>
                </div>

                <button
                  className="remove"
                  onClick={() => removeItem(item.id)}
                >
                  {t("remove")}
                </button>
              </div>

              <div className="cartPrice">
                {item.unitPrice} zł
              </div>
            </li>
          ))}
        </ul>

        <div className="cartSummary">
          <strong>
            {t("totalPrice")}: {totalPrice} zł
          </strong>

          <button
            className="checkoutBtn"
            onClick={() => setIsWizardOpen(true)}
          >
            {t("checkout")}
          </button>
        </div>
      </div>

      {isWizardOpen && (
        <div className="wizardOverlay">
          <div className="wizardModal">
            <CheckoutWizard
              onClose={() => setIsWizardOpen(false)}
              t={t}
            />
          </div>
        </div>
      )}
    </>
  );
}
