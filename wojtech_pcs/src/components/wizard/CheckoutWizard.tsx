"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import WizardSummary from "./WizardSummary";
import WizardProcessing from "./WizardProcessing";
import WizardSuccess from "./WizardSuccess";

type WizardStep = "summary" | "processing" | "success";

export default function CheckoutWizard({
  onClose
}: {
  onClose: () => void;
}) {
  const { items, totalPrice, } = useCart();
  const [step, setStep] = useState<WizardStep>("summary");
  const [delivery, setDelivery] = useState<string>("");

  // symulacja przetwarzania
  useEffect(() => {
    if (step === "processing") {
      const timer = setTimeout(() => {
        setStep("success");
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [step]);

  if (step === "summary") {
    return (
      <WizardSummary
        items={items}
        totalPrice={totalPrice}
        delivery={delivery}
        setDelivery={setDelivery}
        onNext={() => setStep("processing")}
        onCancel={onClose}
      />
    );
  }

  if (step === "processing") {
    return <WizardProcessing />;
  }

  return <WizardSuccess onClose={onClose} />;
}
