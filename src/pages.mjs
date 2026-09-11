import {
  site, solutions, sectors, tasks, why, tour, process, pricing, commitments, compare,
  integrations, faq, team, principles, story
} from "./data.mjs";
import {
  esc, arrow, check, head, navbar, cta, footer, pageHero, faqBlock, mockPanel, panelShell, solBySlug, secBySlug
} from "./layout.mjs";

/* ------------------------------------------------------------------ */
/* ANA SAYFA                                                           */
/* ------------------------------------------------------------------ */
export function home() {
  const heroChips = [
    { l: "Satış", line: "Gelen talepler tek kuyruğa düşer, teklif taslağı dakikalar içinde hazır olur." },
    { l: "Müşteri Hizmetleri", line: "Her mesaj okunur, önceliklenir ve doğru ekibe gider; kimse cevapsız kalmaz." },
    { l: "Finans", line: "Fatura ve evraklar okunur, eşleştirilir, onaya düşer, programınıza kaydedilir." },
    { l: "Operasyon", line: "Stok ve sipariş tek panelde; kritik seviyede sistem kendisi uyarır." },
    { l: "Raporlama", line: "Rapor için veri toplamak biter; yönetim özeti her hafta kendi gelir." }
  ];
  const kinds = ["sales", "support", "finance", "ops", "report"];
  const rail = [
    ["01", "neden", "Neden"], ["02", "akis", "Akış"], ["03", "cozumler", "Çözümler"], ["04", "isler", "İşler"],
    ["05", "sektorler", "Sektörler"], ["06", "kiyas", "Kıyas"], ["07", "surec", "Süreç"], ["08", "sss", "SSS"]
  ];
  const idx = (n, label) => `<span class="idx"><b>${n}</b>${esc(label)}</span>`;

  return `${head({
    title: "",
    description: "OptiosLab; müşteri takibi, teklif, fatura, stok, raporlama ve operasyon işlerini mevcut araçlarınıza bağlı AI destekli iş sistemlerine dönüştürür. Ücretsiz ihtiyaç analizi.",
    path: "/"
  })}
${navbar("/")}
<nav class="rail" aria-label="Bölümler">
  ${rail.map(([n, id, l]) => `<a href="#${id}"><b>${n}</b><span>${esc(l)}</span></a>`).join("")}
</nav>
<main>
<!-- HERO -->
<section class="hero" data-hero data-lines='${JSON.stringify(heroChips.map((c) => c.line)).replace(/'/g, "&#39;")}'>
  <div class="wrap">
    <div class="eyebrow">AI destekli iş sistemleri · İstanbul</div>
    <h1>Tekrar eden işleri ekibiniz değil, <span class="hl">sisteminiz</span> yapsın</h1>
    <p class="lead">Hazır paket değil: mevcut e-posta, WhatsApp, Excel, muhasebe ve CRM programlarınıza bağlanır, gerçek işlerinizle test edilir, ekibinizin günlük kullanımına açılır. Ekibiniz karar verir; sistem tekrar eden işi yürütür.</p>
    <div class="btn-row">
      <a class="btn btn-primary" href="/iletisim/">Ücretsiz Analiz Planla ${arrow}</a>
      <a class="btn btn-ghost" href="/cozumler/">Çözümleri İncele</a>
    </div>
    <p class="fine">İhtiyaç analizi ücretsiz · 20 dk · Başvuruya 1 iş günü içinde dönüş</p>

    <div class="feed">
      <div class="feed-tabs" role="tablist" aria-label="Çözüm alanları">
        ${heroChips.map((c, i) => `<button class="chip${i === 0 ? " is-active" : ""}" type="button" role="tab">${esc(c.l)}</button>`).join("")}
      </div>
      <p class="rotating" aria-live="polite"><span>${esc(heroChips[0].line)}</span></p>
      ${panelShell(kinds.map((k, i) => mockPanel(k, { active: i === 0 })).join(""), { title: "OptiosLab · Canlı akış" })}
      <p class="panel-note">örnek ekran · veriler temsilidir</p>
    </div>
  </div>
</section>

<!-- RAKAMLAR -->
<section class="sec slim">
  <div class="wrap">
    <div class="stats">
      <div class="stat reveal"><b>20 dk</b><strong>Ücretsiz analiz</strong><span>ilk görüşme, süreç seçimi</span></div>
      <div class="stat reveal" data-delay="1"><b>4–6 hf</b><strong>İlk sistem canlıda</strong><span>hedeflenen kurulum süresi</span></div>
      <div class="stat reveal" data-delay="2"><b>6</b><strong>Çözüm alanı</strong><span>satıştan raporlamaya</span></div>
      <div class="stat reveal" data-delay="3"><b>TR · DE</b><strong>Türkiye ve Almanya</strong><span>Türkçe, Almanca, İngilizce</span></div>
    </div>
  </div>
</section>

<!-- 01 NEDEN -->
<section class="sec" id="neden" data-rail>
  <div class="wrap blk">
    <div class="blk-head reveal">
      ${idx("01", "Neden OptiosLab")}
      <h2>Otomasyonda en çok sorulan dört soruya net cevap</h2>
    </div>
    <ul class="numlist reveal" data-delay="1">
      ${why.map((w, i) => `<li><span class="n">0${i + 1}</span><div><h3>${esc(w.t)}</h3><p>${esc(w.d)}</p></div></li>`).join("")}
    </ul>
  </div>
</section>

<!-- 02 AKIŞ -->
<section class="sec" id="akis" data-rail>
  <div class="wrap blk wide">
    <div class="blk-head reveal">
      ${idx("02", "Sistemin içinde bir tur")}
      <h2>Bir talep sisteme düştüğünde ne olur?</h2>
      <p class="lead">Talep girişten rapora kadar aynı sistemde ilerler. Hangi adımı sistemin yapacağı, hangi kararı ekibinizin vereceği baştan yazılır.</p>
    </div>
    <div class="pipe reveal" data-delay="1">
      ${tour.map((s, i) => `
      <div class="paper pipe-card">
        <span class="n">0${i + 1}</span>
        <h3>${esc(s.t)}</h3>
        <p>${esc(s.d)}</p>
        <div class="tag-line">${esc(s.tag)}</div>
      </div>`).join("")}
    </div>
  </div>
</section>

<!-- 03 ÇÖZÜMLER -->
<section class="sec" id="cozumler" data-rail>
  <div class="wrap blk wide">
    <div class="blk-head reveal">
      ${idx("03", "Çözümler")}
      <h2>Altı çözüm alanı, tek mühendislik ekibi</h2>
      <a class="more" href="/cozumler/">Tümünü gör</a>
    </div>
    <div class="cards cards-3">
      ${solutions.map((s, i) => `
      <a class="card reveal" data-delay="${i % 3}" href="/cozumler/${s.slug}/">
        <span class="n">${s.num}</span>
        <h3>${esc(s.short)}</h3>
        <span class="kicker">${esc(s.kicker)}</span>
        <p>${esc(s.summary)}</p>
        <span class="go">İncele</span>
      </a>`).join("")}
    </div>
  </div>
</section>

<!-- 04 İŞLER -->
<section class="sec" id="isler" data-rail>
  <div class="wrap blk">
    <div class="blk-head reveal">
      ${idx("04", "Sisteme devredilebilen işler")}
      <h2>12 iş,<br>6 çözüm</h2>
      <p class="lead">Hepsini bir anda kurmak zorunda değilsiniz. En çok zaman kaybettiren işten başlar, zaman içinde büyütürüz.</p>
      <a class="more" href="/cozumler/">Çözümleri incele</a>
    </div>
    <div class="tasks reveal" data-delay="1">
      ${tasks.map((t) => `<a class="task" href="/cozumler/${t.s}/"><span>${esc(t.t)}</span><small>${esc(solBySlug(t.s).short)}</small></a>`).join("")}
    </div>
  </div>
</section>

<!-- 05 SEKTÖRLER -->
<section class="sec" id="sektorler" data-rail>
  <div class="wrap blk wide">
    <div class="blk-head reveal">
      ${idx("05", "Sektörler")}
      <h2>Sektörünüzün kendi problemleri var</h2>
      <p class="lead">Üretimdeki termin sorusu ile klinikteki randevu hatırlatması aynı iş değil. Her sektöre kendi akışıyla yaklaşıyoruz.</p>
    </div>
    <div class="tiles">
      ${sectors.map((s, i) => `
      <a class="paper tile reveal" data-delay="${i % 4}" href="/sektorler/${s.slug}/">
        <span class="n">${s.num} — SEKTÖR</span>
        <h3>${esc(s.title)}</h3>
        <ul>${s.problems.slice(0, 2).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <span class="go">Akışı gör</span>
      </a>`).join("")}
    </div>
  </div>
</section>

<!-- 06 KIYAS -->
<section class="sec" id="kiyas" data-rail>
  <div class="wrap blk wide">
    <div class="blk-head reveal">
      ${idx("06", "Dürüst kıyas")}
      <h2>Manuel süreç mi, kurulu sistem mi?</h2>
      <p class="lead">İkisi de çalışır. Fark, bilginin nerede durduğuna ve işin kime bağlı olduğuna gelince ortaya çıkar.</p>
    </div>
    <div class="compare-wrap reveal" data-delay="1">
      <table class="compare">
        <thead><tr>${compare.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead>
        <tbody>${compare.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
    <p class="compare-note">Kıyas genel bir tabloyu gösterir. Sizin sürecinizde manuel yol daha mantıklıysa bunu ilk görüşmede açıkça söyleriz.</p>
  </div>
</section>

<!-- 07 SÜREÇ -->
<section class="sec" id="surec" data-rail>
  <div class="wrap blk wide">
    <div class="blk-head reveal">
      ${idx("07", "Nasıl çalışıyoruz")}
      <h2>Altı adım, her aşamada yazılı çıktı</h2>
    </div>
    <div class="steps reveal" data-delay="1">
      ${process.map((p, i) => `<div class="step"><span class="n">0${i + 1}</span><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></div>`).join("")}
    </div>
    <div class="pricebox reveal">
      <div class="pricebox-head">
        <h3>Fiyatı ne belirler?</h3>
        <span class="pill" style="color:var(--acc);border-color:var(--acc-3)">■&nbsp; İhtiyaç analizi ücretsiz</span>
      </div>
      <div class="cards">
        ${pricing.map((p) => `<div class="card"><h3 style="font-size:1.05rem">${esc(p.t)}</h3><p>${esc(p.d)}</p></div>`).join("")}
      </div>
    </div>
  </div>
</section>

<!-- ENTEGRASYON -->
<section class="sec">
  <div class="wrap blk">
    <div class="blk-head reveal">
      <div class="eyebrow">Entegrasyonlar</div>
      <h2>Kullandığınız programlarla konuşur</h2>
      <p class="lead">Program değiştirmenizi istemiyoruz. Sistem mevcut araçlarınıza bağlanır; bilgiyi oradan okur, oraya yazar.</p>
    </div>
    <div class="chips-wrap reveal" data-delay="1">
      ${integrations.map((n) => `<span class="pill">${esc(n)}</span>`).join("")}
      <span class="pill more">+ API sunan diğer programlar</span>
    </div>
  </div>
</section>

<!-- TAAHHÜT -->
<section class="sec">
  <div class="wrap">
    <div class="commit reveal">
      <div class="commit-head">
        <div><div class="eyebrow">Baştan netleşen şeyler</div><h2>Sözleşmeye giren üç madde</h2></div>
        <p>Pazarlama vaadi değil; her teklifin içinde yazılı olur.</p>
      </div>
      <div class="commit-grid">
        ${commitments.map((c) => `
        <div class="commit-item">
          <div class="label">${esc(c.label)}</div>
          <div class="big">${esc(c.big)}<small>${esc(c.small)}</small></div>
          <div class="rule"><i></i><i></i><i></i></div>
          <h3>${esc(c.t)}</h3>
          <p>${esc(c.d)}</p>
        </div>`).join("")}
      </div>
    </div>
  </div>
</section>

${faqBlock(faq.slice(0, 6), { idx: "08" })}
${cta()}
</main>
${footer()}`;
}

/* ------------------------------------------------------------------ */
/* ÇÖZÜMLER                                                            */
/* ------------------------------------------------------------------ */
export function solutionsIndex() {
  return `${head({
    title: "Çözümler",
    description: "Satış, müşteri hizmetleri, finans, operasyon, raporlama ve iletişim süreçleri için AI destekli iş sistemleri. Mevcut programlarınıza bağlanır, haftalar içinde canlıya alınır.",
    path: "/cozumler/"
  })}
${navbar("/cozumler/")}
<main>
${pageHero({
    crumbs: [{ label: "Çözümler" }],
    eyebrow: "Çözümler",
    title: "Altı çözüm alanı,<br>tek mühendislik ekibi",
    lead: "Her çözüm; talebin girişinden rapora kadar aynı mantıkla kurulur: topla, anla, yönlendir, üret, raporla. Hangi adımı sistemin yapacağı, hangi kararı ekibinizin vereceği baştan yazılır.",
    buttons: `<a class="btn btn-primary" href="/iletisim/">Ücretsiz Analiz Planla ${arrow}</a><a class="btn btn-ghost" href="#liste">Çözümlere git</a>`
  })}
<section class="sec sec-soft" id="liste">
  <div class="wrap">
    <div class="cards cards-2">
      ${solutions.map((s, i) => `
      <a class="card lg reveal" data-delay="${i % 2}" href="/cozumler/${s.slug}/">
        <span class="n">${s.num}</span>
        <h3>${esc(s.title)}</h3>
        <span class="kicker">${esc(s.kicker)}</span>
        <p>${esc(s.lead)}</p>
        <div class="sol-links" style="margin-top:8px">${s.sectors.slice(0, 3).map((x) => `<span class="pill" style="font-size:.76rem">${esc(secBySlug(x).title)}</span>`).join("")}</div>
        <span class="go">İncele</span>
      </a>`).join("")}
    </div>
  </div>
</section>
<section class="sec sec-light" style="padding-top:0">
  <div class="wrap two">
    <div class="sticky reveal">
      <div class="eyebrow">Sisteme devredilebilen işler</div>
      <h2>Hangi işle başlamalı?</h2>
      <p class="muted" style="margin-top:16px;max-width:38ch">En çok zaman kaybettiren ve en sık tekrar eden işle. İlk görüşmede bunu birlikte seçeriz.</p>
    </div>
    <div class="tasks reveal" data-delay="1">
      ${tasks.map((t) => `<a class="task" href="/cozumler/${t.s}/"><span>${esc(t.t)}</span><small>${esc(solBySlug(t.s).short)}</small></a>`).join("")}
    </div>
  </div>
</section>
${cta({ title: "Hangi çözümle başlamalı?", lead: "Emin değilseniz sorun değil. 20 dakikalık görüşmede süreçlerinizi dinleyip en çok zaman kaybettiren işi birlikte seçelim. Ardından kapsam ve takvimi yazılı olarak gönderelim." })}
</main>
${footer()}`;
}

export function solutionDetail(s) {
  const others = solutions.filter((x) => x.slug !== s.slug);
  return `${head({
    title: s.title,
    description: s.lead,
    path: `/cozumler/${s.slug}/`
  })}
${navbar("/cozumler/")}
<main>
${pageHero({
    crumbs: [{ label: "Çözümler", href: "/cozumler/" }, { label: s.title }],
    eyebrow: `Çözüm ${s.num}`,
    title: esc(s.title),
    kicker: s.kicker,
    lead: s.lead,
    buttons: `<a class="btn btn-primary" href="/iletisim/">Ücretsiz Analiz Planla ${arrow}</a><a class="btn btn-ghost" href="#akis">Nasıl çalışır?</a>`,
    aside: `<div>${panelShell(mockPanel(s.mock, { active: true }), { title: `OptiosLab · ${s.short}` })}<p class="panel-note">örnek ekran · veriler temsilidir</p></div>`
  })}

<section class="sec sec-soft">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="eyebrow">Neler dahil</div>
      <h2>Kapsam</h2>
    </div>
    <ul class="checks reveal" data-delay="1">${s.scope.map((c) => `<li>${check}<span>${esc(c)}</span></li>`).join("")}</ul>
    <div class="note reveal"><b>Fiyatlandırma:</b> Sürecin kapsamına ve bağlanacak programlara göre değişir. İhtiyaç analizi ücretsiz; net teklif ilk görüşmeden sonra.</div>
  </div>
</section>

<section class="sec sec-dark skew" id="akis">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="eyebrow">Nasıl çalışır</div>
      <h2>Beş adımda akış</h2>
      <p class="lead">Talep sisteme düştüğü andan kayda kadar aynı akışta ilerler. Onay gereken adımda bekler; kim onayladı, ne zaman onayladı kayda geçer.</p>
    </div>
    <ol class="flow reveal" data-delay="1">${s.flow.map((f) => `<li><h3>${esc(f.t)}</h3><p>${esc(f.d)}</p></li>`).join("")}</ol>
  </div>
</section>

<section class="sec sec-light">
  <div class="wrap two">
    <div class="sticky reveal">
      <div class="eyebrow">Sık karşılaşılan sorunlar</div>
      <h2>Bunlar tanıdık geliyorsa</h2>
      <p class="muted" style="margin-top:16px;max-width:38ch">Bu sistemin kurulduğu şirketlerde ilk görüşmede en sık duyduğumuz cümleler.</p>
    </div>
    <ul class="probs reveal" data-delay="1">${s.problems.map((p, k) => `<li><span class="n">0${k + 1}</span><span>${esc(p)}</span></li>`).join("")}</ul>
  </div>
</section>

<section class="sec sec-soft" style="padding-top:0">
  <div class="wrap">
    <div class="cards cards-2">
      <div class="card reveal">
        <div class="eyebrow" style="margin-bottom:6px">Bağlanan programlar</div>
        <h3>Mevcut araçlarınızla çalışır</h3>
        <p>Sık bağladığımız programlardan bazıları. Listede olmayan bir program kullanıyorsanız API veya dosya aktarımıyla çözüm buluruz.</p>
        <div class="chips-wrap" style="margin-top:8px">${s.tools.map((t) => `<span class="pill">${esc(t)}</span>`).join("")}</div>
      </div>
      <div class="card reveal" data-delay="1">
        <div class="eyebrow" style="margin-bottom:6px">Kimin için</div>
        <h3>Bu sistemi en çok kullanan sektörler</h3>
        <p>Sektöre göre akış değişir; başlangıç noktası ise aynıdır: en çok zaman kaybettiren iş.</p>
        <div class="sol-links" style="margin-top:8px">${s.sectors.map((x) => `<a href="/sektorler/${x}/">${esc(secBySlug(x).title)}</a>`).join("")}</div>
      </div>
    </div>
  </div>
</section>

${faqBlock(s.faq, { title: "Bu çözümle ilgili sorular", eyebrow: "Sık sorulanlar" })}

<section class="sec sec-soft">
  <div class="wrap">
    <div class="sec-head split reveal">
      <div><div class="eyebrow">Diğer çözümler</div><h2>Birlikte çalışan sistemler</h2></div>
      <a class="more" href="/cozumler/">Tümünü gör</a>
    </div>
    <div class="others reveal" data-delay="1">
      ${others.map((o) => `<a href="/cozumler/${o.slug}/"><b>${esc(o.short)}</b><span>${esc(o.kicker)}</span></a>`).join("")}
    </div>
  </div>
</section>

${cta({ title: `${s.short} için görüşelim`, lead: "20 dakikalık görüşmede mevcut akışınızı dinleyip bu sistemin sizde nasıl çalışacağını, neyin dahil olacağını ve ne kadar süreceğini netleştirelim. İhtiyaç analizi ücretsizdir." })}
</main>
${footer()}`;
}

/* ------------------------------------------------------------------ */
/* SEKTÖRLER                                                           */
/* ------------------------------------------------------------------ */
export function sectorsIndex() {
  return `${head({
    title: "Sektörler",
    description: "Üretim, toptan, e-ticaret, lojistik, inşaat, sağlık, eğitim ve hizmet sektörlerinde tekrar eden işleri sisteme devreden AI destekli çözümler.",
    path: "/sektorler/"
  })}
${navbar("/sektorler/")}
<main>
${pageHero({
    crumbs: [{ label: "Sektörler" }],
    eyebrow: "Sektörler",
    title: "Sektörünüzün kendi<br>problemleri var",
    lead: "Üretimdeki termin sorusu ile klinikteki randevu hatırlatması aynı iş değil. Her sektöre kendi akışıyla yaklaşıyoruz; başlangıç noktası ise hep aynı: en çok zaman kaybettiren iş.",
    buttons: `<a class="btn btn-primary" href="/iletisim/">Sektörünüze özel görüşme ${arrow}</a>`
  })}
<section class="sec sec-soft">
  <div class="wrap">
    <div class="cards cards-2">
      ${sectors.map((s, i) => `
      <a class="card lg reveal" data-delay="${i % 2}" href="/sektorler/${s.slug}/">
        <span class="n">${s.num} — SEKTÖR</span>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.lead)}</p>
        <div class="mono" style="color:var(--ink-muted);margin-top:6px;letter-spacing:.1em;text-transform:uppercase">Sık karşılaşılan sorunlar</div>
        <ul class="probs" style="gap:6px">${s.problems.slice(0, 3).map((p, k) => `<li style="padding:9px 12px;font-size:.88rem"><span class="n">0${k + 1}</span><span>${esc(p)}</span></li>`).join("")}</ul>
        <span class="go">İncele</span>
      </a>`).join("")}
    </div>
  </div>
</section>
${cta({ title: "Sektörünüzü konuşalım", lead: "Listede olmayan bir sektörde misiniz? Sorun değil. Tekrar eden iş nerede, bilgi kimde bekliyor: 20 dakikada birlikte bakalım." })}
</main>
${footer()}`;
}

