import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/providers/AuthProvider";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Nunito_Sans, Quicksand, Amatic_SC } from "next/font/google";

export const metadata: Metadata = {
  title: "Ava GPT"
}

const nunito = Nunito_Sans({ subsets: ['latin'], display: "swap", variable: "--font-nunito" })
const quicksand = Quicksand({ subsets: ['latin'], display: "swap", variable: "--font-quicksand" })
const amatic = Amatic_SC({ subsets: ['latin'], weight: ["400", "700"], display: "swap", variable: "--font-amatic" })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={cn(nunito.variable, quicksand.variable, amatic.variable)}>
        <Toaster />
        <AuthProvider>
          <div className="font-quicksand">
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
