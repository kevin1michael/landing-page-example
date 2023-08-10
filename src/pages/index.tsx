import Image from "next/image";
import HeroSection from "./../components/HeroSection";
import Testimonial from "./../components/Testimonial";
import FooterTwo from "./../components/FooterTwo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Testimonial />
      <FooterTwo />
    </main>
  );
}
