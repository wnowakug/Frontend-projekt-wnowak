"use client";

import { useEffect, useState } from "react";
import CartPanel from "./CartPanel";

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const btn = document.getElementById("cart-anchor");
    if (!btn) return;

    const open = () => setIsOpen(true);
    btn.addEventListener("click", open);

    return () => btn.removeEventListener("click", open);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="cartOverlay" onClick={() => setIsOpen(false)}>
      <aside
        className="cartDrawer"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="closeCart"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <CartPanel />
      </aside>
    </div>
  );
}
