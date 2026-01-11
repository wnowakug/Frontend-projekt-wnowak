export default function PriceSummary({ price }: { price: number }) {
  return (
    <div
      style={{
        fontWeight: "bold",
      }}
    >
      Cena końcowa: {price} zł
      <div style={{ fontSize: "0.8rem", color: "gray" }}>
        (w tym 200 zł za montaż)
      </div>
    </div>
  );
}
