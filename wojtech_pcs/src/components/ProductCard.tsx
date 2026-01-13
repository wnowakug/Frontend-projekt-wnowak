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
  t: (key: string) => string;
};

export default function ProductCard({ product, parts, t }: Props) {
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

      <p className="price">{t("basePrice")}{product.basePrice} zł</p>

      <ul>
        <li>CPU: {findName(cpus, cfg.cpu)}</li>
        <li>GPU: {findName(gpus, cfg.gpu)}</li>
        <li>RAM: {findName(rams, cfg.ram)}</li>
        <li>{t("dysk")} {findName(drives, cfg.drives)}</li>
      </ul>

      <button className="choosePcButton" onClick={() => setProduct(product)}>
        {t("choose")}
      </button>
    </div>
  );
}
