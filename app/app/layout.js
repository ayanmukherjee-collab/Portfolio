import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Ayan Mukherjee | Portfolio",
  description: "Personal portfolio of Ayan Mukherjee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
