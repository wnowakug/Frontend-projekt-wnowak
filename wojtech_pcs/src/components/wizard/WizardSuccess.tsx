"use client";

import { useCart } from "@/context/CartContext";

export default function WizardSuccess({
  onClose
}: {
  onClose: () => void;
}) {
  const { items, clearCart } = useCart();

  const handleFinish = () => {
    clearCart();
    onClose();
  };

  return (
    <div className="wizard">
      <h2>✅ Zamówienie złożone</h2>
      <p>Dziękujemy za zakupy!</p>
      <p>Liczba pozycji: {items.length}</p>

      <button onClick={handleFinish}>
        Wróć do sklepu
      </button>
    </div>
  );
}
