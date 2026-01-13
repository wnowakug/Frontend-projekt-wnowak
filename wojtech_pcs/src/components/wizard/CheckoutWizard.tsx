"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import WizardSummary from "./WizardSummary";
import WizardProcessing from "./WizardProcessing";
import WizardSuccess from "./WizardSuccess";

type WizardStep = "summary" | "processing" | "success";

type Props = {
  onClose: () => void;
  t: (key: string) => string;
};

export default function CheckoutWizard({ onClose, t }: Props) {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<WizardStep>("summary");
  const [delivery, setDelivery] = useState<string>("");

  // fejkowe przetwarzanie zamówienia
  useEffect(() => {
    if (step === "processing") {
      const timer = setTimeout(() => {
        setStep("success");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleFinish = () => {
    clearCart();
    setDelivery("");
    setStep("summary");
    onClose();
  };

  if (step === "summary") {
    return (
      <WizardSummary
        items={items}
        totalPrice={totalPrice}
        delivery={delivery}
        setDelivery={setDelivery}
        onNext={() => setStep("processing")}
        onCancel={onClose}
        t={t}
      />
    );
  }

  if (step === "processing") {
    return <WizardProcessing t={t} />;
  }

  return (
    <WizardSuccess
      t={t}
      onFinish={handleFinish}
    />
  );
}
