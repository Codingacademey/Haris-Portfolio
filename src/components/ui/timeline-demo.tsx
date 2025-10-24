import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Current year - Continuing growth and innovation in AI/ML
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-lg border backdrop-blur-sm" style={{background: 'linear-gradient(135deg, #4A90E225, #4A90E215)', borderColor: '#4A90E250'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">Advanced AI Research</h4>
              <p className="text-sm text-neutral-300">
                Exploring cutting-edge AI technologies including large language models, 
                multimodal AI systems, and next-generation neural architectures.
              </p>
            </div>
            <div className="p-6 rounded-lg border backdrop-blur-sm" style={{background: 'linear-gradient(135deg, #4A90E220, #4A90E210)', borderColor: '#4A90E240'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">Industry Applications</h4>
              <p className="text-sm text-neutral-300">
                Developing AI solutions for real-world problems, focusing on 
                scalability, efficiency, and ethical AI implementation.
              </p>
            </div>
            <div className="p-6 rounded-lg border backdrop-blur-sm" style={{background: 'linear-gradient(135deg, #4A90E230, #4A90E220)', borderColor: '#4A90E260'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">Leadership & Mentoring</h4>
              <p className="text-sm text-neutral-300">
                Leading AI/ML initiatives, mentoring junior developers, 
                and contributing to open-source AI projects and communities.
              </p>
            </div>
            <div className="p-6 rounded-lg border backdrop-blur-sm" style={{background: 'linear-gradient(135deg, #4A90E215, #4A90E205)', borderColor: '#4A90E230'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">Future Technologies</h4>
              <p className="text-sm text-neutral-300">
                Staying ahead of emerging trends in AI, exploring quantum computing 
                applications, and preparing for the next wave of technological innovation.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Advanced AI/ML projects and portfolio development
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-lg border backdrop-blur-sm" style={{background: 'linear-gradient(135deg, #4A90E220, #4A90E210)', borderColor: '#4A90E240'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">Computer Vision Projects</h4>
              <p className="text-sm text-neutral-300">
                Built real-time object detection systems using OpenCV and YOLO, 
                implemented facial recognition applications with 95% accuracy.
              </p>
            </div>
            <div className="p-6 rounded-lg border backdrop-blur-sm" style={{background: 'linear-gradient(135deg, #4A90E215, #4A90E205)', borderColor: '#4A90E230'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">Deep Learning Models</h4>
              <p className="text-sm text-neutral-300">
                Developed CNN architectures for image classification, 
                created LSTM models for time series prediction and NLP tasks.
              </p>
            </div>
            <div className="p-6 rounded-lg border backdrop-blur-sm" style={{background: 'linear-gradient(135deg, #4A90E225, #4A90E215)', borderColor: '#4A90E250'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">Data Analysis & Visualization</h4>
              <p className="text-sm text-neutral-300">
                Performed comprehensive data analysis using pandas, numpy, 
                and created interactive dashboards with Streamlit and Gradio.
              </p>
            </div>
            <div className="p-6 rounded-lg border backdrop-blur-sm" style={{background: 'linear-gradient(135deg, #4A90E230, #4A90E220)', borderColor: '#4A90E260'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">MLOps & Deployment</h4>
              <p className="text-sm text-neutral-300">
                Deployed models using Docker, Kubernetes, and cloud platforms. 
                Implemented CI/CD pipelines for ML model versioning and monitoring.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Deep dive into machine learning fundamentals and practical applications
          </p>
          <div className="space-y-4">
            <div className="p-6 rounded-lg border-l-4" style={{background: 'linear-gradient(90deg, #4A90E220, #4A90E210)', borderLeftColor: '#4A90E2'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">Machine Learning Mastery</h4>
              <p className="text-sm text-neutral-300">
                Mastered supervised and unsupervised learning algorithms, 
                implemented regression, classification, and clustering models.
              </p>
            </div>
            <div className="p-6 rounded-lg border-l-4" style={{background: 'linear-gradient(90deg, #4A90E215, #4A90E205)', borderLeftColor: '#4A90E2'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">Python & Libraries</h4>
              <p className="text-sm text-neutral-300">
                Advanced proficiency in scikit-learn, TensorFlow, PyTorch, 
                pandas, numpy, and matplotlib for data science workflows.
              </p>
            </div>
            <div className="p-6 rounded-lg border-l-4" style={{background: 'linear-gradient(90deg, #4A90E225, #4A90E215)', borderLeftColor: '#4A90E2'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">Real-world Projects</h4>
              <p className="text-sm text-neutral-300">
                Built end-to-end ML pipelines, from data collection and preprocessing 
                to model training, evaluation, and deployment.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-300 text-xs md:text-sm font-normal mb-8">
            Foundation building and initial exploration of AI/ML concepts
          </p>
          <div className="space-y-4">
            <div className="p-6 rounded-lg border-l-4" style={{background: 'linear-gradient(90deg, #4A90E230, #4A90E220)', borderLeftColor: '#4A90E2'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">Learning Fundamentals</h4>
              <p className="text-sm text-neutral-300">
                Started with Python programming, statistics, and linear algebra. 
                Completed online courses in data science and machine learning.
              </p>
            </div>
            <div className="p-6 rounded-lg border-l-4" style={{background: 'linear-gradient(90deg, #4A90E225, #4A90E215)', borderLeftColor: '#4A90E2'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">First Projects</h4>
              <p className="text-sm text-neutral-300">
                Created basic data analysis projects, built simple prediction models, 
                and explored datasets using Jupyter notebooks.
              </p>
            </div>
            <div className="p-6 rounded-lg border-l-4" style={{background: 'linear-gradient(90deg, #4A90E220, #4A90E210)', borderLeftColor: '#4A90E2'}}>
              <h4 className="font-semibold text-lg mb-2 text-white">Community Engagement</h4>
              <p className="text-sm text-neutral-300">
                Joined AI/ML communities, participated in Kaggle competitions, 
                and started building a portfolio of projects.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}