export function sectorDetail(s) {
  const sols = s.solutions.map(solBySlug);
  return `${head({
    title: `${s.title} için AI destekli iş sistemleri`,
    description: `${s.lead} ${s.title} sektöründe sık karşılaşılan sorunlar ve bunları çözen sistemler.`,
    path: `/sektorler/${s.slug}/`
  })}
${navbar("/sektorler/")}
<main>
${pageHero({
    crumbs: [{ label: "Sektörler", href: "/sektorler/" }, { label: s.title }],
    eyebrow: `Sektör ${s.num}`,
    title: esc(s.title),
    lead: s.lead,
    buttons: `<a class="btn btn-primary" href="/iletisim/">Sektörünüze özel görüşme ${arrow}</a>`,
    compact: true
  })}
<section class="sec sec-light">
  <div class="wrap two">
    <div class="sticky reveal">
      <div class="eyebrow">Sık karşılaşılan sorunlar</div>
      <h2>Bunlar tanıdık geliyorsa</h2>
      <p class="muted" style="margin-top:16px;max-width:38ch">${esc(s.title)} şirketleriyle ilk görüşmede en sık duyduğumuz cümleler.</p>
    </div>
    <ul class="probs reveal" data-delay="1">${s.problems.map((p, k) => `<li><span class="n">0${k + 1}</span><span>${esc(p)}</span></li>`).join("")}</ul>
  </div>
</section>
<section class="sec sec-dark skew">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="eyebrow">Bu sorunları çözen sistemler</div>
      <h2>${esc(s.title)} için önerdiğimiz çözümler</h2>
      <p class="lead">Hepsini birden değil; en çok zaman kaybettiren işten başlarız. Sistemler aynı altyapıda çalışır, sonradan eklenen çözüm öncekiyle konuşur.</p>
    </div>
    <div class="cards cards-2">
      ${sols.map((x, i) => `
      <a class="card reveal" data-delay="${i % 2}" href="/cozumler/${x.slug}/">
        <span class="n">${x.num}</span>
        <h3>${esc(x.title)}</h3>
        <span class="kicker">${esc(x.kicker)}</span>
        <p>${esc(x.summary)}</p>
        <span class="go" style="color:var(--acc)">İncele</span>
      </a>`).join("")}
    </div>
  </div>
</section>
<section class="sec sec-soft">
  <div class="wrap">
    <div class="sec-head split reveal">
      <div><div class="eyebrow">Diğer sektörler</div><h2>Benzer akışlar</h2></div>
      <a class="more" href="/sektorler/">Tümünü gör</a>
    </div>
    <div class="others reveal" data-delay="1">
      ${sectors.filter((x) => x.slug !== s.slug).slice(0, 5).map((o) => `<a href="/sektorler/${o.slug}/"><b>${esc(o.title)}</b><span>${o.num} — sektör</span></a>`).join("")}
    </div>
  </div>
</section>
${cta({ title: `${s.title} sürecinizi konuşalım` })}
</main>
${footer()}`;
}

