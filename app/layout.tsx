import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Best North Indian Pandit in Thiruvananthapuram & Kochi | Acharya Vikash Pandey",
  description:
    "Book verified North Indian Hindi Pandit in Thiruvananthapuram and Kochi for Griha Pravesh, Satyanarayan Katha, Vivah, Rudrabhishek, and all authentic Hindu rituals.",
  keywords: [
    "North Indian Pandit in Kerala",
    "Hindi Pandit in Thiruvananthapuram",
    "Hindi Pandit in Kochi",
    "Griha Pravesh Puja Kerala",
    "Satyanarayan Katha Kochi",
    "Marriage Pandit Trivandrum",
    "Rudrabhishek Kerala",
    "Vastu Shanti Pandit",
    "Acharya Vikash Pandey",
  ],
  metadataBase: new URL("https://www.vedichindipanditinkerala.com"),
  alternates: {
    canonical: "https://www.vedichindipanditinkerala.com",
  },
  openGraph: {
    title: "Best North Indian Pandit in Thiruvananthapuram & Kochi | Acharya Vikash Pandey",
    description:
      "Book verified North Indian Vedic Pandits for authentic Pujas, Havans, and Sanskars in Thiruvananthapuram & Kochi.",
    url: "https://www.vedichindipanditinkerala.com",
    siteName: "Acharya Vikash Pandey",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-amber-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}