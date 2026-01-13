"use client";

import CartPanel from "./CartPanel";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  t: (key: string) => string;
};

export default function CartDrawer({ isOpen, onClose, t }: Props) {
  if (!isOpen) return null;

  return (
    <div className="cartOverlay">
      <div className="cartDrawer">
        <button className="close" onClick={onClose}>
          ✕
        </button>

        <CartPanel t={t} />
      </div>
    </div>
  );
}
