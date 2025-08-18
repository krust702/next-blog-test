import "./globals.css";
import Navbar from "./components/Navbar";

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
        <Navbar />
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