/* ------------------------------------------------------------------ */
/* HAKKIMIZDA                                                          */
/* ------------------------------------------------------------------ */
export function about() {
  return `${head({
    title: "Hakkımızda",
    description: "OptiosLab; tekrar eden müşteri, satış, finans ve operasyon işlerini ekiplerin her gün kullandığı AI destekli sistemlere dönüştüren İstanbul merkezli bir ekip.",
    path: "/hakkimizda/"
  })}
${navbar("/hakkimizda/")}
<main>
${pageHero({
    crumbs: [{ label: "Hakkımızda" }],
    eyebrow: "Hakkımızda",
    title: "İnsanlar karar versin.<br>Sistem tekrar eden işleri <span class=\"hl\">yönetsin</span>.",
    lead: "İnsan zamanı karar için değerlidir. Takip, kontrol ve tekrar eden işler sistemin görevidir. Biz bu düzeni kuruyoruz.",
    buttons: `<a class="btn btn-primary" href="/iletisim/">Bizimle görüşün ${arrow}</a><a class="btn btn-ghost" href="#ekip">Ekibi tanıyın</a>`
  })}
<section class="sec sec-light">
  <div class="wrap two">
    <div class="sticky reveal">
      <div class="eyebrow">Başlangıç</div>
      <h2>OptiosLab nasıl çalışır?</h2>
    </div>
    <div class="reveal" data-delay="1" style="display:grid;gap:18px;font-size:1.1rem;color:var(--tx-muted);max-width:62ch">
      ${story.map((p) => `<p>${esc(p)}</p>`).join("")}
    </div>
  </div>
</section>
<section class="sec sec-dark skew" id="prensipler">
  <div class="wrap two">
    <div class="sticky reveal">
      <div class="eyebrow">Nasıl çalışıyoruz</div>
      <h2>Yaptığımız her şeye yön veren prensipler</h2>
      <p class="lead" style="margin-top:14px">Bunlar hedef değil; her projede, her kararda uyguladığımız kurallar.</p>
    </div>
    <ul class="numlist reveal" data-delay="1">
      ${principles.map((p, i) => `<li><span class="n">0${i + 1}</span><div><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></div></li>`).join("")}
    </ul>
  </div>
</section>
<section class="sec sec-soft" id="ekip">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="eyebrow">Ekip</div>
      <h2>Sistemleri kuran ekip</h2>
      <p class="lead">Süreçleri analiz ediyor, AI destekli iş akışlarını kuruyor ve gerçek iş üzerinde çalıştırıyoruz.</p>
    </div>
    <div class="team">
      ${team.map((m, i) => `
      <div class="member reveal" data-delay="${i % 3}">
        <div class="photo"><img src="${m.img}" alt="${esc(m.name)}" loading="lazy" style="object-position:${m.pos}"><span class="n">0${i + 1}</span></div>
        <div><h3>${esc(m.name)}</h3><p>${esc(m.role)}</p></div>
      </div>`).join("")}
    </div>
  </div>
</section>
<section class="sec sec-light" style="padding-top:0">
  <div class="wrap">
    <div class="sec-head reveal">
      <div class="eyebrow">Nasıl çalışıyoruz</div>
      <h2>Altı adım, her aşamada yazılı çıktı</h2>
    </div>
    <div class="timeline reveal" data-delay="1">
      ${process.map((p, i) => `<div class="tl"><span class="n">0${i + 1}</span><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p></div>`).join("")}
    </div>
  </div>
</section>
${cta({ title: "Birlikte çalışalım" })}
</main>
${footer()}`;
}

