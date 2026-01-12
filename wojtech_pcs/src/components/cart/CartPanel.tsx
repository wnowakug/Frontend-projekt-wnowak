"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import CheckoutWizard from "@/components/wizard/CheckoutWizard";
import { useState } from "react";

export default function CartPanel() {
  const { items, removeItem, totalPrice } = useCart();
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  if (items.length === 0) {
    return (
      <div className="cartPanel empty">
        <h3>Koszyk</h3>
        <p>Koszyk jest pusty</p>
      </div>
    );
  }

  return (
    <>
      <div className="cartPanel">
        <h3>Koszyk</h3>

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
                  <div>CPU: {item.config.cpu}</div>
                  <div>GPU: {item.config.gpu}</div>
                  <div>RAM: {item.config.ram}</div>
                  <div>Dysk: {item.config.drives}</div>
                </div>

                <button
                  className="remove"
                  onClick={() => removeItem(item.id)}
                >
                  Usuń
                </button>
              </div>

              <div className="cartPrice">
                {item.unitPrice} zł
              </div>
            </li>
          ))}
        </ul>

        <div className="cartSummary">
          <strong>Suma: {totalPrice} zł</strong>

          <button
            className="checkoutBtn"
            onClick={() => setIsWizardOpen(true)}
          >
            Przejdź do finalizacji
          </button>
        </div>
      </div>

      {isWizardOpen && (
        <div className="wizardOverlay">
          <div className="wizardModal">
            <CheckoutWizard onClose={() => setIsWizardOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
