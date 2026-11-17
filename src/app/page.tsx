import SplashScreen from "@/components/SplashScreen";
import PetalField from "@/components/PetalField";
import MusicPlayer from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import InviteSection from "@/components/InviteSection";
import Countdown from "@/components/Countdown";
import Family from "@/components/Family";
import OurStory from "@/components/OurStory";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import MapSection from "@/components/MapSection";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <SplashScreen />
      <PetalField />
      <MusicPlayer />
      <Hero />
      <InviteSection />
      <Countdown />
      <Family />
      <OurStory />
      <Events />
      <Gallery />
      <MapSection />
      <JoinUs />
      <Footer />
    </main>
  );
}
