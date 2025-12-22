import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Ayan Mukherjee | Portfolio",
  description: "Personal portfolio of Ayan Mukherjee - Creative Technologist & Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-bg text-text antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
