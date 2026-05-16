import type { Metadata } from "next";
import localFont from "next/font/local";
import Nav from "@/components/Nav";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Matias Grinberg",
    template: "%s | Matias Grinberg",
  },
  description:
    "Founder of Queiros. Business Development at Complif. Builder at the intersection of ops, AI, and Latin America.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-zinc-100 dark:border-zinc-800 mt-24">
          <div className="max-w-2xl mx-auto px-6 py-8 flex items-center justify-between">
            <span className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-400 dark:text-zinc-500">
              © {new Date().getFullYear()} Matias Grinberg
            </span>
            <a
              href="https://x.com/matt1_g"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-400 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
            >
              @matt1_g
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
