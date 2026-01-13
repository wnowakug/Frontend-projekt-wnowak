"use client";

import { useConfigurator } from "@/context/ConfiguratorContext";
import { useEffect, useRef, useState } from "react";
import ConfiguratorPanel from "./ConfiguratorPanel";

const ANIMATION_TIME = 450;

type Props = {
  parts: any;
  t: (key: string) => string;
};

export default function ConfiguratorBar({ parts, t }: Props){
  const { product, setProduct } = useConfigurator();
  const [isOpen, setIsOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (product) {
      setIsOpen(true);

      barRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      setIsOpen(false);
    }
  }, [product]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setProduct(null);
    }, ANIMATION_TIME);
  };

  return (
    <div className="configuratorBar" ref={barRef}>
      <div className="configuratorHeader">
        {!isOpen && <strong>{t("chooseToConfig")}</strong>}
        {isOpen && <strong>{t("pcConfig")}</strong>}
      </div>

      <div className={`configuratorContent ${isOpen ? "open" : ""}`}>
        {product && (
          <ConfiguratorPanel
            parts={parts}
            onClose={handleClose}
            t={t}
          />
        )}
      </div>
    </div>
  );
}
