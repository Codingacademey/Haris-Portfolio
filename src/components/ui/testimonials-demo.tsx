import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";

const TestimonialsDemo = () => {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-purple-400 mb-4">
            AI/ML Success Stories
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hear from industry experts about their breakthrough achievements with AI and Machine Learning
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <StaggerTestimonials />
          </div>
        </div>
      </div>
    </div>
  );
};

export { TestimonialsDemo };
