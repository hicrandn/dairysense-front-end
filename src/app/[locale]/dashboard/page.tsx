"use client";
import Rightbar from "./components/Rightbar";
import Header from "./components/Header";
import { useState } from "react";
import Link from "next/link";
import Chart from "./components/Charts/Linechart";
import BarChart from "./components/Charts/BarChart";
import PieChart from "./components/Charts/PieChart";
import { weeklyMilkProduction, cowInventory } from "@/app/constants/chart-data";
import { farmSuccessData } from "@/app/constants/farm-success";
import Dropdown from "@/components/ui/dropdown";
import SidebarLayout from "./components/SideBarLayout";
import { useDashboardLayout } from "@/hooks/use-dashboard-layout";
import { useChartLayout } from "@/hooks/use-chart-layout";
import { DraggableContainer } from "./components/DraggableComponents/DraggableContainer";
import { DraggableChartContainer } from "./components/DraggableComponents/DraggableChartContainer";
import { DraggableAdditionalChartContainer } from "./components/DraggableComponents/DraggableAdditionalChartContainer";
import clsx from "clsx";
import { useIsMobile } from "@/hooks/use-mobile";

export default function DashboardPage() {
  const [selectedDate, setSelectedDate] = useState("Bugün");
  const isMobile = useIsMobile();

  // Rightbar durumu - mobilde kapalı, desktop'ta açık
  const [isRightbarOpen, setIsRightbarOpen] = useState(!isMobile);

  const { cards, updateCardOrder } = useDashboardLayout();
  const {
    chartSections,
    additionalChartSections,
    updateChartSectionsOrder,
    updateAdditionalChartSectionsOrder,
  } = useChartLayout();

  const toggleRightbar = () => setIsRightbarOpen(!isRightbarOpen);
  const closeRightbar = () => setIsRightbarOpen(false);

  return (
    <SidebarLayout rightbar={<Rightbar onClose={closeRightbar} />}>
      <div className="flex flex-col flex-1 min-h-0">
        <Header onAction={toggleRightbar} />

        <main className="flex-1 p-4 sm:p-4 lg:p-6 overflow-auto hide-scrollbar">
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

          {/* Draggable Container */}
          <DraggableContainer cards={cards} onCardsReorder={updateCardOrder} />

          {/* Chart ve Çiftlik Başarı Durumu - Draggable */}
          <DraggableChartContainer
            sections={chartSections}
            onSectionsReorder={updateChartSectionsOrder}
            chartComponent={<Chart />}
            successComponent={
              <ul className="space-y-4 mt-2">
                {farmSuccessData.map((item) => (
                  <Link
                    key={item.label}
                    href={`/dashboard/success/${item.label}`}
                    className="flex justify-between items-center text-sm"
                  >
                    <span className="flex-shrink-0 mr-3 text-xs lg:text-sm">
                      {item.label}
                    </span>
                    <span className="flex gap-1">
                      {item.values.map((val, i) => (
                        <span
                          key={i}
                          className={clsx(
                            "w-4 h-1.5 rounded-full",
                            val === 1 && "bg-black",
                            val === 0.5 && "bg-gray-400",
                            val === 0 && "bg-gray-200"
                          )}
                        ></span>
                      ))}
                    </span>
                  </Link>
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
