import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WojTech PCs",
  description: "Sklep z gotowymi i konfigurowalnymi zestawami komputerowymi"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <main className="container">
          {children}
        </main>

        <footer className="footer">
          <p>
            Wojciech Nowak, 300818, Informatyka Praktyczna gr.3
          </p>
        </footer>
      </body>
    </html>
  );
}
