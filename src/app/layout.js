// import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/services/AuthProvider";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

// এখান থেকে metadata set করতে হয় তাহলে মূল html page এগুলো গিয়ে যোগ হবে।
export const metadata = {
  title: {
    default: "Next Core", // যদি কোনো পেজে title না থাকে তাহলে default title show করবে।
    template: "%s | Next Core", //%s এর এইখানে dynamic আকারে অন্য পেজের title বসে যাবে।
  },
  description: "Super powerful next website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={roboto.className}>
          <div>
            <Navbar />
          </div>
          <div>{children}</div>
        </body>
      </AuthProvider>
    </html>
  );
}
