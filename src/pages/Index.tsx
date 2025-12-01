import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import Team from "@/components/Team";
import SuccessStories from "@/components/SuccessStories";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PracticeAreas />
      <Team />
      <SuccessStories />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
