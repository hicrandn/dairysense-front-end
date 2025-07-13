"use client";

import { useState, useEffect } from "react";

export interface DashboardCard {
  id: string;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  bgColor: string;
}

const defaultCards: DashboardCard[] = [
  {
    id: "son-24-saat-sut",
    title: "Son 24 Saat Süt",
    value: "7,265",
    change: "+11.01%",
    isPositive: true,
    bgColor: "bg-[#eef0fd]",
  },
  {
    id: "dun-toplam-sut",
    title: "Dün Toplam Süt",
    value: "3,671",
    change: "-0.03%",
    isPositive: false,
    bgColor: "bg-blue-100",
  },
  {
    id: "sagilan-inek-sayisi",
    title: "Sağılan İnek Sayısı",
    value: "156",
    change: "+15.03%",
    isPositive: true,
    bgColor: "bg-[#eef0fd]",
  },
  {
    id: "ortalama-sut",
    title: "Ortalama Süt",
    value: "2,318",
    change: "+6.08%",
    isPositive: true,
    bgColor: "bg-blue-100",
  },
];

const STORAGE_KEY = "dashboard-cards-order";

export const useDashboardLayout = () => {
  const [cards, setCards] = useState<DashboardCard[]>(defaultCards);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // localStorage'dan kart sırasını yükle
  useEffect(() => {
    if (!isMounted) return;

    const savedOrder = localStorage.getItem(STORAGE_KEY);
    if (savedOrder) {
      try {
        const savedIds = JSON.parse(savedOrder);
        const reorderedCards = savedIds
          .map((id: string) => defaultCards.find((card) => card.id === id))
          .filter(Boolean) as DashboardCard[];

        // Eksik kartları varsa ekle
        const missingCards = defaultCards.filter(
          (card) =>
            !reorderedCards.find((savedCard) => savedCard.id === card.id)
        );

        setCards([...reorderedCards, ...missingCards]);
      } catch (error) {
        console.error("LocalStorage verisi okunamadı:", error);
        setCards(defaultCards);
      }
    }
  }, [isMounted]);

  // Kart sırasını güncelle ve localStorage'a kaydet
  const updateCardOrder = (newOrder: DashboardCard[]) => {
    setCards(newOrder);
    if (isMounted) {
      const orderIds = newOrder.map((card) => card.id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(orderIds));
    }
  };

  return {
    cards,
    updateCardOrder,
    isMounted,
  };
};
