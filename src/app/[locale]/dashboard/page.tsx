"use client";
import Rightbar from "./components/Rightbar";
import Header from "./components/Header";
import { useState, useEffect } from "react";

import Chart from "@/components/ui/Linechart";
import BarChart from "@/components/ui/BarChart";
import PieChart from "@/components/ui/PieChart";
import {
  weeklyMilkProduction,
  cowInventory,
} from "@/app/[locale]/constants/chart-data";
import { farmSuccessData } from "@/app/[locale]/constants/farm-success";
import Dropdown from "@/components/ui/dropdown";
import SidebarLayout from "./components/SideBarLayout";
import { useIsMobile } from "@/hooks/use-mobile";
import { useDashboardLayout } from "@/hooks/use-dashboard-layout";
import { useChartLayout } from "@/hooks/use-chart-layout";
import { DraggableContainer } from "@/components/ui/DraggableContainer";
import { DraggableChartContainer } from "@/components/ui/DraggableChartContainer";
import { DraggableAdditionalChartContainer } from "@/components/ui/DraggableAdditionalChartContainer";

export default function DashboardPage() {
  const isMobile = useIsMobile();
  const [isRightbarVisible, setIsRightbarVisible] = useState(!isMobile);
  const [selectedDate, setSelectedDate] = useState("Bugün");
  const { cards, updateCardOrder } = useDashboardLayout();
  const {
    chartSections,
    additionalChartSections,
    updateChartSectionsOrder,
    updateAdditionalChartSectionsOrder,
  } = useChartLayout();

  // Mobil durumu değiştiğinde rightbar'ı güncelle
  useEffect(() => {
    setIsRightbarVisible(!isMobile);
  }, [isMobile]);

  const handleMenuClick = () => {
    setIsRightbarVisible(!isRightbarVisible);
  };

  const handleRightbarClose = () => {
    setIsRightbarVisible(false);
  };

  const handleNotificationClick = () => {
    setIsRightbarVisible(true);
  };

  return (
    <SidebarLayout
      rightbar={
        <Rightbar isVisible={isRightbarVisible} onClose={handleRightbarClose} />
      }
      isRightbarVisible={isRightbarVisible}
    >
      <div className="flex flex-col flex-1 min-h-0">
        <Header
          onMenuClick={handleMenuClick}
          onNotificationClick={handleNotificationClick}
        />

        <main className="flex-1 p-4 sm:p-4 lg:p-6 overflow-auto">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <div>
              <h2 className="text-xl lg:text-xl font-bold text-gray-900">
                Overview
              </h2>
            </div>
            <Dropdown
              options={["Bugün", "Dün", "Geçen Hafta", "Geçen Ay"]}
              value={selectedDate}
              onChange={setSelectedDate}
            />
          </div>
          {/* Sürüklenebilir Kartlar */}
          <DraggableContainer cards={cards} onCardsReorder={updateCardOrder} />

          {/* Chart ve Çiftlik Başarı Durumu - Draggable */}
          <DraggableChartContainer
            sections={chartSections}
            onSectionsReorder={updateChartSectionsOrder}
            chartComponent={<Chart />}
            successComponent={
              <ul className="space-y-4 mt-2">
                {farmSuccessData.map((item) => (
                  <li
                    key={item.label}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="flex-shrink-0 mr-3 text-xs lg:text-sm">
                      {item.label}
                    </span>
                    <span className="flex gap-1">
                      {item.values.map((val, i) => (
                        <span
                          key={i}
                          className={`w-4 h-1.5 rounded-full ${
                            val === 1
                              ? "bg-black"
                              : val === 0.5
                              ? "bg-gray-400"
                              : "bg-gray-200"
                          }`}
                        ></span>
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            }
          />

          {/* BarChart ve PieChart - Draggable */}
          <DraggableAdditionalChartContainer
            sections={additionalChartSections}
            onSectionsReorder={updateAdditionalChartSectionsOrder}
            barChartComponent={
              <BarChart
                title="Haftalık Süt Üretimi"
                data={weeklyMilkProduction}
              />
            }
            pieChartComponent={
              <PieChart title="İnek Envanteri" data={cowInventory} />
            }
          />
        </main>
      </div>
    </SidebarLayout>
  );
}
