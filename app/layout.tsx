import type { Metadata } from "next";
import { Gowun_Batang, IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { CartProvider } from "@/components/cart/cart-context";
import { DebugGrid } from "@/components/debug-grid";
import { isDevelopment } from "@/lib/constants";
import { getCollections } from "@/lib/shopify";
import { Header } from "../components/layout/header";
import dynamic from "next/dynamic";
import { V0Provider } from "../lib/context";
import { cn } from "../lib/utils";

const V0Setup = dynamic(() => import("@/components/v0-setup"));

const isV0 = process.env["VERCEL_URL"]?.includes("vusercontent.net") ?? false;

const ibmPlexSansKr = IBM_Plex_Sans_KR({
  variable: "--font-ibm-plex-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const gowunBatang = Gowun_Batang({
  variable: "--font-gowun-batang",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daeyoung-wallpaper.co.kr"),
  title: "대영벽지",
  description: "대영벽지 도배, 장판, 마루, 데코타일 견적 및 시공 안내",
  generator: "v0.app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const collections = await getCollections();

  return (
    <html lang="ko">
      <body
        className={cn(
          ibmPlexSansKr.variable,
          gowunBatang.variable,
          "antialiased min-h-screen",
          { "is-v0": isV0 },
        )}
        suppressHydrationWarning
      >
        <V0Provider isV0={isV0}>
          <CartProvider>
            <NuqsAdapter>
              <main data-vaul-drawer-wrapper="true">
                <Header collections={collections} />
                {children}
              </main>
              {isDevelopment && <DebugGrid />}
              <Toaster closeButton position="bottom-right" />
            </NuqsAdapter>
          </CartProvider>
          {isV0 && <V0Setup />}
        </V0Provider>
      </body>
    </html>
  );
}
