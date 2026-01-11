"use client";

import { useConfigurator } from "@/context/ConfiguratorContext";
import { useEffect, useRef, useState } from "react";
import ConfiguratorPanel from "./ConfiguratorPanel";

const ANIMATION_TIME = 450;

export default function ConfiguratorBar({ parts }: { parts: any }) {
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
        {!isOpen && <strong>Wybierz komputer do konfiguracji</strong>}
        {isOpen && <strong>Konfiguracja zestawu</strong>}
      </div>

      <div className={`configuratorContent ${isOpen ? "open" : ""}`}>
        {product && (
          <ConfiguratorPanel
            parts={parts}
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}
