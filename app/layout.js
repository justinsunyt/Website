import "./globals.css";
import localFont from "next/font/local";
import { Providers } from "./providers";

export const robotoMono = localFont({
  src: "./RobotoMono.ttf",
  display: "swap",
});

export const metadata = {
  title: "Justin Sun 孙盈廷",
  description: "Justin Sun 孙盈廷",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={
          "h-full bg-white dark:bg-black text-black dark:text-white text-base " +
          robotoMono.className
        }
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
