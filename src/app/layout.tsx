import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "High Rise Approvals | Airport Height Clearance & Helipad NOC Consultancy",
  description: "India's trusted aviation clearance consultants. End-to-end assistance for Airport Height Clearance NOCs from AAI & IAF, WGS-84 surveys, aeronautical studies, and DGCA helipad approvals.",
  keywords: "Airport NOC, Airport Height Clearance, AAI NOC, IAF NOC, DGCA Helipad Approval, Rooftop Helipad, Aviation Survey, WGS-84 Survey, Aeronautical Study, Obstacle Limitation Surface, CNS Assessment, High Rise Approvals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-gray-900 bg-slate-50 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
