import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WojTech PCs",
  description: "Sklep z gotowymi i konfigurowalnymi zestawami komputerowymi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <header className="header">
          <h1 className="logo">WojTech PCs</h1>
          <nav>
            <ul className="nav">
              <li>Sklep</li>
              <li>Konfigurator</li>
              <li>Koszyk</li>
            </ul>
          </nav>
        </header>

        <main className="container">
          {children}
        </main>

        <footer className="footer">
          <p>Wojciech Nowak, 300818, Informatyka Praktyczna gr.3</p>
        </footer>
      </body>
    </html>
  );
}
