"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useConfigurator } from "@/context/ConfiguratorContext";
import PartSelect from "./PartSelect";
import PriceSummary from "./PriceSummary";
import { getAllowedParts } from "@/lib/configuratorRules";
import { useCart } from "@/context/CartContext";
import { nanoid } from "nanoid";
import discountCodes from "@/data/discount-codes.json";


const LABOUR_COST = 200;

type Props = {
  parts: any;
  onClose: () => void;
  t: (key: string) => string;
};

export default function ConfiguratorPanel({ parts, onClose, t }: Props) {

  const { product, config, updateConfig, applyDiscount } = useConfigurator();
  const { addItem } = useCart();

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  
  if (!product || !config) {
    return null;
  }

  const allowedParts = getAllowedParts(product.id, parts);

  const findPrice = (list: any[], id: string) =>
    list.find(el => el.id === id)?.price ?? 0;

  const basePrice =
    findPrice(allowedParts.cpus, config.cpu) +
    findPrice(allowedParts.gpus, config.gpu) +
    findPrice(allowedParts.rams, config.ram) +
    findPrice(allowedParts.drives, config.drives) +
    LABOUR_COST;

  const totalPrice = useMemo(() => {
    return Math.round(
      basePrice * (1 - config.discount / 100)
    );
  }, [basePrice, config.discount]);

  const handleAddToCart = () => {
    addItem({
      id: nanoid(),
      productId: product.id,
      name: product.name.pl,
      imgPath: product.imgPath,
      config,
      unitPrice: totalPrice,
    });
  };

  const handleApplyCode = () => {
    const found = discountCodes.find(
      c => c.name.toLowerCase() === code.toLowerCase()
    );

    if (!found) {
      setError(t("invalidCode"));
      return;
    }

    applyDiscount(found.discount);
    setError("");
  };



  return (
    <div className="configuratorPanel">
      <div className="configuratorLeft">
        <Image
          src={product.imgPath}
          alt={product.name.pl}
          width={256}
          height={384}
        />
        <PriceSummary price={totalPrice} t={t}/>

        <div className="discountBox">
          <label>{t("discountCode")}</label>

          <div className="discountInput">
            <input
              type="text"
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder=""
            />

            <button className="discountButton" onClick={handleApplyCode}>
              {t("apply")}
            </button>
          </div>

          {error && <p>{error}</p>}
        </div>

        <button className="addButton" onClick={handleAddToCart}>
          {t("addToCart")}
        </button>
      </div>

      <div className="configuratorOptions">
        <h3>{product.name.pl}</h3>

        <PartSelect
          label={t("cpu")}
          options={allowedParts.cpus}
          value={config.cpu}
          onChange={value => updateConfig("cpu", value)}
        />

        <PartSelect
          label={t("gpu")}
          options={allowedParts.gpus}
          value={config.gpu}
          onChange={value => updateConfig("gpu", value)}
        />

        <PartSelect
          label={t("ram")}
          options={allowedParts.rams}
          value={config.ram}
          onChange={value => updateConfig("ram", value)}
        />

        <PartSelect
          label={t("storage")}
          options={allowedParts.drives}
          value={config.drives}
          onChange={value => updateConfig("drives", value)}
        />

        <button className="closeConfigButton" onClick={onClose}>
          {t("closeConfigurator")}
        </button>
      </div>
    </div>
  );
}
