import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import { Providers } from "./providers";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata = {
  title: "Justin Sun",
  description: "Justin Sun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`h-full bg-white dark:bg-black text-black dark:text-white text-xs sm:text-base ${roboto_mono.variable}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
