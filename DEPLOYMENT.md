# OptiosLab Deployment Guide

Bu proje statik bir web sitesidir. Sayfalar `src/` altındaki içerik ve şablonlardan
`node src/build.mjs` ile üretilir; üretilen HTML dosyaları repo kökünde durur.

## Yapı

```
src/
  data.mjs      → tüm içerik (çözümler, sektörler, ekip, SSS, süreç, yönlendirmeler)
  layout.mjs    → head, nav, footer, CTA, ürün ekranı taklitleri
  pages.mjs     → sayfa şablonları
  build.mjs     → derleyici
  assets/       → css, js, fontlar, görseller
index.html, cozumler/, sektorler/, hakkimizda/, iletisim/, ... → derleme çıktısı
about/, contact/, case-studies/, legal/ ... → eski adresler için yönlendirme stub'ları
CNAME          → GitHub Pages özel alan adı (optioslab.com)
```

İçerik değiştirmek için yalnızca `src/data.mjs` düzenlenir, ardından derleme çalıştırılır.
Derleme çıktısı elle düzenlenmez; bir sonraki derlemede üzerine yazılır.

## Derleme ve önizleme

```bash
node src/build.mjs            # Node 18+
python3 -m http.server 8787   # http://127.0.0.1:8787/
```

## Yayın

Site GitHub Pages üzerinden yayınlanır. Yayın kaynağı `main` dalının kök dizinidir.
`main` dalına yapılan her push birkaç dakika içinde otomatik olarak yayına alınır.

```bash
node src/build.mjs
git add -A
git commit -m "Update OptiosLab site"
git push origin main
git push pages main      # yayın reposu (Time-e/optioslab-site)
```

Doğrulama:

```bash
curl -I https://optioslab.com/
curl -I https://optioslab.com/cozumler/
```

## DNS

Alan adı GitHub Pages'e yönlendirilmiştir:

- `optioslab.com` A kayıtları → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- `www` CNAME → `time-e.github.io`
- MX, SPF, DKIM ve doğrulama kayıtları dokunulmadan kalır.

## İletişim formu

Form, `src/data.mjs` içindeki `site.formEndpoint` alanına POST eder (Formspree veya benzeri).
Alan boşsa form tarayıcının e-posta istemcisini `hello@optioslab.com` adresine açar.

## Notlar

- İçerik `src/data.mjs` içindedir; HTML çıktısını elle düzenleme.
- Site Framer'a bağımlı değildir; dış CDN kullanılmaz, fontlar `assets/fonts` altındadır.
- Bu repoda gizli bilgi (anahtar, şifre, sunucu erişimi) tutulmaz.
