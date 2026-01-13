"use client";

type Props = {
  t: (key: string) => string;
  onFinish: () => void;
};

export default function WizardSuccess({ t, onFinish }: Props) {
  return (
    <div className="wizardStep success">
      <h2>{t("success")}</h2>

      <button className="returnButton" onClick={onFinish}>
        {t("backToShop")}
      </button>
    </div>
  );
}
