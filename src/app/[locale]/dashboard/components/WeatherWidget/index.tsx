"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getWeatherData, WeatherData } from "@/lib/weather-actions";
import {
  Cloud,
  Sun,
  CloudRain,
  CloudSnow,
  MapPin,
  Thermometer,
  Droplets,
  Wind,
} from "lucide-react";

const WeatherWidget = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getWeatherData();
        setWeather(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Hava durumu bilgisi alınamadı"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getWeatherIcon = (iconCode: string) => {
    if (iconCode.includes("01"))
      return <Sun className="w-6 h-6 text-yellow-500" />;
    if (
      iconCode.includes("02") ||
      iconCode.includes("03") ||
      iconCode.includes("04")
    )
      return <Cloud className="w-8 h-8 text-gray-500" />;
    if (iconCode.includes("09") || iconCode.includes("10"))
      return <CloudRain className="w-8 h-8 text-blue-500" />;
    if (iconCode.includes("13"))
      return <CloudSnow className="w-8 h-8 text-blue-300" />;
    return <Cloud className="w-8 h-8 text-gray-500" />;
  };

  const getTemperatureColor = (temp: number) => {
    if (temp > 25) return "text-red-600";
    if (temp > 15) return "text-orange-600";
    if (temp > 5) return "text-yellow-600";
    return "text-blue-600";
  };

  if (loading) {
    return (
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-[150px] min-w-[250px] animate-in fade-in-0 zoom-in-95 duration-300 ease-out">
        <CardContent className="p-4">
          <div className="animate-pulse space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-300 rounded"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            </div>
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            <div className="h-3 bg-gray-300 rounded w-2/3"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error || !weather) {
    return (
      <Card className="bg-gradient-to-br from-red-50 to-red-100 min-h-[120px] min-w-[250px] animate-in fade-in-0 zoom-in-95 duration-300 ease-out">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 text-red-600">
            <Cloud className="w-5 h-5" />
            <p className="text-sm">
              {error || "Hava durumu bilgisi alınamadı"}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-[150px] min-w-[250px] animate-in fade-in-0 zoom-in-95 duration-300 ease-out">
      <CardHeader className="pb-2">
        <CardTitle className="text-xs sm:text-sm lg:text-sm font-medium text-gray-700 flex items-center gap-1">
          <MapPin className="w-3 h-3" />
          {weather.city}, {weather.country}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4">
          {getWeatherIcon(weather.icon)}
          <div className="text-center">
            <div
              className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold ${getTemperatureColor(
                weather.temp
              )}`}
            >
              {Math.round(weather.temp)}°C
            </div>
            <div className="text-sm text-gray-600 capitalize">
              {weather.description}
            </div>
          </div>
        </div>

        {/* Alt kısım: Diğer hava durumu bilgileri */}
        <div className="grid grid-cols-1 gap-2 text-xs text-gray-600">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Thermometer className="w-3 h-3" />
              <span>Hissedilen</span>
            </div>
            <span>{Math.round(weather.feelsLike)}°C</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <Droplets className="w-3 h-3" />
              <span>Nem</span>
            </div>
            <span>{weather.humidity}%</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1">
              <Wind className="w-3 h-3" />
              <span>Rüzgar</span>
            </div>
            <span>{weather.windSpeed} m/s</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
