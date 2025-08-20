import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Pavlo's Blog - Next.js Starter",
  description: "Next.js blog starter with Tailwind CSS and TypeScript",
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
      
        <main className="max-w-5xl mx-auto p-10 pt-20">{children}</main>
      </body>
    </html>
  );
}
