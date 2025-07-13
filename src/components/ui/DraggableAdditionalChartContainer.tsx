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
import { AdditionalChartSection } from "@/hooks/use-chart-layout";
import { DraggableAdditionalChartSection } from "@/components/ui/DraggableAdditionalChartSection";
import { useState, useEffect } from "react";

interface DraggableAdditionalChartContainerProps {
  sections: AdditionalChartSection[];
  onSectionsReorder: (newSections: AdditionalChartSection[]) => void;
  barChartComponent: React.ReactNode;
  pieChartComponent: React.ReactNode;
}

export const DraggableAdditionalChartContainer: React.FC<
  DraggableAdditionalChartContainerProps
> = ({ sections, onSectionsReorder, barChartComponent, pieChartComponent }) => {
  const [activeSection, setActiveSection] =
    useState<AdditionalChartSection | null>(null);
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 lg:mb-8">
        {sections.map((section) => (
          <div
            key={section.id}
            className="rounded-xl shadow-sm p-4 flex flex-col h-full bg-gray-100"
          >
            <div className="flex-1">
              {section.type === "barChart"
                ? barChartComponent
                : pieChartComponent}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 lg:mb-8">
          {sections.map((section) => (
            <DraggableAdditionalChartSection
              key={section.id}
              section={section}
              barChartComponent={barChartComponent}
              pieChartComponent={pieChartComponent}
            />
          ))}
        </div>
      </SortableContext>

      <DragOverlay>
        {activeSection ? (
          <div className="transform rotate-3 scale-105 shadow-2xl">
            <DraggableAdditionalChartSection
              section={activeSection}
              barChartComponent={barChartComponent}
              pieChartComponent={pieChartComponent}
            />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
