# DairySense Frontend 🐄📊

Modern ve interaktif bir süt çiftliği yönetim dashboard'u. Bu proje, çiftlik verilerini görselleştirmek ve yönetmek için geliştirilmiş kapsamlı bir web uygulamasıdır.

## 🚀 Özellikler

### 📊 Dashboard Özellikleri

- **Gerçek Zamanlı Veri Görselleştirme**: Süt üretimi, inek envanteri ve çiftlik performansı
- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Çoklu Dil Desteği**: Türkçe ve İngilizce dil desteği
- **Hava Durumu Widget'ı**: OpenWeather API entegrasyonu ile güncel hava durumu bilgileri

### 🎯 Drag & Drop Özellikleri

- **Sürükle-Bırak Düzenleme**: Dashboard kartlarını istediğiniz gibi yeniden düzenleyin
- **Chart Yeniden Düzenleme**: Grafikleri ve başarı durumu widget'larını sürükleyerek yerleştirin
- **Local Storage Entegrasyonu**: Düzenlemeleriniz otomatik olarak kaydedilir
- **Gerçek Zamanlı Güncelleme**: Değişiklikler anında görünür

### 📈 Veri Görselleştirme

- **Line Chart**: Zaman serisi verilerini görselleştirme
- **Bar Chart**: Haftalık süt üretimi grafikleri
- **Pie Chart**: İnek envanteri dağılımı
- **Başarı Durumu Widget'ı**: Çiftlik performans göstergeleri

## 🛠️ Kullanılan Teknolojiler

### Frontend Framework

- **Next.js 15.3.5**: React tabanlı full-stack framework
- **React 19.0.0**: Modern React hooks ve özellikleri
- **TypeScript**: Tip güvenliği ve geliştirici deneyimi

### UI/UX Kütüphaneleri

- **Tailwind CSS 4**: Utility-first CSS framework
- **Radix UI**: Erişilebilir UI bileşenleri
- **Lucide React**: Modern ikon seti
- **Class Variance Authority**: Tip güvenli CSS sınıf yönetimi

### Drag & Drop

- **@dnd-kit/core**: Modern drag & drop kütüphanesi
- **@dnd-kit/sortable**: Sıralama özellikleri
- **@dnd-kit/utilities**: Yardımcı fonksiyonlar

### Grafik ve Veri Görselleştirme

- **Recharts 2.15.4**: React için grafik kütüphanesi

### Uluslararasılaştırma

- **next-intl**: Çoklu dil desteği
- **react-country-flag**: Ülke bayrakları

## 📁 Proje Yapısı

````



### Geliştirme Sunucusu

```bash
# Geliştirme sunucusunu başlatın
yarn dev
# veya
npm run dev
````

Uygulama `https://dairysense.com` adresinde çalışacaktır.

### Build ve Production

```bash
# Production build
yarn build
# veya
npm run build

# Production sunucusunu başlatın
yarn start
# veya
npm start
```

## 🎯 Kullanım

### Dashboard Düzenleme

1. **Kartları Yeniden Düzenleme**: Dashboard kartlarını sürükleyerek istediğiniz sıraya yerleştirin
2. **Grafikleri Yeniden Düzenleme**: Chart ve başarı durumu widget'larını sürükleyerek yerleştirin
3. **Otomatik Kaydetme**: Tüm değişiklikler otomatik olarak local storage'a kaydedilir

### Dil Değiştirme

- URL'deki locale parametresini değiştirerek dil değiştirebilirsiniz
- Örnek: `/tr/dashboard` (Türkçe), `/en/dashboard` (İngilizce)

### Responsive Tasarım

- Mobil cihazlarda sidebar otomatik olarak gizlenir
- Tablet ve masaüstünde tam özellikli görünüm
- Touch-friendly drag & drop desteği

## 🔧 Özelleştirme

### Yeni Kart Ekleme

`src/hooks/use-dashboard-layout.ts` dosyasındaki `defaultCards` array'ine yeni kartlar ekleyebilirsiniz:

```typescript
const defaultCards: DashboardCard[] = [
  // Mevcut kartlar...
  {
    id: "yeni-kart",
    title: "Yeni Kart",
    value: "1,234",
    change: "+5.67%",
    isPositive: true,
    bgColor: "bg-green-100",
  },
];
```

### Yeni Grafik Ekleme

`src/hooks/use-chart-layout.ts` dosyasında chart sections'ları düzenleyebilirsiniz.

### Dil Desteği Ekleme

`src/messages/` klasörüne yeni dil dosyaları ekleyebilirsiniz.

## 🧪 Test

```bash
# Linting
yarn lint
# veya
npm run lint
```
