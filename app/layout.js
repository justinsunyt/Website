import "./globals.css";
import localFont from "next/font/local";
import { NavProvider } from "./context/navProvider";
import Nav from "./components/nav";

export const gtWalsheim = localFont({
  src: [
    {
      path: "./fonts/GT-Walsheim-Ultra-Light.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/GT-Walsheim-Ultra-Light-Oblique.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/GT-Walsheim-Thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/GT-Walsheim-Thin-Oblique.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/GT-Walsheim-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/GT-Walsheim-Light-Oblique.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/GT-Walsheim-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GT-Walsheim-Regular-Oblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/GT-Walsheim-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/GT-Walsheim-Medium-Oblique.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/GT-Walsheim-Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GT-Walsheim-Bold-Oblique.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/GT-Walsheim-Black.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/GT-Walsheim-Black-Oblique.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/GT-Walsheim-Ultra-Bold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/GT-Walsheim-Ultra-Bold-Oblique.otf",
      weight: "800",
      style: "italic",
    },
  ],
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
          "h-full bg-black dark:bg-black text-black text-base " +
          gtWalsheim.className
        }
      >
        <NavProvider>
          <Nav />
          {children}
        </NavProvider>
      </body>
    </html>
  );
}
