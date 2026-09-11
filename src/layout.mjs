import { site, nav, solutions, sectors } from "./data.mjs";

export const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const arrow = `<svg class="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;
export const check = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`;
const chev = `<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>`;

export const solBySlug = (slug) => solutions.find((s) => s.slug === slug);
export const secBySlug = (slug) => sectors.find((s) => s.slug === slug);

export function head({ title, description, path, type = "website" }) {
  const url = site.domain + path;
  const t = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(t)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(t)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${site.domain}${site.ogImage}">
<meta property="og:locale" content="tr_TR">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#06130e">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/Manrope-normal-800-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/Inter-normal-400-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/fonts/fonts.css">
<link rel="stylesheet" href="/assets/css/site.css?v=__V__">
<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.domain,
    logo: `${site.domain}/assets/img/optioslablogo-white.png`,
    email: site.email,
    address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
    description: "Tekrar eden müşteri, satış, finans ve operasyon işlerini AI destekli iş sistemlerine dönüştüren ekip."
  })}</script>
</head>
<body>`;
}

export function navbar(current = "") {
  const solMenu = `
    <div class="mega cols-2">
      <div class="mega-head">Çözümler</div>
      ${solutions.map((s) => `<a href="/cozumler/${s.slug}/"><b>${esc(s.short)}</b><small>${esc(s.kicker)}</small></a>`).join("")}
      <div class="mega-foot"><a href="/cozumler/">Tüm çözümler ${arrow}</a></div>
    </div>`;
  const secMenu = `
    <div class="mega cols-2">
      <div class="mega-head">Sektörler</div>
      ${sectors.map((s) => `<a href="/sektorler/${s.slug}/"><b>${esc(s.title)}</b></a>`).join("")}
      <div class="mega-foot"><a href="/sektorler/">Tüm sektörler ${arrow}</a></div>
    </div>`;
  return `
<header class="nav">
  <div class="wrap nav-in">
    <a class="brand" href="/" aria-label="OptiosLab ana sayfa"><img src="/assets/img/optioslablogo-white.png" alt="OptiosLab" width="925" height="260"></a>
    <ul class="nav-links">
      ${nav.map((n) => {
        const cur = current === n.href ? ' aria-current="page"' : "";
        if (n.menu) {
          return `<li><button type="button" aria-haspopup="true">${esc(n.label)} ${chev}</button>${n.menu === "solutions" ? solMenu : secMenu}</li>`;
        }
        return `<li><a href="${n.href}"${cur}>${esc(n.label)}</a></li>`;
      }).join("")}
    </ul>
    <div class="nav-right">
      <a class="btn btn-primary" href="/iletisim/">Ücretsiz Analiz Planla</a>
      <button class="nav-burger" type="button" aria-label="Menü" aria-expanded="false"><span></span></button>
    </div>
  </div>
</header>`;
}

export function cta({ title = "Süreçlerinizi konuşalım", lead, facts = true } = {}) {
  lead = lead ||
    "20 dakikalık bir görüşmede en çok zaman kaybettiren sürecinizi dinleyip hangi sistemle başlamanız gerektiğini birlikte belirleyelim. Ardından kapsam, takvim ve ölçütlerden oluşan yazılı bir yol haritası gönderelim. İhtiyaç analizi ücretsizdir.";
  return `
<section class="sec cta" id="iletisim">
  <div class="wrap">
    <div class="paper cta-paper reveal">
      <div class="eyebrow">Sonraki adım</div>
      <h2>${esc(title)}</h2>
      <p class="lead">${esc(lead)}</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="/iletisim/">Ücretsiz Analiz Planla ${arrow}</a>
        <a class="btn btn-ghost" href="mailto:${site.email}">${site.email}</a>
      </div>
      ${facts ? `
      <div class="cta-facts">
        <div><b>20 dk</b><span>ücretsiz analiz görüşmesi</span></div>
        <div><b>1 iş günü</b><span>başvuruya dönüş</span></div>
        <div><b>4–6 hafta</b><span>ilk sistem canlıda hedefi</span></div>
        <div><b>TR · DE · EN</b><span>görüşme dili</span></div>
      </div>` : ""}
    </div>
  </div>
