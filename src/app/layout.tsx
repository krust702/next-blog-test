import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Мій сайт",
  description: "Next.js приклад",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <header style={{ padding: "20px", background: "#a38181ff" }}>
          <nav style={{ display: "flex", gap: "20px" }}>
            <Link href="/">Головна</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/contacts">Контакти</Link>
          </nav>
        </header>
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
