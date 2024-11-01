import ClientClerkProvider from "@/components/ClientClerkProvider"; // Update path as needed

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Zcrum",
  description: "Project Management App",
};

export default function RootLayout({ children }) {
  return (
    <ClientClerkProvider>
      <html lang="en">
        <body className={`${inter.className} animated-dotted-background`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors/>
            <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with ❤️ by Kaushik</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClientClerkProvider>
  );
}
