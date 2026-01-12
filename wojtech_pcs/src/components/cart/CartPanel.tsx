"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPanel() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <aside className="cartWrapper">
      <div className="cartPanel">
        <h3>Koszyk</h3>

        {items.length === 0 && (
          <p className="emptyCart">Koszyk jest pusty</p>
        )}

        {items.map(item => (
          <div key={item.id} className="cartItem">
            <strong>{item.name}</strong>

            <div className="cartConfig">
              <div>CPU: {item.config.cpu}</div>
              <div>GPU: {item.config.gpu}</div>
              <div>RAM: {item.config.ram}</div>
              <div>Dysk: {item.config.drives}</div>
            </div>

            <div className="cartControls">
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                −
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
              <button onClick={() => removeItem(item.id)}>Usuń</button>
            </div>

            <div className="cartPrice">
              {item.unitPrice * item.quantity} zł
            </div>
          </div>
        ))}

        {items.length > 0 && (
          <div className="cartSummary">
            <strong>Suma: {totalPrice} zł</strong>
            <button className="checkoutBtn">
              Przejdź do finalizacji
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
