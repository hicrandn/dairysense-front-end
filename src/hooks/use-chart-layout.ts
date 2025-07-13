"use client";

import { useState, useEffect } from "react";

export interface ChartSection {
  id: string;
  type: "chart" | "success";
  title?: string;
}

export interface AdditionalChartSection {
  id: string;
  type: "barChart" | "pieChart";
}

const defaultChartSections: ChartSection[] = [
  { id: "chart", type: "chart" },
  { id: "success", type: "success", title: "Çiftlik Başarı Durumu" },
];

const defaultAdditionalChartSections: AdditionalChartSection[] = [
  { id: "barChart", type: "barChart" },
  { id: "pieChart", type: "pieChart" },
];

const CHART_SECTIONS_STORAGE_KEY = "chart-sections-order";
const ADDITIONAL_CHART_SECTIONS_STORAGE_KEY = "additional-chart-sections-order";

export const useChartLayout = () => {
  const [chartSections, setChartSections] =
    useState<ChartSection[]>(defaultChartSections);
  const [additionalChartSections, setAdditionalChartSections] = useState<
    AdditionalChartSection[]
  >(defaultAdditionalChartSections);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    chartSections,
    additionalChartSections,
    updateChartSectionsOrder,
    updateAdditionalChartSectionsOrder,
  };
};
