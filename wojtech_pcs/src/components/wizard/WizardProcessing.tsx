"use client";

type Props = {
  t: (key: string) => string;
};

export default function WizardProcessing({ t }: Props) {
  return (
    <div className="wizardStep">
      <h2>{t("processing")}</h2>
      <p>⏳</p>
    </div>
  );
}