</section>`;
}

export function footer() {
  return `
<footer class="footer">
  <div class="wrap">
    <div class="footer-top">
      <div>
        <img src="/assets/img/optioslablogo-white.png" alt="OptiosLab" width="925" height="260">
        <h3>Tekrar eden işleri kişilerin hafızasından çıkarıp ekiplerin her gün kullandığı sistemlere taşıyoruz.</h3>
        <p class="mono"><a href="mailto:${site.email}">${site.email}</a> &nbsp;·&nbsp; ${esc(site.city)}</p>
      </div>
      <div class="footer-cta">
        <div class="btn-row">
          <a class="btn btn-primary" href="/iletisim/">Ücretsiz Analiz Planla</a>
          <a class="btn btn-ghost" href="/cozumler/">Çözümleri İncele</a>
        </div>
        <div class="facts"><span>İSTANBUL MERKEZLİ</span><span>TR · DE · EN</span><span>${esc(site.hours)}</span></div>
      </div>
    </div>
    <div class="footer-cols">
      <div><h4>Çözümler</h4><ul>${solutions.map((s) => `<li><a href="/cozumler/${s.slug}/">${esc(s.short)}</a></li>`).join("")}</ul></div>
      <div><h4>Sektörler</h4><ul>${sectors.map((s) => `<li><a href="/sektorler/${s.slug}/">${esc(s.title)}</a></li>`).join("")}</ul></div>
      <div><h4>Şirket</h4><ul>
        <li><a href="/hakkimizda/">Hakkımızda</a></li>
        <li><a href="/hakkimizda/#ekip">Ekip</a></li>
        <li><a href="/hakkimizda/#prensipler">Çalışma prensipleri</a></li>
        <li><a href="/iletisim/">İletişim</a></li>
        <li><a href="/iletisim/#sss">Sık sorulanlar</a></li>
      </ul></div>
      <div><h4>Yasal</h4><ul>
        <li><a href="/gizlilik-politikasi/">Gizlilik Politikası</a></li>
        <li><a href="/cerez-politikasi/">Çerez Politikası</a></li>
        <li><a href="/kullanim-kosullari/">Kullanım Koşulları</a></li>
        <li><a href="/kabul-edilebilir-kullanim/">Kabul Edilebilir Kullanım</a></li>
      </ul></div>
    </div>
    <div class="footer-bot">
      <div>© <span data-year>2026</span> OPTIOSLAB — Tüm hakları saklıdır.</div>
      <div class="links"><a href="mailto:${site.email}">E-POSTA</a><a href="/iletisim/">İLETİŞİM</a></div>
    </div>
  </div>
</footer>
<script src="/assets/js/site.js?v=__V__" defer></script>
</body>
</html>`;
}

export function pageHero({ crumbs = [], eyebrow, title, kicker, lead, buttons, compact = false, aside = "" }) {
  return `
<section class="page-hero${compact ? " compact" : ""}">
  <div class="wrap">
    ${crumbs.length ? `<nav class="crumbs" aria-label="Sayfa yolu"><a href="/">Ana Sayfa</a>${crumbs.map((c) => `<span>${c.href ? `<a href="${c.href}">${esc(c.label)}</a>` : esc(c.label)}</span>`).join("")}</nav>` : ""}
    <div class="${aside ? "hero-in" : ""}">
      <div>
        ${eyebrow ? `<div class="eyebrow">${esc(eyebrow)}</div>` : ""}
        <h1>${title}</h1>
        ${kicker ? `<p class="kicker">${esc(kicker)}</p>` : ""}
        ${lead ? `<p class="lead">${esc(lead)}</p>` : ""}
        ${buttons ? `<div class="btn-row">${buttons}</div>` : ""}
      </div>
      ${aside}
    </div>
  </div>
</section>`;
}

export function faqBlock(items, { id = "sss", title = "Merak edilenler", eyebrow = "Sık sorulanlar", dark = false, idx = "" } = {}) {
  return `
