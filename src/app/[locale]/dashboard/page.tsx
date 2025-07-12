"use client";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Header from "@/components/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from "@/components/ui/Linechart";
import { TrendingUp, TrendingDown } from "lucide-react";
import BarChart from "@/components/ui/BarChart";
import PieChart from "@/components/ui/PieChart";
import { weeklyMilkProduction, cowInventory } from "@/constants/chart-data";
import { farmSuccessData } from "@/constants/farm-success";
import Dropdown from "@/components/ui/dropdown";

export default function DashboardPage() {
  const isMobile = useIsMobile();
  const [isRightbarVisible, setIsRightbarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Bugün");

  const handleMenuClick = () => {
    setIsRightbarVisible(!isRightbarVisible);
  };

  const handleRightbarClose = () => {
    setIsRightbarVisible(false);
  };

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div
        className={`flex flex-col flex-1 ${isMobile ? "ml-16" : ""} min-h-0`}
      >
        <Header onMenuClick={handleMenuClick} />

        <main className="flex-1 p-4 sm:p-4 lg:p-6 overflow-auto">
          <div className="flex items-center justify-between mb-4 lg:mb-6">
            <h2 className="text-xl lg:text-xl font-bold text-gray-900">
              Overview
            </h2>
            <Dropdown
              options={["Bugün", "Dün", "Geçen Hafta", "Geçen Ay"]}
              value={selectedDate}
              onChange={setSelectedDate}
            />
          </div>
          {/* Card grid başlangıcı */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 lg:gap-2 mb-2 lg:mb-4">
            {/* Son 24 Saat Süt */}
            <Card className="bg-[#eef0fd] min-h-[120px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm lg:text-sm font-medium text-gray-700 leading-tight">
                  Son 24 Saat Süt
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-lg sm:text-xl md:text-xl lg:text-2xl  font-bold text-gray-900 truncate">
                    7,265
                  </span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-xs font-medium">+11.01%</span>
                    <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-black" />
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Dün Toplam Süt */}
            <Card className="bg-blue-100 min-h-[120px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm lg:text-sm font-medium text-gray-700 leading-tight">
                  Dün Toplam Süt
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                    3,671
                  </span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-xs font-medium">-0.03%</span>
                    <TrendingDown className="w-3 h-3 lg:w-4 lg:h-4 text-black" />
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Sağılan İnek Sayısı */}
            <Card className="bg-[#eef0fd] min-h-[120px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm lg:text-sm font-medium text-gray-700">
                  Sağılan İnek Sayısı
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-lg sm:text-xl md:text-xl lg:text-2xl  font-bold text-gray-900 truncate">
                    156
                  </span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-xs font-medium">+15.03%</span>
                    <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-black" />
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Ortalama Süt */}
            <Card className="bg-blue-100 min-h-[120px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs sm:text-sm lg:text-sm font-medium text-gray-700 leading-tight">
                  Ortalama Süt
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-4 ">
                  <span className="text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                    2,318
                  </span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-xs font-medium">+6.08%</span>
                    <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-black" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Card grid bitişi */}

          {/* Chart ve Çiftlik Başarı Durumu */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-6 mb-6 lg:mb-8">
            {/* Chart alanı */}
            <div className="col-span-1 xl:col-span-2 rounded-xl shadow-sm p-4 flex flex-col h-full bg-gray-100">
              <Chart />
            </div>
            {/* Çiftlik Başarı Durumu alanı */}
            <Card className="h-full bg-gray-100">
              <CardHeader>
                <CardTitle className="text-base lg:text-lg">
                  Çiftlik Başarı Durumu
                </CardTitle>
              </CardHeader>
              <CardContent>
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
              </CardContent>
            </Card>
          </div>

          {/* Yeni Chartlar: BarChart ve PieChart */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 lg:mb-8 ">
            <BarChart
              title="Haftalık Süt Üretimi"
              data={weeklyMilkProduction}
            />
            <PieChart title="İnek Envanteri" data={cowInventory} />
          </div>
        </main>
      </div>
      <Rightbar isVisible={isRightbarVisible} onClose={handleRightbarClose} />
    </div>
  );
}