/* ------------------------------------------------------------------ */
/* İLETİŞİM                                                            */
/* ------------------------------------------------------------------ */
export function contact() {
  const sizes = ["1–10", "11–25", "26–50", "51–100", "101–250", "250+"];
  return `${head({
    title: "İletişim",
    description: "20 dakikalık ücretsiz analiz görüşmesi planlayın. En çok zaman kaybettiren sürecinizi birlikte belirleyelim; 1 iş günü içinde dönüş yapalım.",
    path: "/iletisim/"
  })}
${navbar("/iletisim/")}
<main>
${pageHero({
    crumbs: [{ label: "İletişim" }],
    eyebrow: "İletişim",
    title: "İlk sistem fırsatınızı<br>birlikte belirleyelim",
    lead: "Formu doldurun; 1 iş günü içinde dönüş yapıp 20 dakikalık ücretsiz analiz görüşmesini planlayalım. Görüşme sonunda ilk sistemin kapsamını ve sonraki adımı açıkça göreceksiniz.",
    compact: true
  })}
<section class="sec sec-soft">
  <div class="wrap contact">
    <form class="form reveal" data-contact data-endpoint="${site.formEndpoint}" data-mail="${site.email}" method="post" action="${site.formEndpoint || `mailto:${site.email}`}">
      <div class="grid2">
        <div class="field"><label for="f-name">Ad Soyad*</label><input id="f-name" name="Ad Soyad" required autocomplete="name" placeholder="Ayşe Yılmaz"></div>
        <div class="field"><label for="f-mail">E-posta*</label><input id="f-mail" name="E-posta" type="email" required autocomplete="email" placeholder="ayse@firma.com"></div>
      </div>
      <div class="grid2">
        <div class="field"><label for="f-co">Firma*</label><input id="f-co" name="Firma" required autocomplete="organization" placeholder="Firma adınız"></div>
        <div class="field"><label for="f-tel">Telefon</label><input id="f-tel" name="Telefon" type="tel" autocomplete="tel" placeholder="05xx xxx xx xx"></div>
      </div>
      <div class="field">
        <label>Çalışan sayısı</label>
        <div class="radios">${sizes.map((s, i) => `<label><input type="radio" name="Çalışan sayısı" value="${s}"${i === 1 ? " checked" : ""}><span>${s}</span></label>`).join("")}</div>
      </div>
      <div class="field"><label for="f-msg">Neyi otomatikleştirmek istiyorsunuz?*</label><textarea id="f-msg" name="Mesaj" required placeholder="Ekibinizin zamanını alan tekrarlayan işleri anlatın (ör. müşteri e-postaları, fatura işleme, veri girişi…)"></textarea></div>
      <input type="text" name="_gotcha" tabindex="-1" autocomplete="off" style="display:none">
      <p class="fine">Göndererek <a href="/kullanim-kosullari/" style="text-decoration:underline">kullanım koşullarımızı</a> ve <a href="/gizlilik-politikasi/" style="text-decoration:underline">gizlilik politikamızı</a> kabul etmiş olursunuz.</p>
      <button class="btn btn-primary" type="submit">Ücretsiz Analizimi Planla ${arrow}</button>
      <p class="status">Teşekkürler. Başvurunuzu inceleyip 1 iş günü içinde size ulaşacağız.</p>
    </form>
    <aside class="aside">
      <div class="card reveal" data-delay="1">
        <h3>Görüşmede ne olur?</h3>
        <ol>
          <li>En çok zaman kaybettiren sürecinizi dinleriz.</li>
          <li>Hangi adımın sisteme devredilebileceğini, hangi kararın sizde kalacağını netleştiririz.</li>
          <li>Kapsam, tahmini takvim ve ölçütlerden oluşan yazılı bir yol haritası göndeririz.</li>
        </ol>
      </div>
      <div class="card reveal" data-delay="2">
        <h3>Doğrudan ulaşın</h3>
        <p class="mono"><a href="mailto:${site.email}">${site.email}</a></p>
        <p>${esc(site.city)}<br>${esc(site.hours)}</p>
        <p class="mono" style="color:var(--ink-muted)">Görüşme dili: Türkçe · Almanca · İngilizce</p>
      </div>
      <div class="card reveal" data-delay="3">
        <h3>Size uygun olmayabilir</h3>
        <p>Otomasyonun size zaman veya para kazandırmayacağını görürsek bunu ilk görüşmede açıkça söyleriz.</p>
      </div>
    </aside>
  </div>
</section>
${faqBlock(faq, { title: "Sıkça sorulan sorular", eyebrow: "Cevaplar" })}
</main>
${footer()}`;
}

