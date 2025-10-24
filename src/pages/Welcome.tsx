import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { ArrowRight } from "lucide-react";

const Welcome = () => {
  const navigate = useNavigate();

  const handleDiscoverClick = () => {
    console.log("Discover Excellence button clicked!");
    navigate("/hero");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-50">
        <BackgroundPaths title="Welcome to the Future" />
      </div>

      {/* Button positioned below the header */}
      <div className="relative z-20 container mx-auto px-4 text-center pt-96">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="max-w-2xl mx-auto flex flex-col items-center justify-center"
        >
          <Button 
            variant="glass" 
            size="lg"
            className="text-lg font-semibold px-8 py-6 h-auto rounded-full group hover:scale-105 transition-transform duration-300"
            onClick={handleDiscoverClick}
          >
            Discover Excellence
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Welcome;
