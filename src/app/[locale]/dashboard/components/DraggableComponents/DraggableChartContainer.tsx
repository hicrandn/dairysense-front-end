"use client";

import React from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { ChartSection } from "@/hooks/use-chart-layout";
import { DraggableChartSection } from "./DraggableChartSection";
import { useState, useEffect } from "react";
import clsx from "clsx";

interface DraggableChartContainerProps {
  sections: ChartSection[];
  onSectionsReorder: (newSections: ChartSection[]) => void;
  chartComponent: React.ReactNode;
  successComponent: React.ReactNode;
}

export const DraggableChartContainer: React.FC<
  DraggableChartContainerProps
> = ({ sections, onSectionsReorder, chartComponent, successComponent }) => {
  const [activeSection, setActiveSection] = useState<ChartSection | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const section = sections.find((s) => s.id === active.id);
    setActiveSection(section || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveSection(null);

    if (active.id !== over?.id) {
      const oldIndex = sections.findIndex(
        (section) => section.id === active.id
      );
      const newIndex = sections.findIndex((section) => section.id === over?.id);

      const newSections = arrayMove(sections, oldIndex, newIndex);
      onSectionsReorder(newSections);
    }
  };

  // SSR sırasında basit grid göster
  if (!isMounted) {
    return (
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-6 mb-6 lg:mb-8">
        {sections.map((section) => (
          <div
            key={section.id}
            className={clsx(
              "rounded-xl shadow-sm p-4 flex flex-col h-full bg-gray-100",
              {
                "col-span-1 xl:col-span-2": section.type === "chart",
                "col-span-1": section.type !== "chart",
              }
            )}
          >
            <div className="flex-1">
              {section.type === "chart" ? chartComponent : successComponent}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={sections.map((section) => section.id)}
        strategy={rectSortingStrategy}
      >
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-6 mb-6 lg:mb-8">
          {sections.map((section) => (
            <DraggableChartSection
              key={section.id}
              section={section}
              chartComponent={chartComponent}
              successComponent={successComponent}
            />
          ))}
        </div>
      </SortableContext>

      <DragOverlay>
        {activeSection ? (
          <div className="transform rotate-3 scale-105 shadow-2xl">
            <DraggableChartSection
              section={activeSection}
              chartComponent={chartComponent}
              successComponent={successComponent}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
