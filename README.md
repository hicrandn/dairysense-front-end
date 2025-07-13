# DairySense Frontend

Modern ve interaktif bir süt çiftliği yönetim dashboard'u. Bu proje, çiftlik verilerini görselleştirmek ve yönetmek için geliştirilmiş kapsamlı bir web uygulamasıdır.

## 🚀 Özellikler

### 📊 Dashboard Özellikleri

- **Gerçek Zamanlı Veri Görselleştirme**: Süt üretimi, inek envanteri ve çiftlik performansı
- **Responsive Tasarım**: Mobil, tablet ve masaüstü cihazlarda mükemmel görünüm
- **Çoklu Dil Desteği**: Türkçe ve İngilizce dil desteği
- **Hava Durumu Widget'ı**: Güncel hava durumu bilgileri

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

```
dairysense-front-end/
├── src/
│   ├── app/
│   │   ├── [locale]/           # Çoklu dil desteği
│   │   │   ├── dashboard/      # Ana dashboard sayfası
│   │   │   │   ├── components/ # Dashboard bileşenleri
│   │   │   │   │   ├── Header/
│   │   │   │   │   ├── Rightbar/
│   │   │   │   │   ├── SideBarLayout/
│   │   │   │   │   └── WeatherWidget/
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── constants/          # Sabit veriler
│   │   │   ├── chart-data.ts
│   │   │   ├── farm-success.ts
│   │   │   ├── rightbar-data.ts
│   │   │   └── sidebar.menu.ts
│   │   ├── globals.css
│   │   └── favicon.ico
│   ├── components/
│   │   └── ui/                 # Yeniden kullanılabilir UI bileşenleri
│   │       ├── DraggableContainer.tsx
│   │       ├── DraggableCard.tsx
│   │       ├── Linechart.tsx
│   │       ├── BarChart.tsx
│   │       ├── PieChart.tsx
│   │       └── ... (diğer UI bileşenleri)
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-dashboard-layout.ts
│   │   ├── use-chart-layout.ts
│   │   └── use-mobile.ts
│   ├── i18n/                   # Uluslararasılaştırma
│   ├── lib/                    # Yardımcı fonksiyonlar
│   └── messages/               # Dil dosyaları
│       ├── en.json
│       └── tr.json
├── public/                     # Statik dosyalar
└── package.json
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler

- Node.js 18+
- Yarn veya npm

### Kurulum

```bash
# Projeyi klonlayın
git clone [repository-url]
cd dairysense-front-end

# Bağımlılıkları yükleyin
yarn install
# veya
npm install
```

### Geliştirme Sunucusu

```bash
# Geliştirme sunucusunu başlatın
yarn dev
# veya
npm run dev
```

Uygulama `http://localhost:3000` adresinde çalışacaktır.

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

## 📝 Lisans

Bu proje özel bir projedir. Tüm hakları saklıdır.

## 🤝 Katkıda Bulunma

1. Projeyi fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📞 İletişim

Proje hakkında sorularınız için lütfen iletişime geçin.

---

**DairySense Frontend** - Modern süt çiftliği yönetim dashboard'u 🐄📊
