"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { AdditionalChartSection } from "@/hooks/use-chart-layout";

interface DraggableAdditionalChartSectionProps {
  section: AdditionalChartSection;
  barChartComponent: React.ReactNode;
  pieChartComponent: React.ReactNode;
}

export const DraggableAdditionalChartSection: React.FC<
  DraggableAdditionalChartSectionProps
> = ({ section, barChartComponent, pieChartComponent }) => {
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
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={` flex flex-col h-full  cursor-move transition-shadow ${
        isDragging ? "opacity-50" : ""
      }`}
    >
      <div className="flex-1">
        {section.type === "barChart" ? barChartComponent : pieChartComponent}
      </div>
    </div>
  );
};
