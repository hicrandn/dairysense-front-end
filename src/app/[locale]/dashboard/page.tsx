"use client";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Header from "@/components/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from "@/components/ui/chart";
import { TrendingUp, TrendingDown } from "lucide-react";
import BarChart from "@/components/ui/BarChart";
import PieChart from "@/components/ui/PieChart";
import { weeklyMilkProduction, cowInventory } from "@/constants/chart-data";

export default function DashboardPage() {
  const isMobile = useIsMobile();
  const [isRightbarVisible, setIsRightbarVisible] = useState(false);

  const handleMenuClick = () => {
    setIsRightbarVisible(!isRightbarVisible);
  };

  const handleRightbarClose = () => {
    setIsRightbarVisible(false);
  };

  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className={`flex flex-col flex-1 ${isMobile ? "ml-20" : ""}`}>
        <Header onMenuClick={handleMenuClick} />
        <main className="flex-1 bg-gray-50 p-4 sm:p-6 lg:p-10 ">
          {/* Card grid başlangıcı */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            {/* Son 24 Saat Süt */}
            <Card className="bg-[#eef0fd] min-h-[120px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm sm:text-base lg:text-lg font-medium text-gray-700 leading-tight">
                  Son 24 Saat Süt
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 truncate">
                    7,265
                  </span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-xs font-medium">+11.01%</span>
                    <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Dün Toplam Süt */}
            <Card className="bg-blue-100 min-h-[120px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm sm:text-base lg:text-lg font-medium text-gray-700 leading-tight">
                  Dün Toplam Süt
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 truncate">
                    3,671
                  </span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-xs font-medium">-0.03%</span>
                    <TrendingDown className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Sağılan İnek Sayısı */}
            <Card className="bg-[#eef0fd] min-h-[120px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-gray-700">
                  Sağılan İnek Sayısı
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 truncate">
                    156
                  </span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-xs font-medium">+15.03%</span>
                    <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Ortalama Süt */}
            <Card className="bg-blue-100 min-h-[120px]">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm sm:text-base lg:text-lg font-medium text-gray-700 leading-tight">
                  Ortalama Süt
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 truncate">
                    2,318
                  </span>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <span className="text-xs font-medium">+6.08%</span>
                    <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-black" />
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
                <ul className="space-y-3 mt-2">
                  <li className="flex justify-between items-center text-sm">
                    <span className="flex-shrink-0 mr-3 text-xs lg:text-sm">
                      Tohumlama
                    </span>
                    <span className="w-16 sm:w-20 lg:w-24 xl:w-28 h-2 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                      <span
                        className="block h-full bg-blue-500 rounded-full"
                        style={{ width: "60%" }}
                      ></span>
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="flex-shrink-0 mr-3 text-xs lg:text-sm">
                      Sağım Süresi
                    </span>
                    <span className="w-16 sm:w-20 lg:w-24 xl:w-28 h-2 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                      <span
                        className="block h-full bg-green-500 rounded-full"
                        style={{ width: "80%" }}
                      ></span>
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="flex-shrink-0 mr-3 text-xs lg:text-sm">
                      Tedaviler
                    </span>
                    <span className="w-16 sm:w-20 lg:w-24 xl:w-28 h-2 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                      <span
                        className="block h-full bg-yellow-500 rounded-full"
                        style={{ width: "40%" }}
                      ></span>
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="flex-shrink-0 mr-3 text-xs lg:text-sm">
                      Protokoller
                    </span>
                    <span className="w-16 sm:w-20 lg:w-24 xl:w-28 h-2 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                      <span
                        className="block h-full bg-purple-500 rounded-full"
                        style={{ width: "50%" }}
                      ></span>
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="flex-shrink-0 mr-3 text-xs lg:text-sm">
                      Veri Girişi
                    </span>
                    <span className="w-16 sm:w-20 lg:w-24 xl:w-28 h-2 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                      <span
                        className="block h-full bg-pink-500 rounded-full"
                        style={{ width: "30%" }}
                      ></span>
                    </span>
                  </li>
                  <li className="flex justify-between items-center text-sm">
                    <span className="flex-shrink-0 mr-3 text-xs lg:text-sm">
                      Kızgınlıklar
                    </span>
                    <span className="w-16 sm:w-20 lg:w-24 xl:w-28 h-2 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                      <span
                        className="block h-full bg-red-500 rounded-full"
                        style={{ width: "70%" }}
                      ></span>
                    </span>
                  </li>
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
