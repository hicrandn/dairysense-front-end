"use server";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const WEATHER_BASE_URL = "https://api.openweathermap.org/data/2.5";

export interface WeatherData {
  temp: number;
  humidity: number;
  windSpeed: number;
  description: string;
  icon: string;
  city: string;
  feelsLike: number;
  pressure: number;
  country: string;
}

export async function getWeatherData(
  city?: string,
  lat?: number,
  lon?: number
): Promise<WeatherData> {
  try {
    if (!WEATHER_API_KEY) {
      throw new Error("Weather API key is not configured");
    }

    let url = `${WEATHER_BASE_URL}/weather?appid=${WEATHER_API_KEY}&units=metric&lang=tr`;

    if (lat && lon) {
      url += `&lat=${lat}&lon=${lon}`;
    } else {
      url += `&q=${encodeURIComponent(city || "Istanbul")}`;
    }

    const response = await fetch(url, {
      next: { revalidate: 300 }, // 5 dakika cache
    });

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();

    return {
      temp: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      city: data.name,
      feelsLike: data.main.feels_like,
      pressure: data.main.pressure,
      country: data.sys.country,
    };
  } catch (error) {
    console.error("Weather API error:", error);
    throw new Error("Hava durumu bilgisi alınamadı");
  }
}

// 5 günlük tahmin için
export async function getWeatherForecast(
  city?: string,
  lat?: number,
  lon?: number
) {
  try {
    if (!WEATHER_API_KEY) {
      throw new Error("Weather API key is not configured");
    }

    let url = `${WEATHER_BASE_URL}/forecast?appid=${WEATHER_API_KEY}&units=metric&lang=tr`;

    if (lat && lon) {
      url += `&lat=${lat}&lon=${lon}`;
    } else {
      url += `&q=${encodeURIComponent(city || "Istanbul")}`;
    }

    const response = await fetch(url, {
      next: { revalidate: 600 }, // 10 dakika cache
    });

    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Weather forecast error:", error);
    throw new Error("Hava durumu tahmini alınamadı");
  }
}
