import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="noise-overlay min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
