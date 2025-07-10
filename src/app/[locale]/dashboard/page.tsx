"use client";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Header from "@/components/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Chart from "@/components/ui/chart";

export default function DashboardPage() {
  const isMobile = useIsMobile();

  return (
    <div className="flex h-full w-full">
      <Sidebar />
      <div className={`flex flex-col flex-1 ${isMobile ? "ml-20" : ""}`}>
        <Header />
        <main className="flex-1 bg-gray-50 p-10 h-full">
          {/* Card grid başlangıcı */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Son 24 Saat Süt */}
            <Card>
              <CardHeader>
                <CardTitle>Son 24 Saat Süt</CardTitle>
                <CardDescription>+11.01%</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-3xl font-bold">7,265</span>
              </CardContent>
            </Card>
            {/* Dün Toplam Süt */}
            <Card>
              <CardHeader>
                <CardTitle>Dün Toplam Süt</CardTitle>
                <CardDescription>-0.03%</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-3xl font-bold">3,671</span>
              </CardContent>
            </Card>
            {/* Sağlanan İnek Sayısı */}
            <Card>
              <CardHeader>
                <CardTitle>Sağlanan İnek Sayısı</CardTitle>
                <CardDescription>+15.03%</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-3xl font-bold">156</span>
              </CardContent>
            </Card>
            {/* Ortalama Süt */}
            <Card>
              <CardHeader>
                <CardTitle>Ortalama Süt</CardTitle>
                <CardDescription>+6.08%</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-3xl font-bold">2,318</span>
              </CardContent>
            </Card>
          </div>
          {/* Card grid bitişi */}

          {/* Chart ve Çiftlik Başarı Durumu */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Chart alanı */}
            <div className="col-span-2 bg-white rounded-xl shadow-sm p-6 flex flex-col">
              <h2 className="text-lg font-semibold mb-4">Toplam Süt</h2>
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
      <Rightbar />
    </div>
  );
}
