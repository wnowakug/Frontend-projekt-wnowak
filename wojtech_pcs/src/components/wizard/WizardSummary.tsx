"use client";

type Props = {
  items: any[];
  totalPrice: number;
  delivery: string;
  setDelivery: (v: string) => void;
  onNext: () => void;
  onCancel: () => void;
};

export default function WizardSummary({
  items,
  totalPrice,
  delivery,
  setDelivery,
  onNext,
  onCancel
}: Props) {
  const canProceed = items.length > 0 && delivery !== "";

  return (
    <div className="wizard">
      <h2>Podsumowanie zamówienia</h2>

      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} × {item.quantity}
          </li>
        ))}
      </ul>

      <p><strong>Suma:</strong> {totalPrice} zł</p>

      <h4>Sposób odbioru</h4>
      <label>
        <input
          type="radio"
          value="pickup"
          checked={delivery === "pickup"}
          onChange={e => setDelivery(e.target.value)}
        />
        Odbiór osobisty
      </label>

      <label>
        <input
          type="radio"
          value="courier"
          checked={delivery === "courier"}
          onChange={e => setDelivery(e.target.value)}
        />
        Kurier
      </label>

      <div className="wizardActions">
        <button onClick={onCancel}>Anuluj</button>
        <button disabled={!canProceed} onClick={onNext}>
          Dalej
        </button>
      </div>
    </div>
  );
}
