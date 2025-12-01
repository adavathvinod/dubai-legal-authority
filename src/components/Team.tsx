import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Award, Mail } from "lucide-react";

const lawyers = [
  {
    name: "James Anderson",
    role: "Senior Partner",
    specialty: "Corporate Law & M&A",
    credentials: ["Barrister", "Admitted to UAE Bar", "LLM Harvard"],
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop"
  },
  {
    name: "Sarah Mitchell",
    role: "Partner",
    specialty: "Litigation & Arbitration",
    credentials: ["Barrister", "DIFC Courts Certified", "Chartered Arbitrator"],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
  },
  {
    name: "Michael Chen",
    role: "Partner",
    specialty: "Real Estate & Construction",
    credentials: ["Solicitor", "Admitted to UAE Bar", "RICS Member"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
  },
  {
    name: "Emma Richardson",
    role: "Associate Partner",
    specialty: "Family Law & Private Client",
    credentials: ["Barrister", "Mediator Certified", "LLB Cambridge"],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Legal Experts</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced legal professionals with proven expertise across diverse practice areas, committed to delivering exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lawyers.map((lawyer, index) => (
            <motion.div
              key={lawyer.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group">
                <div className="aspect-square overflow-hidden bg-muted">
                  <img 
                    src={lawyer.image} 
                    alt={lawyer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-foreground mb-1">
                    {lawyer.name}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-2">{lawyer.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{lawyer.specialty}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {lawyer.credentials.map((cred) => (
                      <Badge key={cred} variant="secondary" className="text-xs">
                        {cred}
                      </Badge>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors">
                    <Mail className="h-4 w-4" />
                    Contact
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
