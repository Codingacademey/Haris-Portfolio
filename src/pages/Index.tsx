import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { Button } from "@/components/ui/button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { TimelineDemo } from "@/components/ui/timeline-demo";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";
import TechStack from "@/components/ui/tech-stack";
import { RadialOrbitalTimelineDemo } from "@/components/ui/radial-orbital-timeline-demo";
import { TestimonialsDemo } from "@/components/ui/testimonials-demo";
import { ContactForm } from "@/components/ui/contact-form";
import { useRef } from "react";

const Index = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="min-h-screen bg-black p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <Card className="w-full min-h-[600px] bg-black relative overflow-hidden border-white/10">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            
            <div className="flex flex-col md:flex-row h-full min-h-[600px]">
              {/* Left content */}
              <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/60 leading-tight mb-6 font-sans">
                  Crafting Intelligent Futures with AI &{" "}
                  <AnimatedTextCycle 
                    words={[
                      "Machine Learning",
                      "Deep Learning", 
                      "Data Analysis",
                      "OpenCV"
                    ]}
                    interval={3000}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 leading-tight"
                  />
                </h1>
                <TextShimmer
                  duration={1.5}
                  className='text-lg md:text-xl max-w-xl leading-relaxed [--base-color:theme(colors.neutral.300)] [--base-gradient-color:theme(colors.blue.400)] dark:[--base-color:theme(colors.neutral.300)] dark:[--base-gradient-color:theme(colors.blue.400)]'
                >
                  Hi, I'm Haris — an AI/ML Developer focused on creating data-driven applications, predictive models, and intelligent systems.
                </TextShimmer>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button 
                    variant="glow" 
                    size="lg"
                    className="text-base font-semibold"
                    onClick={scrollToProjects}
                  >
                    View My Projects
                  </Button>
                  <RainbowButton 
                    className="text-base font-semibold"
                    onClick={scrollToContact}
                  >
                    Contact Me
                  </RainbowButton>
                </div>
              </div>

              {/* Right content */}
              <div className="flex-1 relative min-h-[300px] md:min-h-0">
                <SplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* About Section with Scroll Animation */}
      <div id="about" ref={aboutRef} className="flex flex-col overflow-hidden pb-[100px] pt-[100px] bg-black">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-white">
                Discover the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-white">
                  AI & Machine Learning
                </span>
              </h1>
            </>
          }
        >
          <img
            src="/MuhammadHarisResume_page-0001.jpg"
            alt="Muhammad Haris Resume"
            className="mx-auto rounded-2xl object-cover h-full object-left-top w-full"
            draggable={false}
          />
        </ContainerScroll>
      </div>

      {/* Timeline Section */}
      <TimelineDemo />


      {/* AI/ML Projects Showcase with Glowing Effect */}
      <div id="projects" ref={projectsRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              AI & Machine Learning Projects
            </h2>
            <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
              Explore my portfolio of intelligent solutions - hover over the cards to see the interactive glowing effect
            </p>
          </div>
          <GlowingEffectDemo />
        </div>
      </div>

      {/* Tech Stack Section */}
      <TechStack />

      {/* AI/ML Development Lifecycle Timeline */}
      <RadialOrbitalTimelineDemo />

      {/* AI/ML Success Stories Testimonials */}
      <TestimonialsDemo />

      {/* Contact Form Section */}
      <div ref={contactRef}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
