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

export interface ChartSection {
  id: string;
  type: "chart" | "success";
  title?: string;
}

export interface AdditionalChartSection {
  id: string;
  type: "barChart" | "pieChart";
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

const defaultChartSections: ChartSection[] = [
  { id: "chart", type: "chart" },
  { id: "success", type: "success", title: "Çiftlik Başarı Durumu" },
];

const defaultAdditionalChartSections: AdditionalChartSection[] = [
  { id: "barChart", type: "barChart" },
  { id: "pieChart", type: "pieChart" },
];

const DASHBOARD_CARDS_STORAGE_KEY = "dashboard-cards-order";
const CHART_SECTIONS_STORAGE_KEY = "chart-sections-order";
const ADDITIONAL_CHART_SECTIONS_STORAGE_KEY = "additional-chart-sections-order";

export const useDashboardLayout = () => {
  const [cards, setCards] = useState<DashboardCard[]>(defaultCards);
  const [chartSections, setChartSections] =
    useState<ChartSection[]>(defaultChartSections);
  const [additionalChartSections, setAdditionalChartSections] = useState<
    AdditionalChartSection[]
  >(defaultAdditionalChartSections);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // localStorage'dan dashboard kartları sırasını yükle
  useEffect(() => {
    if (!isMounted) return;

    const savedOrder = localStorage.getItem(DASHBOARD_CARDS_STORAGE_KEY);
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
        console.error("Dashboard cards localStorage verisi okunamadı:", error);
        setCards(defaultCards);
      }
    }
  }, [isMounted]);

  // localStorage'dan chart sections sırasını yükle
  useEffect(() => {
    if (!isMounted) return;

    const savedChartOrder = localStorage.getItem(CHART_SECTIONS_STORAGE_KEY);
    if (savedChartOrder) {
      try {
        const savedIds = JSON.parse(savedChartOrder);
        const reorderedSections = savedIds
          .map((id: string) =>
            defaultChartSections.find((section) => section.id === id)
          )
          .filter(Boolean) as ChartSection[];

        // Eksik section'ları varsa ekle
        const missingSections = defaultChartSections.filter(
          (section) =>
            !reorderedSections.find(
              (savedSection) => savedSection.id === section.id
            )
        );

        setChartSections([...reorderedSections, ...missingSections]);
      } catch (error) {
        console.error("Chart sections localStorage verisi okunamadı:", error);
        setChartSections(defaultChartSections);
      }
    }
  }, [isMounted]);

  // localStorage'dan additional chart sections sırasını yükle
  useEffect(() => {
    if (!isMounted) return;

    const savedAdditionalOrder = localStorage.getItem(
      ADDITIONAL_CHART_SECTIONS_STORAGE_KEY
    );
    if (savedAdditionalOrder) {
      try {
        const savedIds = JSON.parse(savedAdditionalOrder);
        const reorderedSections = savedIds
          .map((id: string) =>
            defaultAdditionalChartSections.find((section) => section.id === id)
          )
          .filter(Boolean) as AdditionalChartSection[];

        // Eksik section'ları varsa ekle
        const missingSections = defaultAdditionalChartSections.filter(
          (section) =>
            !reorderedSections.find(
              (savedSection) => savedSection.id === section.id
            )
        );

        setAdditionalChartSections([...reorderedSections, ...missingSections]);
      } catch (error) {
        console.error(
          "Additional chart sections localStorage verisi okunamadı:",
          error
        );
        setAdditionalChartSections(defaultAdditionalChartSections);
      }
    }
  }, [isMounted]);

  // Dashboard kartları sırasını güncelle ve localStorage'a kaydet
  const updateCardOrder = (newOrder: DashboardCard[]) => {
    setCards(newOrder);
    if (isMounted) {
      const orderIds = newOrder.map((card) => card.id);
      localStorage.setItem(
        DASHBOARD_CARDS_STORAGE_KEY,
        JSON.stringify(orderIds)
      );
    }
  };

  // Chart sections sırasını güncelle ve localStorage'a kaydet
  const updateChartSectionsOrder = (newSections: ChartSection[]) => {
    setChartSections(newSections);
    if (isMounted) {
      const orderIds = newSections.map((section) => section.id);
      localStorage.setItem(
        CHART_SECTIONS_STORAGE_KEY,
        JSON.stringify(orderIds)
      );
    }
  };

  // Additional chart sections sırasını güncelle ve localStorage'a kaydet
  const updateAdditionalChartSectionsOrder = (
    newSections: AdditionalChartSection[]
  ) => {
    setAdditionalChartSections(newSections);
    if (isMounted) {
      const orderIds = newSections.map((section) => section.id);
      localStorage.setItem(
        ADDITIONAL_CHART_SECTIONS_STORAGE_KEY,
        JSON.stringify(orderIds)
      );
    }
  };

  return {
    cards,
    chartSections,
    additionalChartSections,
    updateCardOrder,
    updateChartSectionsOrder,
    updateAdditionalChartSectionsOrder,
    isMounted,
  };
};
