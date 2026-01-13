type Props = {
  price: number;
  t: (key: string) => string;
};

export default function PriceSummary({ price, t }: Props) {
  return (
    <div className="priceSummary">
      <strong>{t("totalPrice")}:</strong> {price} zł
      <div className="fee">{t("assembly")}</div>
    </div>
  );
}
