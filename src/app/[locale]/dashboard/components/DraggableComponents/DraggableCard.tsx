"use client";

import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../../components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";
import { DashboardCard } from "@/hooks/use-dashboard-layout";
import clsx from "clsx";

interface DraggableCardProps {
  card: DashboardCard;
}

export const DraggableCard: React.FC<DraggableCardProps> = ({ card }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: card.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative group">
      <Card
        {...attributes}
        {...listeners}
        className={clsx(
          card.bgColor,
          "transition-all duration-200 hover:shadow-md cursor-grab active:cursor-grabbing"
        )}
      >
        <CardHeader className="pb-1 sm:pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base  md:text-sm  font-medium text-gray-700 leading-tight truncate">
              {card.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-1 sm:gap-2">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <span className="text-xl sm:text-lg md:text-2xl font-bold text-gray-900 ">
              {card.value}
            </span>
            <div className="flex items-center gap-1 flex-shrink-0">
              <span className="text-xs  font-medium">{card.change}</span>
              {card.isPositive ? (
                <TrendingUp className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 text-black" />
              ) : (
                <TrendingDown className="w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 text-black" />
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
