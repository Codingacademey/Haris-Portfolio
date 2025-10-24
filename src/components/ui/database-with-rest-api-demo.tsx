"use client";

import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";

export const DatabaseWithRestApiDemo = () => {
  return (
    <div className="p-4 rounded-xl bg-black/50 w-full border border-gray-800">
      <DatabaseWithRestApi 
        circleText="AI/ML"
        title="AI/ML Data Pipeline with REST API"
        badgeTexts={{
          first: "GET",
          second: "POST", 
          third: "PUT",
          fourth: "DELETE"
        }}
        buttonTexts={{
          first: "DataFlow",
          second: "ML_Models"
        }}
        lightColor="#3B82F6"
      />
    </div>
  );
};
