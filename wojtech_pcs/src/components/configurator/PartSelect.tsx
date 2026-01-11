"use client";

type Option = {
  id: string;
  name: string;
  price: number;
};

type Props = {
  label: string;
  options: Option[];
  value: string;
  onChange: (id: string) => void;
};

export default function PartSelect({
  label,
  options,
  value,
  onChange
}: Props) {
  return (
    <div className="partSelect">
      <div className="partSelectLabel">{label}</div>

      <div className="partSelectButtons">
        {options.map(opt => {
          const isActive = opt.id === value;

          return (
            <button
              key={opt.id}
              type="button"
              className={`partButton ${isActive ? "active" : ""}`}
              onClick={() => onChange(opt.id)}
            >
              <div className="partName">{opt.name}</div>
              <div className="partPrice">+{opt.price} zł</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
