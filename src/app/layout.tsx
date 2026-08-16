import type { Metadata } from "next";
import { Poppins, Inter, Orbitron } from "next/font/google";
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

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "High Rise Approvals | Airport Height Clearance & Aviation NOC Consultancy",
  description: "India's trusted aviation clearance consultants. End-to-end assistance for Airport Height Clearance NOCs from AAI & IAF, WGS-84 surveys, aeronautical studies, and obstacle evaluations.",
  keywords: "Airport NOC, Airport Height Clearance, AAI NOC, IAF NOC, Aviation Survey, WGS-84 Survey, Aeronautical Study, Obstacle Limitation Surface, CNS Assessment, High Rise Approvals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} ${orbitron.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-gray-900 bg-slate-50 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