/* ------------------------------------------------------------------ */
/* YASAL                                                               */
/* ------------------------------------------------------------------ */
export function legal({ slug, title, description, updated = "9 Eylül 2026", body }) {
  return `${head({ title, description, path: `/${slug}/` })}
${navbar("")}
<main>
${pageHero({ crumbs: [{ label: "Yasal" }, { label: title }], eyebrow: "Yasal", title: esc(title), compact: true })}
<section class="sec sec-light">
  <div class="wrap prose">
    <p class="meta">SON GÜNCELLEME: ${esc(updated).toUpperCase()}</p>
    ${body}
  </div>
</section>
</main>
${footer()}`;
}

export const legalPages = [
  {
    slug: "gizlilik-politikasi",
    title: "Gizlilik Politikası",
    description: "OptiosLab web sitesi gizlilik politikası ve kişisel verilerin işlenmesine ilişkin bilgilendirme.",
    body: `
<h2>1. Giriş</h2>
<p>OptiosLab (“biz”) olarak kişisel verilerinizin korunmasına önem veriyoruz. Bu politika, optioslab.com web sitesini ziyaret ettiğinizde veya bizimle iletişime geçtiğinizde hangi verilerin toplandığını, nasıl kullanıldığını ve haklarınızı açıklar. Kişisel veriler, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) ve ilgili mevzuata uygun olarak işlenir.</p>
<h2>2. Toplanan veriler</h2>
<ul>
<li><b>İletişim formu:</b> Ad soyad, e-posta, firma adı, telefon (isteğe bağlı), çalışan sayısı ve mesajınız.</li>
<li><b>E-posta yazışmaları:</b> Bize gönderdiğiniz e-postaların içeriği ve iletişim bilgileriniz.</li>
<li><b>Teknik veriler:</b> Sunucu günlüklerinde IP adresi, tarayıcı türü, ziyaret edilen sayfalar ve zaman bilgisi.</li>
</ul>
<h2>3. Verilerin kullanım amacı</h2>
<ul>
<li>Talebinize dönüş yapmak ve analiz görüşmesini planlamak</li>
<li>Teklif ve proje sürecini yürütmek</li>
<li>Web sitesinin güvenliğini ve çalışmasını sağlamak</li>
<li>Yasal yükümlülükleri yerine getirmek</li>
</ul>
<p>Verileriniz pazarlama amacıyla üçüncü taraflara satılmaz veya kiralanmaz.</p>
<h2>4. Paylaşım</h2>
<p>Verileriniz yalnızca hizmetin sunulması için gerekli olduğunda barındırma, e-posta ve form altyapısı sağlayıcıları gibi hizmet sağlayıcılarla, gizlilik yükümlülükleri çerçevesinde paylaşılır. Yasal bir zorunluluk olması halinde yetkili kurumlarla paylaşılabilir.</p>
<h2>5. Saklama süresi</h2>
<p>İletişim verileri, talebin karşılanması ve olası bir iş ilişkisinin yürütülmesi için gerekli süre boyunca; yasal saklama yükümlülükleri varsa bu süreler boyunca saklanır. Süre sonunda silinir veya anonim hale getirilir.</p>
<h2>6. Haklarınız</h2>
<p>KVKK’nın 11. maddesi kapsamında; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya silinmesini isteme ve işlemeye itiraz etme haklarına sahipsiniz. Taleplerinizi <a href="mailto:${site.email}">${site.email}</a> adresine iletebilirsiniz.</p>
<h2>7. Güvenlik</h2>
<p>Verilerinizi yetkisiz erişime karşı korumak için uygun teknik ve idari önlemler alırız. Web sitesi HTTPS üzerinden sunulur.</p>
<h2>8. Değişiklikler</h2>
<p>Bu politika gerektiğinde güncellenebilir. Güncel sürüm her zaman bu sayfada yayımlanır.</p>
<h2>9. İletişim</h2>
<p>OptiosLab · İstanbul, Türkiye · <a href="mailto:${site.email}">${site.email}</a></p>`
  },
  {
    slug: "cerez-politikasi",
    title: "Çerez Politikası",
    description: "OptiosLab web sitesinde kullanılan çerezler ve tercihlerinizi nasıl yönetebileceğiniz.",
    body: `
<h2>1. Çerez nedir?</h2>
<p>Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Sitenin çalışmasını sağlamak ve kullanım tercihlerini hatırlamak için kullanılır.</p>
<h2>2. Bu sitede kullanılan çerezler</h2>
<p>optioslab.com statik bir web sitesidir ve kendi adına kalıcı izleme çerezi kullanmaz.</p>
<ul>
<li><b>Zorunlu çerezler:</b> Sitenin güvenli şekilde sunulması için barındırma altyapısının kullanabileceği teknik çerezler.</li>
<li><b>Üçüncü taraf hizmetler:</b> İletişim formu bir form hizmeti üzerinden gönderiliyorsa, bu hizmetin kendi çerez politikası geçerlidir.</li>
</ul>
<p>Analitik veya reklam çerezi kullanmaya başladığımızda bu sayfa güncellenir ve gerekli olduğu durumlarda onayınız istenir.</p>
<h2>3. Çerezleri yönetme</h2>
<p>Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Zorunlu çerezlerin engellenmesi sitenin bazı bölümlerinin çalışmasını etkileyebilir.</p>
<h2>4. İletişim</h2>
<p>Sorularınız için <a href="mailto:${site.email}">${site.email}</a> adresine yazabilirsiniz.</p>`
  },
  {
    slug: "kullanim-kosullari",
    title: "Kullanım Koşulları",
    description: "OptiosLab web sitesinin kullanım koşulları.",
    body: `
<h2>1. Kapsam</h2>
<p>Bu koşullar, optioslab.com web sitesinin kullanımını düzenler. Siteyi kullanarak bu koşulları kabul etmiş sayılırsınız. Hizmet sözleşmeleri, her proje için ayrıca imzalanan yazılı teklif ve sözleşmelerle düzenlenir.</p>
<h2>2. İçerik</h2>
<p>Sitedeki metin, görsel ve tasarımlar OptiosLab’a aittir ve izinsiz kopyalanamaz. Ürün ekranı görselleri temsilidir; örnek veriler gerçek müşteri bilgisi içermez.</p>
<h2>3. Bilgilendirme niteliği</h2>
<p>Sitede yer alan süre, kapsam ve süreç bilgileri genel bilgilendirme amaçlıdır; bağlayıcı bir teklif niteliği taşımaz. Bağlayıcı kapsam ve takvim, ihtiyaç analizi sonrasında yazılı teklifte belirlenir.</p>
<h2>4. Üçüncü taraf bağlantılar</h2>
<p>Site, üçüncü taraf web sitelerine bağlantı içerebilir. Bu sitelerin içeriğinden ve gizlilik uygulamalarından OptiosLab sorumlu değildir.</p>
<h2>5. Sorumluluk</h2>
<p>Site “olduğu gibi” sunulur. Sitenin kesintisiz veya hatasız çalışacağı garanti edilmez. Siteye erişimden veya kullanımından doğabilecek dolaylı zararlardan, yasaların izin verdiği ölçüde, sorumluluk kabul edilmez.</p>
<h2>6. Değişiklikler</h2>
<p>Bu koşullar önceden bildirim yapılmaksızın güncellenebilir. Güncel sürüm bu sayfada yayımlanır.</p>
<h2>7. Uygulanacak hukuk</h2>
<p>Bu koşullar Türkiye Cumhuriyeti hukukuna tabidir. Uyuşmazlıklarda İstanbul mahkemeleri ve icra daireleri yetkilidir.</p>
<h2>8. İletişim</h2>
<p><a href="mailto:${site.email}">${site.email}</a></p>`
  },
  {
    slug: "kabul-edilebilir-kullanim",
    title: "Kabul Edilebilir Kullanım Politikası",
    description: "OptiosLab tarafından kurulan AI destekli sistemlerin kullanımına ilişkin ilkeler.",
    body: `
<h2>1. Amaç</h2>
<p>Bu politika, OptiosLab tarafından kurulan AI destekli iş sistemlerinin ve web sitesinin hangi amaçlarla kullanılamayacağını belirler. Proje sözleşmelerinin ayrılmaz parçasıdır.</p>
<h2>2. Yasaklı kullanımlar</h2>
<ul>
<li>Yürürlükteki mevzuata aykırı faaliyetler</li>
<li>Kişisel verilerin ilgili kişinin bilgisi ve yasal dayanağı olmadan işlenmesi</li>
<li>Yanıltıcı, ayrımcı veya taciz edici içerik üretimi ve dağıtımı</li>
<li>İstenmeyen toplu ileti (spam) gönderimi</li>
<li>Üçüncü tarafların sistemlerine yetkisiz erişim veya bu sistemlerin kullanım koşullarının ihlali</li>
<li>Sistemlerin güvenlik önlemlerini aşma girişimleri</li>
</ul>
<h2>3. İnsan gözetimi</h2>
<p>Kurulan sistemlerde hangi adımların otomatik, hangilerinin insan onayına bağlı olacağı projede yazılı olarak belirlenir. Hukuki, mali veya kişilerle ilgili sonuç doğuran kararların nihai sorumluluğu sistemi kullanan kuruluşa aittir.</p>
<h2>4. Veri sorumluluğu</h2>
<p>Sisteme bağlanan veri kaynaklarının hukuka uygun şekilde toplanmış olması ve gerekli aydınlatmaların yapılmış olması müşterinin sorumluluğundadır. OptiosLab, sözleşme kapsamında veri işleyen sıfatıyla hareket eder.</p>
<h2>5. İhlal durumunda</h2>
<p>Bu politikanın ihlali halinde OptiosLab, ilgili hizmeti askıya alma veya sözleşmeyi feshetme hakkını saklı tutar.</p>
<h2>6. İletişim</h2>
<p><a href="mailto:${site.email}">${site.email}</a></p>`
  }
];

/* ------------------------------------------------------------------ */
/* 404 · YÖNLENDİRME                                                   */
/* ------------------------------------------------------------------ */
export function notFound() {
  return `${head({ title: "Sayfa bulunamadı", description: "Aradığınız sayfa taşınmış veya kaldırılmış olabilir.", path: "/404/" })}
${navbar("")}
<main>
<section class="sec sec-dark nf">
  <div class="wrap">
    <div class="eyebrow" style="justify-content:center;display:flex">Hata</div>
    <h1>404</h1>
    <p class="lead" style="margin:16px auto 28px">Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
    <div class="btn-row" style="justify-content:center">
      <a class="btn btn-primary" href="/">Ana sayfaya dön</a>
      <a class="btn btn-ghost" href="/cozumler/">Çözümler</a>
    </div>
  </div>
</section>
</main>
${footer()}`;
}

export function redirectStub(to) {
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8"><title>Yönlendiriliyor…</title>
<meta name="robots" content="noindex"><link rel="canonical" href="${site.domain}${to}">
<meta http-equiv="refresh" content="0; url=${to}"><script>location.replace(${JSON.stringify(to)})</script>
</head><body><p>Bu sayfa taşındı: <a href="${to}">${to}</a></p></body></html>`;
}
