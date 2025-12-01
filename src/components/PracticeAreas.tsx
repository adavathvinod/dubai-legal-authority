import { Building2, Scale, Hammer, Home, DollarSign, Heart, FileText, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const practiceAreas = [
  {
    icon: Building2,
    title: "Corporate Law",
    description: "Comprehensive corporate legal services, mergers, acquisitions, and business structuring."
  },
  {
    icon: Scale,
    title: "Litigation",
    description: "Expert representation in complex civil and commercial disputes across all courts."
  },
  {
    icon: Hammer,
    title: "Arbitration",
    description: "International and domestic arbitration services with proven track record."
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Property transactions, leasing, development, and real estate dispute resolution."
  },
  {
    icon: DollarSign,
    title: "Debt Collection",
    description: "Strategic debt recovery services with emphasis on efficient resolution."
  },
  {
    icon: Heart,
    title: "Family Law",
    description: "Sensitive handling of family matters, divorce, custody, and inheritance."
  },
  {
    icon: FileText,
    title: "Contract Law",
    description: "Drafting, reviewing, and negotiating complex commercial contracts."
  },
  {
    icon: Users,
    title: "Employment Law",
    description: "Comprehensive employment and labor law advisory and representation."
  }
];

const PracticeAreas = () => {
  return (
    <section id="practice-areas" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Practice Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive legal expertise across multiple disciplines, tailored to meet the unique needs of our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
