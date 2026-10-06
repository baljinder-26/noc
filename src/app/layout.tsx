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
  title: "Aviation Height Clearance Consultant India | High Rise Approvals",
  description: "Get expert aviation height clearance and building height NOC consultancy across India. Assistance with AAI, IAF, WGS-84 surveys, NOCAS and aviation approvals.",
  keywords: "Airport NOC, Airport Height Clearance, AAI NOC, IAF NOC, Aviation Survey, WGS-84 Survey, Aeronautical Study, Obstacle Limitation Surface, CNS Assessment, High Rise Approvals",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "High Rise Approvals",
  url: "https://www.highriseapprovals.in/",
  description:
    "Aviation clearance and airport height clearance consultancy services across India.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <html lang="en" className={`${poppins.variable} ${inter.variable} ${orbitron.variable} scroll-smooth`}>
    <head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </head>

    <body className="font-sans antialiased text-gray-900 bg-slate-50 min-h-screen flex flex-col">
      {children}
    </body>
  </html>
);
}
