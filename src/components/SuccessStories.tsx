import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy, TrendingUp, Shield } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const stories = [
  {
    icon: Trophy,
    title: "Landmark Real Estate Arbitration Win",
    category: "Real Estate Law",
    description: "Successfully represented a major developer in a complex multi-million dollar property dispute, securing favorable arbitration award.",
    outcome: "AED 45M recovered"
  },
  {
    icon: TrendingUp,
    title: "Major Corporate Restructuring",
    category: "Corporate Law",
    description: "Guided Fortune 500 company through complex merger and acquisition in UAE, ensuring regulatory compliance and optimal structure.",
    outcome: "$120M transaction value"
  },
  {
    icon: Shield,
    title: "High-Profile Litigation Victory",
    category: "Litigation",
    description: "Defended client in landmark commercial dispute at DIFC Courts, setting precedent for contract interpretation in the region.",
    outcome: "100% claims dismissed"
  },
  {
    icon: Trophy,
    title: "Strategic Debt Recovery Success",
    category: "Debt Collection",
    description: "Recovered substantial outstanding debts for international client through innovative legal strategy and negotiation.",
    outcome: "95% debt recovered"
  }
];

const SuccessStories = () => {
  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.03) 10px, rgba(255,255,255,.03) 20px)`
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Notable Achievements
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A track record of excellence in delivering favorable outcomes for our clients across diverse legal matters.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {stories.map((story, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-2"
                >
                  <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors h-full backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/20">
                        <story.icon className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                        {story.category}
                      </p>
                      <h3 className="font-playfair text-xl font-bold mb-3">
                        {story.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-4 text-sm">
                        {story.description}
                      </p>
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-primary font-bold">{story.outcome}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white border-white/30 hover:bg-white/10" />
          <CarouselNext className="text-white border-white/30 hover:bg-white/10" />
        </Carousel>
      </div>
    </section>
  );
};

export default SuccessStories;
