import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Clock,
  Star,
  TrendingUp,
  Video,
  Globe,
  Brain,
  Database,
  Cpu,
  BarChart3,
} from "lucide-react";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

const itemsSample: BentoItem[] = [
  {
    title: "AI-Powered Analytics Dashboard",
    meta: "v2.4.1",
    description:
      "Real-time metrics with AI-powered insights and predictive analytics for machine learning model performance",
    icon: <TrendingUp className="w-4 h-4 text-blue-500" />,
    status: "Live",
    tags: ["Statistics", "Reports", "AI"],
    colSpan: 2,
    hasPersistentHover: true,
  },
  {
    title: "Computer Vision Pipeline",
    meta: "95% accuracy",
    description: "Automated image processing workflow with real-time object detection and classification",
    icon: <Brain className="w-4 h-4 text-emerald-500" />,
    status: "Updated",
    tags: ["Computer Vision", "OpenCV"],
  },
  {
    title: "ML Model Deployment",
    meta: "12 models",
    description: "Cloud-based model serving with intelligent content processing and A/B testing",
    icon: <Cpu className="w-4 h-4 text-purple-500" />,
    tags: ["Deployment", "MLOps"],
    colSpan: 2,
  },
  {
    title: "Data Processing Engine",
    meta: "6 regions",
    description: "Multi-region data processing with edge computing and real-time streaming",
    icon: <Database className="w-4 h-4 text-sky-500" />,
    status: "Beta",
    tags: ["Infrastructure", "Big Data"],
  },
  {
    title: "Predictive Analytics",
    meta: "84% accuracy",
    description: "Time series forecasting with deep learning models and automated reporting",
    icon: <BarChart3 className="w-4 h-4 text-orange-500" />,
    status: "Live",
    tags: ["Forecasting", "Deep Learning"],
  },
];

function BentoGrid({ items = itemsSample }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-7xl mx-auto">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative p-4 rounded-xl overflow-hidden transition-all duration-300",
            "border border-gray-800 bg-gray-900/50 backdrop-blur-sm",
            "hover:shadow-[0_2px_12px_rgba(255,255,255,0.05)]",
            "hover:-translate-y-0.5 will-change-transform",
            "hover:border-gray-700",
            item.colSpan || "col-span-1",
            item.colSpan === 2 ? "md:col-span-2" : "",
            {
              "shadow-[0_2px_12px_rgba(255,255,255,0.05)] -translate-y-0.5":
                item.hasPersistentHover,
            }
          )}
        >
          <div
            className={cn(
              `absolute inset-0 ${
                item.hasPersistentHover
                  ? "opacity-100"
                  : "opacity-0 group-hover:opacity-100"
              } transition-opacity duration-300`
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/10 group-hover:bg-gradient-to-br transition-all duration-300">
                {item.icon}
              </div>
              <span
                className={cn(
                  "text-xs font-medium px-2 py-1 rounded-lg backdrop-blur-sm",
                  "bg-white/10 text-gray-300",
                  "transition-colors duration-300 group-hover:bg-white/20"
                )}
              >
                {item.meta}
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {item.tags?.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 rounded-md bg-gray-800 text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {item.status && (
                <span
                  className={cn(
                    "text-xs px-2 py-1 rounded-md",
                    item.status === "Live"
                      ? "bg-green-900/30 text-green-400 border border-green-800"
                      : item.status === "Updated"
                      ? "bg-blue-900/30 text-blue-400 border border-blue-800"
                      : "bg-yellow-900/30 text-yellow-400 border border-yellow-800"
                  )}
                >
                  {item.status}
                </span>
              )}
            </div>

            {item.cta && (
              <div className="pt-2">
                <button className="text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                  {item.cta} →
                </button>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export { BentoGrid };
