import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import "./globals.css";
import HeartsModal from "@/components/modals/heart-modal";

const font = Nunito({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#22C55E",
};

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL}`),
  title: {
    default: "LEAF by KMaar",
    template: "%s - LEAF by KMaar",
  },
  description:
    "Dive into the world of languages with Leaf. Master new languages, enhance your skills, and unfold your potential. Start your linguistic journey with Leaf today!",
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "w3roI87t-dIyKe7ReAdSWUVpWCe7K1pP_EXUidsZ3xI",
    me: "KMaar",
  },
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "Abhishek Kumar",
    "KMaar",
    "LEAF",
    "KMaar Miscellaneous Studio",
    "duolingo-clone",
    "learn-language",
    "shadcn",
    "shadcn-ui",
    "radix-ui",
    "cn",
    "clsx",
    "lingo",
    "postgresql",
    "sonner",
    "drizzle",
    "zustand",
    "mysql",
    "lucide-react",
    "next-themes",
    "clerk-themes",
    "clerk",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ],
  authors: {
    name: "Abhishek Kumar",
    url: "https://kmaar.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "/favicon.ico",
        },
        variables: {
          colorPrimary: "#22C55E",
        },
      }}
    >
      <html lang="en">
        <body className={font.className}>
          <Toaster theme="light" richColors closeButton />
          <ExitModal />
          <HeartsModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
