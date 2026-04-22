import "./globals.css";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
