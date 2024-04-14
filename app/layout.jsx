import { GeistSans } from "geist/font/sans";
import "./globals.css";

import { BookingProvider } from "../components/context/booking/BookingContext";
import { UserProvider } from "../components/context/User/UserContext";
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <script
            async
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwms3bNDq_WinjQiQde_JVi6SekPeeCUM&loading=async&libraries=places&callback=initMap"
          ></script>
          <UserProvider>
            <BookingProvider> {children}</BookingProvider>
          </UserProvider>
        </main>
      </body>
    </html>
  );
}
