import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

// এখান থেকে metadata set করতে হয় তাহলে মূল html page এগুলো গিয়ে যোগ হবে।
export const metadata = {
  title: "Home | Next Core",
  description: "Super powerful next website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
