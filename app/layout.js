export const metadata = {
  title: "Quote BookStore | Sənin Rəqəmsal Kitab Rəfin",
  description: "Quote BookStore - Sənin Növbəti Dünyanı Kəşf Et.. Minlərlə kitab, fərqli janrlar və dinamik axtarış imkanı ilə arzuladığın kitab mağazası ",
}

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import "@/app/globals.css";
export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className="flex bg-black flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

