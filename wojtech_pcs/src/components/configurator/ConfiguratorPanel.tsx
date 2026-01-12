"use client";

import Image from "next/image";
import { useMemo } from "react";
import { useConfigurator } from "@/context/ConfiguratorContext";
import PartSelect from "./PartSelect";
import PriceSummary from "./PriceSummary";
import { getAllowedParts } from "@/lib/configuratorRules";

const LABOUR_COST = 200;

export default function ConfiguratorPanel({ parts, onClose }: { parts: any; onClose: () => void; }) {
  const { product, config, updateConfig } = useConfigurator();
  
  if (!product || !config) {
    return null;
  }

  const allowedParts = getAllowedParts(product.id, parts);

  const findPrice = (list: any[], id: string) =>
    list.find(el => el.id === id)?.price ?? 0;

  const totalPrice = useMemo(() => {
    return (
      findPrice(allowedParts.cpus, config.cpu) +
      findPrice(allowedParts.gpus, config.gpu) +
      findPrice(allowedParts.rams, config.ram) +
      findPrice(allowedParts.drives, config.drives) +
      LABOUR_COST
    );
  }, [config, allowedParts]);

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
          options={allowedParts.cpus}
          value={config.cpu}
          onChange={value => updateConfig("cpu", value)}
        />

        <PartSelect
          label="Karta graficzna"
          options={allowedParts.gpus}
          value={config.gpu}
          onChange={value => updateConfig("gpu", value)}
        />

        <PartSelect
          label="Pamięć RAM"
          options={allowedParts.rams}
          value={config.ram}
          onChange={value => updateConfig("ram", value)}
        />

        <PartSelect
          label="Dysk"
          options={allowedParts.drives}
          value={config.drives}
          onChange={value => updateConfig("drives", value)}
        />

        <button id="closeConfigButton" onClick={onClose}>
          Zamknij konfigurator
        </button>
      </div>
    </div>
  );
}
