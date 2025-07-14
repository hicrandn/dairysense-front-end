"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartSection } from "@/hooks/use-dashboard-layout";

interface DraggableChartSectionProps {
  section: ChartSection;
  chartComponent: React.ReactNode;
  successComponent: React.ReactNode;
}

export const DraggableChartSection: React.FC<DraggableChartSectionProps> = ({
  section,
  chartComponent,
  successComponent,
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: section.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const isChart = section.type === "chart";

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx(
        isChart ? "col-span-1 xl:col-span-2" : "col-span-1",
        "relative group"
      )}
    >
      <Card
        {...attributes}
        {...listeners}
        className={clsx(
          "h-full bg-gray-100 transition-all duration-200 hover:shadow-md cursor-grab active:cursor-grabbing",
          isDragging && "shadow-lg"
        )}
      >
        {section.title && (
          <CardHeader>
            <CardTitle className="text-sm lg:text-lg font-bold text-gray-900">
              {section.title}
            </CardTitle>
          </CardHeader>
        )}
        <CardContent className="flex-1">
          {isChart ? chartComponent : successComponent}
        </CardContent>
      </Card>
    </div>
  );
};
