"use client";

type Props = {
  items: any[];
  totalPrice: number;
  delivery: string;
  setDelivery: (v: string) => void;
  onNext: () => void;
  onCancel: () => void;
  t: (key: string) => string;
};

export default function WizardSummary({
  items,
  totalPrice,
  delivery,
  setDelivery,
  onNext,
  onCancel,
  t
}: Props) {
  return (
    <div className="wizardStep">
      <h2>{t("orderSummary")}</h2>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} – {item.unitPrice} zł
          </li>
        ))}
      </ul>

      <p>
        <strong>{t("totalPrice")}:</strong> {totalPrice} zł
      </p>

      <h4>{t("deliveryMethod")}</h4>

      <label>
        <input
          type="radio"
          value="pickup"
          checked={delivery === "pickup"}
          onChange={e => setDelivery(e.target.value)}
        />
        {t("pickup")}
      </label>

      <label>
        <input
          type="radio"
          value="courier"
          checked={delivery === "courier"}
          onChange={e => setDelivery(e.target.value)}
        />
        {t("courier")}
      </label>

      <div className="wizardActions">
        <button className="cancelWizardButton" onClick={onCancel}>
          {t("close")}
        </button>

        <button className="checkoutWizardButton" onClick={onNext} disabled={!delivery}
        >
          {t("checkout")}
        </button>
      </div>
    </div>
  );
}
