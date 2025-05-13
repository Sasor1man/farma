// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./styles/header/style.css";
import "./styles/footer/style.css";
import Header from "./components/header";
import Center from "./components/center";
import Footer from "./components/footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
//   weight: "400",
// });

const stolzlFont = localFont({
  src: "./fonts/Stolzl/stolzl_light.otf",
  // display: "swap",
  // variable: "--font-stolzl",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${stolzlFont.className}`}>
        <Center>
          <Header />
          {children}
          <Footer />
        </Center>
      </body>
    </html>
  );
}
