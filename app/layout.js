import "./globals.css";
import Navbar from "@/components/Navbar";
import ContactPage from "@/components/Contact";
import MobileCTA from "@/components/MobileCTA";
import CTAButton from "@/components/CTAButton";

export const metadata = {
  title: "Shilpkaar | Factory-Finished Furniture",
  description: "Premium modular furniture crafted with precision.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
         {/* <CTAButton mode="floating" /> */}
<MobileCTA /> 
        <ContactPage/>
      </body>
    </html>
  );
}
