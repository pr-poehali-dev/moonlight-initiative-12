import SwissHero from "@/components/SwissHero";
import SwissContrasts from "@/components/SwissContrasts";
import SwissFacts from "@/components/SwissFacts";
import SwissLanguages from "@/components/SwissLanguages";
import SwissTimeline from "@/components/SwissTimeline";
import SwissFooter from "@/components/SwissFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-black">
      <SwissHero />
      <SwissContrasts />
      <SwissFacts />
      <SwissLanguages />
      <SwissTimeline />
      <SwissFooter />
    </main>
  );
};

export default Index;
