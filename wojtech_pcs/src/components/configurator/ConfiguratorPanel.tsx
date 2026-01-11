"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useConfigurator } from "@/context/ConfiguratorContext";
import PartSelect from "./PartSelect";
import PriceSummary from "./PriceSummary";

const LABOUR_COST = 200;

export default function ConfiguratorPanel({ parts, onClose }: { parts: any; onClose: () => void; }) {
  const { product, config, updateConfig, setProduct } =
    useConfigurator();

  // zabezpieczenie
  if (!product || !config) {
    return <div />
  }

  const findPrice = (list: any[], id: string) =>
    list.find(el => el.id === id)?.price ?? 0;

  const totalPrice = useMemo(() => {
    return (
      findPrice(parts.cpus, config.cpu) +
      findPrice(parts.gpus, config.gpu) +
      findPrice(parts.rams, config.ram) +
      findPrice(parts.drives, config.storage) +
      LABOUR_COST
    );
  }, [config, parts]);

  return (
    <div
      className="configuratorPanel"
    >
      <div className="configuratorLeft">
        <Image
          src={product.imgPath}
          alt={product.name.pl}
          width={256}
          height={384}
        />
        <PriceSummary price={totalPrice} />
      </div>

      <div className="configuratorOptions">
        <h3>{product.name.pl}</h3>

        <PartSelect
          label="Procesor"
          options={parts.cpus}
          value={config.cpu}
          onChange={value => updateConfig("cpu", value)}
        />

        <PartSelect
          label="Karta graficzna"
          options={parts.gpus}
          value={config.gpu}
          onChange={value => updateConfig("gpu", value)}
        />

        <PartSelect
          label="Pamięć RAM"
          options={parts.rams}
          value={config.ram}
          onChange={value => updateConfig("ram", value)}
        />

        <PartSelect
          label="Dysk"
          options={parts.drives}
          value={config.storage}
          onChange={value => updateConfig("storage", value)}
        />

        <button onClick={onClose}>
          Zamknij konfigurator
        </button>
      </div>
    </div>
  );
}
