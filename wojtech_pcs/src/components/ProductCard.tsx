"use client";

import Image from "next/image";
import { useConfigurator } from "@/context/ConfiguratorContext";

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

  const { setProduct } = useConfigurator();

  const findName = (list: any[], id: string) =>
    list.find(el => el.id === id)?.name ?? id;

  return (
    <div className="card">
      <h3>{product.name.pl}</h3>

      <div className="prevImg">
        <Image
          src={product.imgPath}
          alt={product.name.pl}
          width={128}
          height={192}
        />
      </div>

      <p className="price">Cena bazowa: {product.basePrice} zł</p>

      <ul>
        <li>CPU: {findName(cpus, cfg.cpu)}</li>
        <li>GPU: {findName(gpus, cfg.gpu)}</li>
        <li>RAM: {findName(rams, cfg.ram)}</li>
        <li>Dysk: {findName(drives, cfg.storage)}</li>
      </ul>

      <button onClick={() => setProduct(product)}>
        Wybierz
      </button>
    </div>
  );
}
