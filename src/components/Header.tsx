import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-playfair font-bold text-primary">4L</h1>
            <span className="text-sm font-medium text-muted-foreground">Law Firm</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
            <a href="#practice-areas" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Practice Areas</a>
            <a href="#team" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Our Team</a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          <Button variant="secondary" size="sm" className="gap-2">
            <Lock className="h-4 w-4" />
            <span className="hidden sm:inline">Client Login</span>
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
