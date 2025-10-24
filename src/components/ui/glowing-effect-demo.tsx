"use client";

import { Brain, Cpu, Database, Eye, Sparkles, Zap, Github, ExternalLink, ArrowRight, User, Image, MessageCircle, Film, GraduationCap } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[40rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Brain className="h-5 w-5" />}
        title="MBTI Personality Predictor"
        description="🧠 AI-powered web app that predicts users' MBTI personality type from text input using NLP and machine learning. Built with Python, Streamlit, and Scikit-learn for accurate personality classification."
        githubUrl="https://github.com/Codingacademey/MBTI-Personality-Predictor"
        liveUrl="https://personality-predictor1.streamlit.app"
      />
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Image className="h-5 w-5" />}
        title="Image Compressor"
        description="🖼️ Smart image compression tool that reduces file size while keeping high quality. Built with Streamlit and Pillow (PIL) for quick, browser-based optimization."
        githubUrl="https://github.com/Codingacademey/Image_Compressor"
        liveUrl="https://imagecompres.streamlit.app"
      />
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<MessageCircle className="h-5 w-5" />}
        title="WhatsApp Chat Analysis"
        description="💬 Interactive analytics dashboard for WhatsApp chats. Generates insights like message frequency, top users, and sentiment trends using Pandas, Matplotlib, and Streamlit."
        githubUrl="https://github.com/Codingacademey/Whatsapp_chat_analysis"
        liveUrl="https://whatsappchatanaylsis.streamlit.app"
      />
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Film className="h-5 w-5" />}
        title="Movie Recommendation System"
        description="🎬 Personalized movie recommender using cosine similarity and content-based filtering. Suggests similar movies dynamically through an interactive Streamlit interface."
        githubUrl="https://github.com/Codingacademey/MOVIE_RECOMMENDER_MODEL"
        liveUrl=""
      />
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<GraduationCap className="h-5 w-5" />}
        title="Student Report Model"
        description="📊 Automated report generator that analyzes student data and predicts performance using regression models. Developed with Python, Pandas, and Streamlit for clean, visual reports."
        githubUrl="https://github.com/Codingacademey/Student_report_model"
        liveUrl="https://studentreportmodel-m2mpv9zdlhdt7kqkpmbvv7.streamlit.app"
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  githubUrl?: string;
  liveUrl?: string;
}

const GridItem = ({ area, icon, title, description, githubUrl, liveUrl }: GridItemProps) => {
  return (
    <li className={cn("min-h-[20.5rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black p-6 shadow-sm md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            <div className="flex items-start justify-between">
              <div className="w-fit rounded-lg border-[0.75px] border-white/20 bg-white/5 p-3">
                <div className="text-white">
                  {icon}
                </div>
              </div>
              <div className="flex gap-2">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-lg border-[0.75px] border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <Github className="h-4 w-4 text-white" />
                  </a>
                )}
                {liveUrl && liveUrl !== "" && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-lg border-[0.75px] border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 text-white" />
                  </a>
                )}
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-neutral-300">
                {description}
              </h2>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-4 flex gap-3">
            {liveUrl && liveUrl !== "" && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 flex-1 px-4 py-3 rounded-lg border-[0.75px] border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200 text-white font-medium text-sm"
              >
                <span>View Project</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-[0.75px] border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all duration-200 text-white font-medium text-sm ${!liveUrl || liveUrl === "" ? 'flex-1' : 'flex-1'}`}
              >
                <Github className="h-4 w-4" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
