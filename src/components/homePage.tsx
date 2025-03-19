import Navbar from "@/components/section/navbarSection";
import Hero from "@/components/section/heroSection";
import WhySection from "@/components/section/whySection";
import VisiMisiSection from "./section/visiMisiSection";
import ProfileSection from "@/components/section/profileSection";
import ExtraSection from "@/components/section/extracurricularSection";
import NewsSection from "@/components/section/newsSection";
import AlumniSection from "@/components/section/alumniSection";
import FooterSection from "@/components/section/footerSection";
import LocationSection from "./section/locationSection";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero id="beranda" />
      <VisiMisiSection id="tentangKami" />
      <WhySection />
      <ProfileSection id="profil" />
      <ExtraSection id="ekstrakurikuler" />
      <NewsSection id="berita" />
      {/* <AlumniSection id="alumni" /> */}
      <LocationSection id="lokasi" />
      <div className="mt-auto">
        <FooterSection />
      </div>
    </div>
  );
}
