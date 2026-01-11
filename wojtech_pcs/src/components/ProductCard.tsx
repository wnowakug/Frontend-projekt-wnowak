import Image from "next/image";

type Parts = {
  cpus: any[];
  gpus: any[];
  rams: any[];
  drives: any[];
};

type Props = {
  product: any;
  parts: Parts;
};

export default function ProductCard({ product, parts }: Props) {
  const { cpus, gpus, rams, drives } = parts;
  const cfg = product.defaultConfig;

  const findName = (list: any[], id: string) =>
    list.find(el => el.id === id)?.name ?? id;

  return (
    <div className="card">
      <h3>{product.name.pl}</h3>
      <Image src={product.imgPath} alt={product.name.pl} width={128} height={128} />
      <p className="price">Cena bazowa: {product.basePrice} zł</p>

      <ul>
        <li>CPU: {findName(cpus, cfg.cpu)}</li>
        <li>GPU: {findName(gpus, cfg.gpu)}</li>
        <li>
          RAM:{" "}
          {cfg.ram.map((id: string) => findName(rams, id))}
        </li>
        <li>
          Dysk:{" "}
          {cfg.storage
            .map((id: string) => findName(drives, id))
        }
        </li>
      </ul>

      <button>Konfiguruj</button>
    </div>
  );
}
