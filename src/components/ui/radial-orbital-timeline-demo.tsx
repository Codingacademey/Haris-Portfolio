"use client";

import { Brain, Database, Cpu, BarChart3, Zap, FileText, TestTube, Rocket, Eye, Target } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { DatabaseWithRestApiDemo } from "@/components/ui/database-with-rest-api-demo";

const timelineData = [
  {
    id: 1,
    title: "Data Collection",
    date: "Jan 2024",
    content: "Gathering and collecting raw data from various sources including APIs, databases, and external datasets. This phase involves data discovery, acquisition, and initial quality assessment.",
    category: "Data",
    icon: Database,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Data Preprocessing",
    date: "Feb 2024",
    content: "Cleaning, transforming, and preparing data for analysis. Includes handling missing values, outliers, data normalization, and feature engineering.",
    category: "Data",
    icon: FileText,
    relatedIds: [1, 3, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Exploratory Analysis",
    date: "Mar 2024",
    content: "Understanding data patterns, distributions, and relationships through statistical analysis and visualization. Identifying trends and potential insights.",
    category: "Analysis",
    icon: Eye,
    relatedIds: [1, 2, 4],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Model Development",
    date: "Apr 2024",
    content: "Building and training machine learning models using various algorithms. Experimenting with different approaches and hyperparameter tuning.",
    category: "Development",
    icon: Brain,
    relatedIds: [2, 3, 5, 6],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 5,
    title: "Model Training",
    date: "May 2024",
    content: "Training models on prepared datasets, implementing cross-validation, and optimizing performance metrics. Using GPU acceleration for deep learning models.",
    category: "Training",
    icon: Cpu,
    relatedIds: [4, 6, 7],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 6,
    title: "Model Evaluation",
    date: "Jun 2024",
    content: "Testing model performance using validation datasets, calculating metrics like accuracy, precision, recall, and F1-score. Comparing different model approaches.",
    category: "Evaluation",
    icon: BarChart3,
    relatedIds: [4, 5, 7, 8],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 7,
    title: "Model Testing",
    date: "Jul 2024",
    content: "Comprehensive testing with real-world data scenarios, stress testing, and edge case validation. Ensuring model robustness and reliability.",
    category: "Testing",
    icon: TestTube,
    relatedIds: [5, 6, 8],
    status: "pending" as const,
    energy: 25,
  },
  {
    id: 8,
    title: "Model Deployment",
    date: "Aug 2024",
    content: "Deploying the trained model to production environment, setting up monitoring systems, and ensuring scalability and performance in real-world conditions.",
    category: "Deployment",
    icon: Rocket,
    relatedIds: [6, 7, 9],
    status: "pending" as const,
    energy: 15,
  },
  {
    id: 9,
    title: "Monitoring & Optimization",
    date: "Sep 2024",
    content: "Continuous monitoring of model performance, data drift detection, and model retraining. Optimizing for better accuracy and efficiency over time.",
    category: "Optimization",
    icon: Target,
    relatedIds: [8],
    status: "pending" as const,
    energy: 10,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            AI/ML Development Lifecycle
          </h2>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Interactive orbital timeline showcasing the complete machine learning development process from data collection to deployment
          </p>
        </div>
        
        {/* Layout with Database component on left and Timeline on right */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Database Component - Left Side */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <DatabaseWithRestApiDemo />
          </div>
          
          {/* Orbital Timeline - Right Side */}
          <div className="w-full lg:w-2/3">
            <RadialOrbitalTimeline timelineData={timelineData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadialOrbitalTimelineDemo;
