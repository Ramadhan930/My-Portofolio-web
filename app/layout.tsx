import CustomCursor from "@/components/CustomCursor";
import "./globals.css";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        <SmoothScroll />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
