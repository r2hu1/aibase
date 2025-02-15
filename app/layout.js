import Header from "@/components/page/header";
import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "AiBase",
  description: "AiBase helps you discover AI tools like chatbots, image generators, and more—all in one place.",
};

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
          <Header/>
        {children}
      </body>
    </html>
  );
}
