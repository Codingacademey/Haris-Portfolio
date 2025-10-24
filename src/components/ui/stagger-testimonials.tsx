"use client"

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "The AI model accuracy improved by 40% after implementing our ML pipeline. Game-changing results!",
    by: "Dr. Sarah Chen, AI Research Lead at TechVision",
    imgSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 1,
    testimonial: "Our deep learning models now process 10x more data in real-time. The performance is incredible!",
    by: "Marcus Rodriguez, ML Engineer at DataFlow",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 2,
    testimonial: "The computer vision system reduced false positives by 85%. Our quality control is now automated!",
    by: "Dr. Emily Watson, Computer Vision Specialist at AutoTech",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 3,
    testimonial: "Natural language processing capabilities transformed our customer support. 90% faster response times!",
    by: "James Liu, NLP Engineer at CustomerAI",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 4,
    testimonial: "The reinforcement learning algorithm optimized our trading strategies. ROI increased by 300%!",
    by: "Alex Thompson, Quantitative Analyst at FinTechAI",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 5,
    testimonial: "Our recommendation engine boosted user engagement by 250%. The personalization is spot-on!",
    by: "Maria Garcia, Data Scientist at RecommendAI",
    imgSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 6,
    testimonial: "The neural network architecture reduced training time by 60% while improving accuracy. Brilliant work!",
    by: "Dr. Robert Kim, AI Architect at NeuralNet",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 7,
    testimonial: "Predictive analytics saved us millions in operational costs. The forecasting is incredibly accurate!",
    by: "Lisa Park, Analytics Director at PredictAI",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 8,
    testimonial: "The transformer model revolutionized our language understanding. Breakthrough performance!",
    by: "Dr. Ahmed Hassan, Research Scientist at LanguageAI",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 9,
    testimonial: "Computer vision automation reduced manual inspection by 95%. The precision is remarkable!",
    by: "Jennifer Lee, Quality Assurance Lead at VisionTech",
    imgSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 10,
    testimonial: "The GAN model generated synthetic data that improved our model training. Innovative approach!",
    by: "David Wilson, ML Research Engineer at GenAI",
    imgSrc: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 11,
    testimonial: "Federated learning preserved data privacy while achieving 99% model accuracy. Perfect solution!",
    by: "Dr. Priya Patel, Privacy Engineer at SecureAI",
    imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 12,
    testimonial: "The ensemble methods combined multiple models for unprecedented accuracy. Outstanding results!",
    by: "Michael Brown, Senior ML Engineer at EnsembleAI",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 13,
    testimonial: "Time series forecasting predicted market trends with 92% accuracy. Game-changing insights!",
    by: "Rachel Green, Time Series Analyst at ForecastAI",
    imgSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 14,
    testimonial: "The attention mechanism improved model interpretability by 80%. Finally, explainable AI!",
    by: "Dr. Kevin Zhang, Explainable AI Researcher at InterpretAI",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 15,
    testimonial: "Transfer learning reduced our data requirements by 70% while maintaining performance. Efficient!",
    by: "Amanda Taylor, Transfer Learning Specialist at EfficientAI",
    imgSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 16,
    testimonial: "The autoencoder compressed our data by 90% without losing critical information. Revolutionary!",
    by: "Dr. Carlos Mendez, Compression Expert at CompactAI",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 17,
    testimonial: "Graph neural networks captured complex relationships in our data. Breakthrough architecture!",
    by: "Sophie Anderson, Graph ML Engineer at NetworkAI",
    imgSrc: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 18,
    testimonial: "The reinforcement learning agent optimized our resource allocation. 200% efficiency gain!",
    by: "Dr. Thomas White, RL Researcher at OptimizeAI",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    tempId: 19,
    testimonial: "Multi-modal learning combined vision and text for superior understanding. Cutting-edge technology!",
    by: "Dr. Elena Rodriguez, Multimodal AI Lead at FusionAI",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white border-blue-500" 
          : "z-0 bg-black/80 text-white border-white/20 hover:border-blue-400/50 backdrop-blur-sm"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.8) * position}px)
          translateY(${isCenter ? -50 : position % 2 ? 10 : -10}px)
          rotate(${isCenter ? 0 : position % 2 ? 1.5 : -1.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-border"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 bg-muted object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))"
        }}
      />
      <h3 className={cn(
        "text-base sm:text-xl font-medium",
        isCenter ? "text-white" : "text-white"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
        isCenter ? "text-white/80" : "text-gray-300"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      const { matches: lgMatches } = window.matchMedia("(min-width: 1024px)");
      if (lgMatches) {
        setCardSize(400);
      } else if (matches) {
        setCardSize(350);
      } else {
        setCardSize(300);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-black/50 rounded-lg"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
    </div>
  );
};
