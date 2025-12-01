import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lock, MapPin, Phone, Mail } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={patternBg} alt="" className="w-full h-full object-cover opacity-5" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lock className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Encrypted & Confidential</span>
          </div>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Schedule Your Consultation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take the first step towards resolving your legal matters. Our team is ready to provide expert guidance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-border/50">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Full Name *</label>
                      <Input placeholder="John Smith" className="bg-muted/30" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email Address *</label>
                      <Input type="email" placeholder="john@example.com" className="bg-muted/30" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Phone Number *</label>
                      <Input type="tel" placeholder="+971 XX XXX XXXX" className="bg-muted/30" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Practice Area</label>
                      <Input placeholder="e.g., Corporate Law" className="bg-muted/30" />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                    <Textarea 
                      placeholder="Please provide a brief description of your legal matter..." 
                      className="min-h-[150px] bg-muted/30"
                    />
                  </div>

                  <div className="flex items-start gap-2 text-xs text-muted-foreground">
                    <Lock className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <p>Your information is protected with bank-level encryption and will be handled with absolute confidentiality.</p>
                  </div>

                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Schedule Confidential Consultation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Office Address</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Level 25, Emirates Towers<br />
                      Sheikh Zayed Road<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                    <p className="text-sm text-muted-foreground">+971 4 XXX XXXX</p>
                    <p className="text-xs text-muted-foreground mt-1">Mon-Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-sm text-muted-foreground">info@4llawfirm.ae</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
