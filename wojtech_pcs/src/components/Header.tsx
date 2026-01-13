"use client";

import Image from "next/image";

type Props = {
  lang: "pl" | "en";
  setLang: (l: "pl" | "en") => void;
  onCartClick: () => void;
  t: (key: string) => string;
};

export default function HeaderClient({
  lang,
  setLang,
  onCartClick,
  t
}: Props) {
  return (
    <header className="header">
      <h1 className="logo">WojTech PCs</h1>
      <div id="headerButtons">
          <div className="langSwitch">
            <button
              className={"langButton"}
              onClick={() => setLang("pl")}
            >
              <Image src={"/svg/pl.svg"}
              alt="pl"
              width={32}
              height={32}/>
            </button>
            <button
              className={"langButton"}
              onClick={() => setLang("en")}
            >
              <Image src={"/svg/gb.svg"}
              alt="gb"
              width={32}
              height={32}/>
            </button>
        </div>
      </div>
   
      <button className="cartButton" onClick={onCartClick}>
        <Image src={"/svg/shoppingCart.svg"}
        alt={t("cart")}
        width={32}
        height={32}/>
      </button>

    </header>
  );
}
