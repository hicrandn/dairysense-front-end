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
import { DashboardCard } from "@/hooks/use-dashboard-layout";
import { DraggableCard } from "./DraggableCard";
import { useState, useEffect } from "react";

interface DraggableContainerProps {
  cards: DashboardCard[];
  onCardsReorder: (newCards: DashboardCard[]) => void;
}

export const DraggableContainer: React.FC<DraggableContainerProps> = ({
  cards,
  onCardsReorder,
}) => {
  const [activeCard, setActiveCard] = useState<DashboardCard | null>(null);
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
    const card = cards.find((c) => c.id === active.id);
    setActiveCard(card || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveCard(null);

    if (active.id !== over?.id) {
      const oldIndex = cards.findIndex((card) => card.id === active.id);
      const newIndex = cards.findIndex((card) => card.id === over?.id);

      const newCards = arrayMove(cards, oldIndex, newIndex);
      onCardsReorder(newCards);
    }
  };

  // SSR sırasında basit grid göster
  if (!isMounted) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-2 mb-2 lg:mb-4">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} min-h-[120px] rounded-lg border p-4`}
          >
            <div className="text-xs sm:text-sm lg:text-sm font-medium text-gray-700 mb-2">
              {card.title}
            </div>
            <div className="flex items-center gap-4">
              <span className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-gray-900">
                {card.value}
              </span>
              <div className="flex items-center gap-1">
                <span className="text-xs font-medium">{card.change}</span>
              </div>
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
        items={cards.map((card) => card.id)}
        strategy={rectSortingStrategy}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-2 mb-2 lg:mb-4">
          {cards.map((card) => (
            <DraggableCard key={card.id} card={card} />
          ))}
        </div>
      </SortableContext>

      <DragOverlay>
        {activeCard ? (
          <div className="transform rotate-3 scale-105 shadow-2xl">
            <DraggableCard card={activeCard} />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
