"use client";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Header from "@/components/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from "@/components/ui/chart";
import { TrendingUp, TrendingDown } from "lucide-react";

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
    <div className="flex h-full w-full">
      <Sidebar />
      <div className={`flex flex-col flex-1 ${isMobile ? "ml-20" : ""}`}>
        <Header onMenuClick={handleMenuClick} />
        <main className="flex-1 bg-gray-50 p-10 h-full">
          {/* Card grid başlangıcı */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Son 24 Saat Süt */}
            <Card className="bg-[#eef0fd]">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-gray-700">
                  Son 24 Saat Süt
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-gray-900">
                    7,265
                  </span>
                  <span className="text-xs font-medium">+11.01%</span>
                  <TrendingUp className="w-5 h-5 text-black" />
                </div>
              </CardContent>
            </Card>
            {/* Dün Toplam Süt */}
            <Card className="bg-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-gray-700">
                  Dün Toplam Süt
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-gray-900">
                    3,671
                  </span>
                  <span className="text-xs font-medium">-0.03%</span>
                  <TrendingDown className="w-5 h-5 text-black" />
                </div>
              </CardContent>
            </Card>
            {/* Sağlanan İnek Sayısı */}
            <Card className="bg-[#eef0fd]">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-gray-700">
                  Sağılan İnek Sayısı
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-gray-900">156</span>
                  <span className="text-xs font-medium">+15.03%</span>
                  <TrendingUp className="w-5 h-5 text-black" />
                </div>
              </CardContent>
            </Card>
            {/* Ortalama Süt */}
            <Card className="bg-blue-100">
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-gray-700">
                  Ortalama Süt
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-gray-900">
                    2,318
                  </span>
                  <span className="text-xs font-medium">+6.08%</span>
                  <TrendingUp className="w-5 h-5 text-black" />
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Card grid bitişi */}

          {/* Chart ve Çiftlik Başarı Durumu */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Chart alanı */}
            <div className="col-span-2 rounded-xl shadow-sm p-4 flex flex-col">
              <Chart />
            </div>
            {/* Çiftlik Başarı Durumu alanı */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Çiftlik Başarı Durumu</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mt-2">
                  <li className="flex justify-between text-sm">
                    <span>Tohumlama</span>
                    <span className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <span
                        className="block h-full bg-blue-500 rounded-full"
                        style={{ width: "60%" }}
                      ></span>
                    </span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>Sağım Süresi</span>
                    <span className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <span
                        className="block h-full bg-green-500 rounded-full"
                        style={{ width: "80%" }}
                      ></span>
                    </span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>Tedaviler</span>
                    <span className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <span
                        className="block h-full bg-yellow-500 rounded-full"
                        style={{ width: "40%" }}
                      ></span>
                    </span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>Protokoller</span>
                    <span className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <span
                        className="block h-full bg-purple-500 rounded-full"
                        style={{ width: "50%" }}
                      ></span>
                    </span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>Veri Girişi</span>
                    <span className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <span
                        className="block h-full bg-pink-500 rounded-full"
                        style={{ width: "30%" }}
                      ></span>
                    </span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>Kızgınlıklar</span>
                    <span className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
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
        </main>
      </div>
      <Rightbar isVisible={isRightbarVisible} onClose={handleRightbarClose} />
    </div>
  );
}