<section class="sec" id="${id}" data-rail="${id}">
  <div class="wrap blk">
    <div class="blk-head reveal">
      ${idx ? `<span class="idx"><b>${idx}</b>${esc(eyebrow)}</span>` : `<div class="eyebrow">${esc(eyebrow)}</div>`}
      <h2>${esc(title)}</h2>
      <p class="muted" style="margin-top:14px">Başka sorunuz mu var? <a href="/iletisim/" style="color:var(--acc);font-weight:600">Bize yazın →</a></p>
    </div>
    <div class="faq reveal" data-delay="1">
      ${items.map((f) => `<details><summary>${esc(f.q)}<i class="plus"></i></summary><p>${esc(f.a)}</p></details>`).join("")}
    </div>
  </div>
</section>`;
}

/* ürün ekranı taklitleri */
export function mockPanel(kind, { title = "OptiosLab · Operasyon Paneli", active = false } = {}) {
  const views = {
    sales: `
      <div class="kpis">
        <div class="kpi"><b>48</b><span>bugün gelen talep</span></div>
        <div class="kpi acc"><b>41</b><span>otomatik sınıflanan</span></div>
        <div class="kpi"><b>12</b><span>hazır teklif taslağı</span></div>
        <div class="kpi"><b>3</b><span>onay bekleyen</span></div>
      </div>
      <div class="rows">
        <div class="row"><div>Yılmaz Metal · 240 adet flanş <small>web formu · 09:41</small></div><span class="tag ok">taslak hazır</span><small>4 dk</small></div>
        <div class="row"><div>Kaya Lojistik · yıllık sözleşme <small>e-posta · 09:38</small></div><span class="tag wait">onayda</span><small>A. Genel</small></div>
        <div class="row"><div>Demir A.Ş. · fiyat listesi sorusu <small>whatsapp · 09:32</small></div><span class="tag ok">yanıtlandı</span><small>2 dk</small></div>
        <div class="row"><div>Arslan Ticaret · eksik miktar <small>e-posta · 09:20</small></div><span class="tag warn">bilgi istendi</span><small>otomatik</small></div>
      </div>`,
    support: `
      <div class="kpis">
        <div class="kpi"><b>126</b><span>açık talep</span></div>
        <div class="kpi acc"><b>6 dk</b><span>ortalama ilk dönüş</span></div>
        <div class="kpi"><b>9</b><span>acil</span></div>
        <div class="kpi"><b>3</b><span>süresi geçen</span></div>
      </div>
      <div class="rows">
        <div class="row"><div>Kargom nerede? · #4821 <small>whatsapp · 10:02</small></div><span class="tag ok">otomatik yanıt</span><small>kargo</small></div>
        <div class="row"><div>İade talebi · #4819 <small>instagram · 09:58</small></div><span class="tag wait">müşteri ekibi</span><small>S. Yıldırım</small></div>
        <div class="row"><div>Fatura düzeltme · #4815 <small>e-posta · 09:44</small></div><span class="tag warn">acil</span><small>finans</small></div>
        <div class="row"><div>Ürün bilgisi · #4812 <small>web · 09:31</small></div><span class="tag ok">taslak onaylandı</span><small>3 dk</small></div>
      </div>`,
    finance: `
      <div class="kpis">
        <div class="kpi"><b>37</b><span>bu hafta gelen belge</span></div>
        <div class="kpi acc"><b>34</b><span>otomatik okunan</span></div>
        <div class="kpi"><b>5</b><span>onay bekleyen</span></div>
        <div class="kpi"><b>2</b><span>uyumsuz</span></div>
      </div>
      <div class="rows">
        <div class="row"><div>Fatura · Öz Ambalaj · 48.600 ₺ <small>e-posta eki · siparişle eşleşti</small></div><span class="tag ok">kaydedildi</span><small>Logo</small></div>
        <div class="row"><div>Fatura · Net Kargo · 12.340 ₺ <small>tutar sınırı üstü</small></div><span class="tag wait">onayda</span><small>B. Akagündüz</small></div>
        <div class="row"><div>İrsaliye · Star Plastik <small>miktar farkı: 20 adet</small></div><span class="tag warn">kontrol</span><small>satın alma</small></div>
        <div class="row"><div>Dekont · Banka · 9.900 ₺ <small>ödeme eşleşti</small></div><span class="tag ok">kapatıldı</span><small>otomatik</small></div>
      </div>`,
    ops: `
      <div class="kpis">
        <div class="kpi"><b>1.284</b><span>açık sipariş</span></div>
        <div class="kpi"><b>96</b><span>bekleyen sevkiyat</span></div>
        <div class="kpi acc"><b>7</b><span>kritik stok uyarısı</span></div>
        <div class="kpi"><b>3</b><span>pazaryeri kanalı</span></div>
      </div>
      <div class="rows">
        <div class="row"><div>SKU 4410 · siyah, L <small>depo 12 · mağaza 3 · online 0</small></div><span class="tag warn">kritik</span><small>tedarik taslağı</small></div>
        <div class="row"><div>Trendyol · 214 sipariş <small>bugün · otomatik aktarıldı</small></div><span class="tag ok">senkron</span><small>08:00</small></div>
        <div class="row"><div>Sevkiyat listesi · 14 Eyl <small>96 koli · 3 araç</small></div><span class="tag ok">hazır</span><small>06:30</small></div>
        <div class="row"><div>Hepsiburada · 2 geciken <small>termin aşıldı</small></div><span class="tag warn">uyarı gitti</span><small>operasyon</small></div>
      </div>`,
    report: `
      <div class="kpis">
        <div class="kpi"><b>₺4,2M</b><span>aylık ciro</span></div>
        <div class="kpi acc"><b>+%12</b><span>geçen aya göre</span></div>
        <div class="kpi"><b>%34</b><span>teklif dönüşümü</span></div>
        <div class="kpi"><b>3</b><span>hedef sapması</span></div>
      </div>
      <div class="bars" aria-hidden="true">
        <i style="height:38%"></i><i style="height:52%"></i><i style="height:46%"></i><i style="height:64%"></i><i style="height:58%"></i><i style="height:78%"></i><i style="height:92%"></i>
      </div>
      <div class="rows">
        <div class="row"><div>Haftalık yönetim özeti <small>pazartesi 07:00 · 4 kişiye</small></div><span class="tag ok">gönderildi</span><small>otomatik</small></div>
        <div class="row"><div>Ege bölgesi satış hedefi <small>%18 altında · 2. hafta</small></div><span class="tag warn">uyarı</span><small>satış md.</small></div>
      </div>`,
    comms: `
      <div class="kpis">
        <div class="kpi"><b>4</b><span>bugünkü toplantı</span></div>
        <div class="kpi acc"><b>17</b><span>çıkarılan görev</span></div>
        <div class="kpi"><b>5</b><span>bu hafta biten</span></div>
        <div class="kpi"><b>2</b><span>geciken</span></div>
      </div>
      <div class="rows">
        <div class="row"><div>Kaya Lojistik · haftalık görüşme <small>özet + 5 görev · 11:10</small></div><span class="tag ok">özetlendi</span><small>Notion</small></div>
        <div class="row"><div>Teklif revizesi · A. Genel <small>söz verilen: 12 Eyl</small></div><span class="tag wait">yaklaşıyor</span><small>hatırlatıldı</small></div>
        <div class="row"><div>Sözleşme taslağı · hukuk <small>söz verilen: 8 Eyl</small></div><span class="tag warn">gecikti</span><small>2 gün</small></div>
        <div class="row"><div>E-posta zinciri · 14 mesaj <small>karar: fiyat sabit kalacak</small></div><span class="tag ok">özet</span><small>otomatik</small></div>
      </div>`
  };
  return `<div class="panel-view${active ? " is-active" : ""}" data-view="${kind}">${views[kind]}</div>`;
}

export function panelShell(inner, { title = "OptiosLab · Operasyon Paneli", foot = true } = {}) {
  return `
<div class="panel">
  <div class="panel-bar"><span class="dots"><i></i><i></i><i></i></span><span>${esc(title)}</span><span class="live">canlı</span></div>
  <div class="panel-body">${inner}</div>
  ${foot ? `<div class="panel-foot"><span>son güncelleme <b>az önce</b></span><span>insan onayı bekleyen <b>3</b></span></div>` : ""}
</div>`;
}
