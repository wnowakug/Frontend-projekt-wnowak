"use client";

import { createContext, useContext, useState } from "react";

type Config = {
  cpu: string;
  gpu: string;
  ram: string;
  drives: string;
  discount: number;
};

type ContextType = {
  product: any | null;
  config: Config | null;
  setProduct: (product: any | null) => void;
  updateConfig: (key: keyof Config, value: string) => void;
  applyDiscount: (discount: number) => void;
};

const ConfiguratorContext = createContext<ContextType | null>(null);

export function ConfiguratorProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [product, setProductState] = useState<any | null>(null);
  const [config, setConfig] = useState<Config | null>(null);

  const setProduct = (product: any | null) => {
    setProductState(product);
    if (product) {
      setConfig({
        cpu: product.defaultConfig.cpu,
        gpu: product.defaultConfig.gpu,
        ram: product.defaultConfig.ram,
        drives: product.defaultConfig.drives,
        discount: 0
      });
    } else {
      setConfig(null);
    }
  };

  const updateConfig = (key: keyof Config, value: string) => {
    setConfig(prev =>
      prev ? { ...prev, [key]: value } : prev
    );
  };

  const applyDiscount = (discount: number) => {
    setConfig(prev =>
      prev ? { ...prev, discount } : prev
    );
  };

  return (
    <ConfiguratorContext.Provider
      value={{ product, config, setProduct, updateConfig, applyDiscount }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
}

export function useConfigurator() {
  const ctx = useContext(ConfiguratorContext);
  if (!ctx) {
    throw new Error("useConfigurator must be used inside ConfiguratorProvider");
  }
  return ctx;
}
