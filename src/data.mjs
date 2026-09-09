// OptiosLab site içeriği. Tüm sayfalar bu dosyadan üretilir.

export const site = {
  name: "OptiosLab",
  domain: "https://optioslab.com",
  tagline: "AI destekli iş sistemleri",
  email: "hello@optioslab.com",
  city: "İstanbul, Türkiye",
  hours: "Pazartesi–Cuma · 09:00–18:00",
  // İletişim formu için Formspree benzeri bir endpoint. Boşsa form mailto ile açılır.
  formEndpoint: "",
  ogImage: "/assets/img/og.png"
};

export const nav = [
  { label: "Çözümler", href: "/cozumler/", menu: "solutions" },
  { label: "Sektörler", href: "/sektorler/", menu: "sectors" },
  { label: "Hakkımızda", href: "/hakkimizda/" },
  { label: "İletişim", href: "/iletisim/" }
];

// ---------------------------------------------------------------------------
// ÇÖZÜMLER
// ---------------------------------------------------------------------------
export const solutions = [
  {
    slug: "satis-operasyonlari",
    num: "01",
    short: "Satış Operasyonları",
    title: "Satış Operasyonları",
    kicker: "Gelen talep kaçmasın, teklif bekletmesin",
    lead:
      "Web formu, e-posta, WhatsApp ve telefon notlarından gelen talepleri tek kuyruğa toplayan, sınıflandıran ve teklif taslağını hazırlayan sistem.",
    summary:
      "Talepleri toplar, sınıflandırır, teklif taslağını hazırlar ve takibi unutmaz.",
    scope: [
      "Tüm kanallardan gelen talepler tek panelde",
      "Talep türü, aciliyet ve müşteri segmentine göre otomatik sınıflandırma",
      "Fiyat listesi ve geçmiş tekliflerden teklif taslağı",
      "Eksik bilgi için müşteriye otomatik soru",
      "Takip hatırlatmaları: açılmayan teklif, dönüş yapılmayan talep",
      "Satış temsilcisi onaylar, sistem gönderir ve kaydeder"
    ],
    flow: [
      { t: "Topla", d: "Form, e-posta, WhatsApp ve CRM notları tek kuyruğa düşer." },
      { t: "Anla", d: "Ürün, miktar, termin ve müşteri bilgisi çıkarılır; eksikler işaretlenir." },
      { t: "Hazırla", d: "Fiyat listesi ve önceki tekliflerden taslak oluşur." },
      { t: "Onayla", d: "Temsilci taslağı görür, düzenler, tek tıkla onaylar." },
      { t: "Takip et", d: "Gönderim, açılma ve dönüş süresi izlenir; hatırlatma gider." }
    ],
    problems: [
      "Talepler farklı kanallarda kalıyor, kim baktı belli değil",
      "Teklif hazırlamak yarım günü alıyor, müşteri bu arada başka yere gidiyor",
      "Aynı ürün için farklı temsilciler farklı fiyat veriyor",
      "Açılmayan teklifler takip edilmiyor",
      "Satış bilgisi kişilerin hafızasında, CRM güncel değil"
    ],
    tools: ["Gmail", "Outlook", "WhatsApp Business", "HubSpot", "Zoho CRM", "Google Sheets", "Excel", "Parasüt", "Logo"],
    sectors: ["toptan-dagitim", "uretim", "hizmet-danismanlik", "insaat-gayrimenkul"],
    faq: [
      {
        q: "Teklifi sistem mi gönderiyor?",
        a: "Hayır. Sistem taslağı hazırlar; gönderim kararı satış temsilcisinde kalır. İsterseniz belirli tutarın altındaki standart teklifler için otomatik gönderim de kurulabilir."
      },
      {
        q: "CRM kullanmıyoruz, yine de olur mu?",
        a: "Olur. Google Sheets veya Excel ile başlanabilir. Sistem kayıtları oraya yazar; ileride bir CRM'e geçmek istediğinizde akış korunur."
      },
      {
        q: "Fiyat listemiz sık değişiyor.",
        a: "Fiyat kaynağı tek bir dosya ya da programınızdaki liste olur. Siz orayı güncellersiniz, taslaklar her zaman güncel listeden üretilir."
      }
    ],
    mock: "sales"
  },
  {
    slug: "musteri-hizmetleri",
    num: "02",
    short: "Müşteri Hizmetleri",
    title: "Müşteri Hizmetleri",
    kicker: "Her mesaj okunsun, doğru ekibe gitsin",
    lead:
      "E-posta, WhatsApp ve form üzerinden gelen müşteri mesajlarını okuyan, önceliklendiren, doğru kişiye yönlendiren ve yanıt taslağı hazırlayan talep sistemi.",
    summary:
      "Mesajları okur, önceliklendirir, doğru ekibe yönlendirir ve yanıt taslağı çıkarır.",
    scope: [
      "Tüm kanallardan gelen mesajlar tek talep listesinde",
      "Konu, aciliyet ve müşteri bilgisine göre yönlendirme",
      "Sık sorulara bilgi tabanından yanıt taslağı",
      "Bekleyen ve süresi geçen talepler için uyarı",
      "Müşteriye otomatik “alındı” ve durum bilgisi",
      "Ekip onaylar, sistem yanıtlar ve kaydeder"
    ],
    flow: [
      { t: "Topla", d: "E-posta, WhatsApp, form ve sosyal mesajlar tek kuyruğa düşer." },
      { t: "Anla", d: "Konu ve aciliyet belirlenir, müşteri geçmişi eklenir." },
      { t: "Yönlendir", d: "Doğru ekip veya kişiye atanır; acil olan öne çıkar." },
      { t: "Yanıtla", d: "Bilgi tabanından taslak hazırlanır, ekip onaylar." },
      { t: "İzle", d: "Dönüş süresi ve açık talep sayısı canlı panelde." }
    ],
    problems: [
      "Müşteri aynı soruyu üç kanaldan soruyor, üç farklı cevap alıyor",
      "Mesajlar kişisel telefonlarda kalıyor, kişi izinliyse iş duruyor",
      "Aciliyet sırası yok, en son yazan ilk cevap alıyor",
      "Sık sorulan sorulara her seferinde sıfırdan yazılıyor",
      "Kaç talebin açık olduğu, ortalama dönüş süresi bilinmiyor"
    ],
    tools: ["Gmail", "Outlook", "WhatsApp Business", "Instagram", "Slack", "Microsoft Teams", "HubSpot", "Notion", "Google Sheets"],
    sectors: ["e-ticaret-perakende", "saglik", "egitim", "hizmet-danismanlik"],
    faq: [
      {
        q: "Müşteriye robot cevap vermesini istemiyoruz.",
        a: "Varsayılan kurulumda sistem yanıt taslağı hazırlar, gönderimi ekibiniz yapar. Yalnızca “alındı” ve durum bilgisi gibi bilgilendirmeler otomatik gider; onu da kapatabilirsiniz."
      },
      {
        q: "WhatsApp ile çalışıyor mu?",
        a: "Evet, WhatsApp Business API üzerinden. Kişisel WhatsApp hesapları için resmi bir bağlantı yok; geçiş için yol haritası sunuyoruz."
      },
      {
        q: "Bilgi tabanımız yok.",
        a: "Geçmiş yazışmalardan en sık sorulan konuları çıkarıp ilk bilgi tabanını birlikte oluşturuyoruz. Sonrasında ekibiniz kendisi günceller."
      }
    ],
    mock: "support"
  },
  {
    slug: "finans-operasyonlari",
    num: "03",
    short: "Finans Operasyonları",
    title: "Finans Operasyonları",
    kicker: "Fatura ve evrak elle girilmesin",
    lead:
      "Gelen fatura, irsaliye, dekont ve sözleşmeleri okuyan, doğru kayda işleyen, onaya gönderen ve muhasebe programınıza aktaran iş akışı.",
    summary:
      "Belgeleri okur, kaydeder, onaya gönderir ve muhasebe programınıza aktarır.",
    scope: [
      "E-posta ve klasörlerden gelen belgelerin otomatik toplanması",
      "Fatura, irsaliye, dekont bilgilerinin çıkarılması ve eşleştirilmesi",
      "Tutar ve tedarikçiye göre onay akışı",
      "Muhasebe programına kayıt ve arşivleme",
      "Eksik, mükerrer ve uyumsuz belgeler için uyarı",
      "Vade ve ödeme takibi için hatırlatma"
    ],
    flow: [
      { t: "Topla", d: "E-posta ekleri, tarayıcı çıktıları ve paylaşılan klasörler izlenir." },
      { t: "Oku", d: "Tedarikçi, tutar, tarih, KDV ve kalem bilgisi çıkarılır." },
      { t: "Eşleştir", d: "Sipariş ve irsaliye ile karşılaştırılır; fark varsa işaretlenir." },
      { t: "Onaya gönder", d: "Tutar sınırına göre ilgili yöneticiye düşer." },
      { t: "Kaydet", d: "Onaylanan belge programa işlenir, arşive konur." }
    ],
    problems: [
      "Faturalar e-postada kalıyor, ay sonunda toplu giriliyor",
      "Aynı fatura iki kere işleniyor ya da hiç işlenmiyor",
      "Onay için yöneticinin masasında kâğıt bekliyor",
      "Sipariş ile fatura tutmuyor, fark sonradan çıkıyor",
      "Vadesi geçen ödemeler hatırlatılmıyor"
    ],
    tools: ["Parasüt", "Logo", "Netsis", "Mikro", "Excel", "Google Sheets", "Gmail", "Outlook", "Google Drive"],
    sectors: ["uretim", "toptan-dagitim", "insaat-gayrimenkul", "lojistik-nakliye"],
    faq: [
      {
        q: "Muhasebe programımızı değiştirmemiz gerekir mi?",
        a: "Hayır. Mevcut programınızın sunduğu aktarım yöntemine göre kayıt yaparız. Doğrudan bağlantı yoksa programın kabul ettiği dosya formatında aktarım kurarız."
      },
      {
        q: "Okuma hatası olursa ne olur?",
        a: "Sistem emin olmadığı alanları işaretler ve onaya düşürür. Hiçbir belge kontrolsüz kaydedilmez; kim onayladı, ne zaman onayladı izlenir."
      },
      {
        q: "Mali müşavirimizle nasıl çalışır?",
        a: "Mali müşavirinize giden belgeler düzenli klasör ve listeler halinde hazır olur. İsterseniz mali müşavir de onay akışının bir adımı olur."
      }
    ],
    mock: "finance"
  },
  {
    slug: "operasyon-ve-stok",
    num: "04",
    short: "Operasyon & Stok",
    title: "Operasyon ve Stok Takibi",
    kicker: "Stok ve siparişi tek yerden izleyin",
    lead:
      "Stok, sipariş ve sevkiyat bilgisini farklı programlardan toplayan, kritik durumlarda ekibi uyaran ve günlük operasyon listesini hazırlayan izleme sistemi.",
    summary:
      "Stok ve siparişi tek panelde toplar, kritik durumlarda uyarır, günlük listeyi hazırlar.",
    scope: [
      "Depo, e-ticaret ve muhasebe programlarındaki stok bilgisinin birleştirilmesi",
      "Kritik stok, geciken sipariş ve bekleyen sevkiyat uyarıları",
      "Günlük operasyon listesi: ne sevk edilecek, ne sipariş edilecek",
      "Tedarikçi siparişi için taslak hazırlama",
      "Sipariş durumunun müşteriye otomatik bildirilmesi",
      "Haftalık stok ve sipariş özeti"
    ],
    flow: [
      { t: "Bağlan", d: "Depo, pazaryeri, e-ticaret ve muhasebe verileri okunur." },
      { t: "Birleştir", d: "Aynı ürün farklı sistemlerde eşleştirilir, tek liste oluşur." },
      { t: "İzle", d: "Kritik seviye, gecikme ve uyumsuzluk kuralları çalışır." },
      { t: "Uyar", d: "İlgili kişiye WhatsApp, e-posta veya panelde bildirim düşer." },
      { t: "Hazırla", d: "Tedarik siparişi ve sevkiyat listesi taslağı çıkar." }
    ],
    problems: [
      "Mağaza, depo ve online stok birbirini tutmuyor",
      "Kritik stok bittiğinde ancak müşteri sorunca fark ediliyor",
      "Pazaryeri siparişleri elle aktarılıyor",
      "Sevkiyat listesi her sabah Excel’de yeniden hazırlanıyor",
      "Müşteri “siparişim nerede” diye telefonla soruyor"
    ],
    tools: ["Trendyol", "Hepsiburada", "Shopify", "ikas", "Ticimax", "Logo", "Netsis", "Excel", "WhatsApp Business"],
    sectors: ["e-ticaret-perakende", "toptan-dagitim", "uretim", "lojistik-nakliye"],
    faq: [
      {
        q: "ERP’miz var, bu onun yerine mi geçiyor?",
        a: "Hayır. ERP kayıt sistemi olarak kalır. Biz ERP’nin sunmadığı izleme, uyarı ve günlük liste katmanını kurarız; veriyi ERP’den okur, gerekirse ERP’ye yazarız."
      },
      {
        q: "Verilerimiz Excel’de.",
        a: "Excel ile başlanabilir. Sistem dosyaları izler, birleştirir ve uyarı üretir. İleride ERP’ye geçişte aynı kurallar taşınır."
      }
    ],
    mock: "ops"
  },
  {
    slug: "raporlama-ve-analiz",
    num: "05",
    short: "Raporlama & Analiz",
    title: "Raporlama ve Analiz",
    kicker: "Rapor için veri toplamak işten uzun sürmesin",
    lead:
      "Farklı programlardaki veriyi düzenli toplayan, yönetim raporlarını otomatik hazırlayan ve önemli değişimleri açıklayan raporlama sistemi.",
    summary:
      "Veriyi toplar, yönetim raporunu hazırlar, önemli değişimleri açıklar.",
    scope: [
      "Satış, finans, stok ve operasyon verilerinin tek yerde toplanması",
      "Günlük, haftalık ve aylık raporların otomatik üretimi",
      "Rapor yorumları: ne değişti, neden değişti, neye bakılmalı",
      "Canlı yönetim paneli",
      "Hedeften sapma olduğunda uyarı",
      "Yönetim toplantısı için hazır özet"
    ],
    flow: [
      { t: "Bağlan", d: "Programlar, tablolar ve formlar veri kaynağı olur." },
      { t: "Temizle", d: "Farklı isimler eşleştirilir, mükerrerler ayıklanır." },
      { t: "Hesapla", d: "Belirlenen göstergeler her gün otomatik hesaplanır." },
      { t: "Yorumla", d: "Değişimler kısa bir açıklamayla raporlanır." },
      { t: "Dağıt", d: "Rapor e-posta, WhatsApp veya panelde ilgili kişiye ulaşır." }
    ],
    problems: [
      "Aylık rapor için üç farklı programdan veri çekiliyor",
      "Rakamlar kişiye göre değişiyor, hangisi doğru belli değil",
      "Rapor hazır olduğunda bilgi eskimiş oluyor",
      "Yönetim ne değiştiğini sormak için toplantı bekliyor",
      "Sapma fark edildiğinde ay bitmiş oluyor"
    ],
    tools: ["Google Sheets", "Excel", "Power BI", "Looker Studio", "Logo", "Parasüt", "HubSpot", "Trendyol", "Google Analytics"],
    sectors: ["uretim", "toptan-dagitim", "e-ticaret-perakende", "hizmet-danismanlik"],
    faq: [
      {
        q: "Hangi göstergeleri takip edeceğimizi bilmiyoruz.",
        a: "İlk görüşmede sizin için gerçekten karar değiştiren 5–8 göstergeyi birlikte belirliyoruz. Rapor bu göstergelerle başlar, zamanla genişler."
      },
      {
        q: "Verimiz dağınık ve hatalı.",
        a: "Çoğu şirkette öyle. Temizleme ve eşleştirme kurallarını kurulumun parçası olarak yazarız; hatalı kayıtlar ayrı bir listede görünür."
      }
    ],
    mock: "report"
  },
  {
    slug: "iletisim-ve-takip",
    num: "06",
    short: "İletişim & Takip",
    title: "İletişim ve Takip",
    kicker: "Toplantıda konuşulan, görev olarak takip edilsin",
    lead:
      "Toplantı, e-posta ve mesajlaşmadaki bilgiyi toplayan, özetleyen, göreve çeviren ve kimin neyi takip edeceğini görünür kılan sistem.",
    summary:
      "Toplantı ve yazışmaları özetler, göreve çevirir, takibi görünür kılar.",
    scope: [
      "Toplantı notlarından karar ve görev çıkarma",
      "E-posta ve mesaj zincirlerinin özeti",
      "Görevlerin sorumlu ve tarih ile takip listesine düşmesi",
      "Yaklaşan ve geciken işler için hatırlatma",
      "Müşteri ve proje bazlı zaman çizelgesi",
      "Haftalık “neler bekliyor” özeti"
    ],
    flow: [
      { t: "Topla", d: "Toplantı kaydı, notlar, e-posta ve mesajlar kaynak olur." },
      { t: "Özetle", d: "Kararlar, açık sorular ve görevler ayrıştırılır." },
      { t: "Ata", d: "Görevler sorumlu ve tarih ile listeye düşer." },
      { t: "Hatırlat", d: "Tarih yaklaştığında ilgili kişiye bildirim gider." },
      { t: "Raporla", d: "Haftalık özet: tamamlanan, geciken, bekleyen." }
    ],
    problems: [
      "Toplantıda kararlaştırılan iş iki hafta sonra hatırlanıyor",
      "Uzun e-posta zincirinde kimin ne yapacağı belirsiz",
      "Takip yalnızca yöneticinin hafızasında",
      "Müşteriye söz verilen tarih kaçırılıyor",
      "Aynı bilgi üç kişiye ayrı ayrı anlatılıyor"
    ],
    tools: ["Google Meet", "Zoom", "Microsoft Teams", "Gmail", "Outlook", "Notion", "Trello", "Asana", "Slack"],
    sectors: ["hizmet-danismanlik", "insaat-gayrimenkul", "egitim", "saglik"],
    faq: [
      {
        q: "Toplantılarımız kayıt altına alınmıyor.",
        a: "Kayıt şart değil. Toplantı sonunda alınan kısa notlar ya da sesli not da kaynak olabilir. Sistem bunlardan görev ve karar çıkarır."
      },
      {
        q: "Zaten bir görev uygulaması kullanıyoruz.",
        a: "İyi. Görevler oraya yazılır; sistem uygulamanızın yerine geçmez, onu besler ve takip eder."
      }
    ],
    mock: "comms"
  }
];

// Sisteme devredilebilen işler (ana sayfa katalog bloğu)
export const tasks = [
  { t: "Teklif taslağı hazırlama", s: "satis-operasyonlari" },
  { t: "Talep sınıflandırma ve yönlendirme", s: "musteri-hizmetleri" },
  { t: "Fatura ve evrak okuma", s: "finans-operasyonlari" },
  { t: "Onay akışı ve hatırlatma", s: "finans-operasyonlari" },
  { t: "Kritik stok uyarısı", s: "operasyon-ve-stok" },
  { t: "Pazaryeri sipariş aktarımı", s: "operasyon-ve-stok" },
  { t: "Yönetim raporu üretimi", s: "raporlama-ve-analiz" },
  { t: "Hedef sapma uyarısı", s: "raporlama-ve-analiz" },
  { t: "Toplantı özeti ve görev çıkarma", s: "iletisim-ve-takip" },
  { t: "Müşteri takip hatırlatması", s: "satis-operasyonlari" },
  { t: "Sık soruya yanıt taslağı", s: "musteri-hizmetleri" },
  { t: "Veri girişi ve eşleştirme", s: "finans-operasyonlari" }
];

// ---------------------------------------------------------------------------
// SEKTÖRLER
// ---------------------------------------------------------------------------
export const sectors = [
  {
    slug: "uretim",
    num: "01",
    title: "Üretim",
    lead: "Sipariş, tedarik, üretim planı ve fatura arasındaki elle taşınan bilgiyi sisteme alın.",
    problems: [
      "Sipariş bilgisi satıştan üretime e-posta ve telefonla aktarılıyor",
      "Tedarikçi faturaları sipariş ile elle karşılaştırılıyor",
      "Hammadde kritik seviyeye inince ancak üretim durunca fark ediliyor",
      "Termin sorusuna cevap vermek için üç kişiye sorulması gerekiyor",
      "Haftalık üretim raporu Excel’de elle toplanıyor"
    ],
    solutions: ["satis-operasyonlari", "finans-operasyonlari", "operasyon-ve-stok", "raporlama-ve-analiz"]
  },
  {
    slug: "toptan-dagitim",
    num: "02",
    title: "Toptan & Dağıtım",
    lead: "Bayi ve müşteri siparişlerini, teklifleri ve tahsilat takibini tek akışta yönetin.",
    problems: [
      "Bayi siparişleri WhatsApp ve telefondan geliyor, elle giriliyor",
      "Fiyat listesi güncellemesi müşterilere geç ulaşıyor",
      "Cari limit kontrolü teklif verilirken yapılmıyor",
      "Vadesi geçen tahsilatlar takip edilmiyor",
      "Stok sorusuna cevap vermek için depoya telefon açılıyor"
    ],
    solutions: ["satis-operasyonlari", "operasyon-ve-stok", "finans-operasyonlari", "raporlama-ve-analiz"]
  },
  {
    slug: "e-ticaret-perakende",
    num: "03",
    title: "E-ticaret & Perakende",
    lead: "Pazaryeri, mağaza ve online kanaldaki sipariş, stok ve müşteri mesajlarını tek yerden izleyin.",
    problems: [
      "Pazaryeri soruları ve iade talepleri geç cevaplanıyor",
      "Mağaza ve online stok birbirini tutmuyor",
      "Kampanya sonrası gerçek kârlılık hesaplanamıyor",
      "Kargo sorgusu için müşteri hizmetleri elle takip yapıyor",
      "Günlük satış raporu her sabah elle hazırlanıyor"
    ],
    solutions: ["musteri-hizmetleri", "operasyon-ve-stok", "raporlama-ve-analiz"]
  },
  {
    slug: "lojistik-nakliye",
    num: "04",
    title: "Lojistik & Nakliye",
    lead: "Sevkiyat talebi, araç planı, teslim bilgisi ve faturalama arasındaki kopuklukları kapatın.",
    problems: [
      "Sevkiyat talepleri e-posta ve WhatsApp’tan geliyor, planlama elle yapılıyor",
      "Müşteri “yüküm nerede” diye telefonla soruyor",
      "Teslim evrakı gelmeden fatura kesilemiyor",
      "Şoför ve araç bilgisi Excel’de tutuluyor",
      "Aylık performans raporu için veri toplamak günler alıyor"
    ],
    solutions: ["musteri-hizmetleri", "operasyon-ve-stok", "finans-operasyonlari", "raporlama-ve-analiz"]
  },
  {
    slug: "insaat-gayrimenkul",
    num: "05",
    title: "İnşaat & Gayrimenkul",
    lead: "Teklif, hakediş, tedarikçi faturası ve şantiye iletişimini kayıt altına alın.",
    problems: [
      "Tedarikçi teklifleri farklı formatlarda geliyor, karşılaştırma elle yapılıyor",
      "Hakediş ve fatura takibi kişilerin hafızasında",
      "Şantiyeden gelen bilgi WhatsApp gruplarında kayboluyor",
      "Müşteri adayı takibi düzensiz, dönüş geç yapılıyor",
      "Proje maliyeti ancak proje bitince netleşiyor"
    ],
    solutions: ["finans-operasyonlari", "iletisim-ve-takip", "satis-operasyonlari", "raporlama-ve-analiz"]
  },
  {
    slug: "saglik",
    num: "06",
    title: "Sağlık & Klinik",
    lead: "Randevu talebi, hasta iletişimi ve tedarik takibini ekibi yormadan yönetin.",
    problems: [
      "Randevu talepleri telefon, WhatsApp ve Instagram’dan geliyor",
      "Hasta sorularına mesai dışında cevap verilemiyor",
      "Randevu hatırlatması elle yapılıyor, gelmeyen hasta oranı yüksek",
      "Malzeme ve ilaç stoğu kritik seviyede fark edilmiyor",
      "Aylık doluluk ve gelir raporu elle hazırlanıyor"
    ],
    solutions: ["musteri-hizmetleri", "iletisim-ve-takip", "operasyon-ve-stok", "raporlama-ve-analiz"]
  },
  {
    slug: "egitim",
    num: "07",
    title: "Eğitim",
    lead: "Kayıt talepleri, veli ve öğrenci iletişimi, ödeme takibini tek akışa alın.",
    problems: [
      "Kayıt ve bilgi talepleri farklı kanallardan geliyor, geç dönülüyor",
      "Veli sorularına aynı cevaplar tekrar tekrar yazılıyor",
      "Ödeme ve taksit takibi Excel’de elle yapılıyor",
      "Duyurular her gruba ayrı ayrı gönderiliyor",
      "Dönem raporları için veri farklı yerlerden toplanıyor"
    ],
    solutions: ["musteri-hizmetleri", "satis-operasyonlari", "iletisim-ve-takip", "raporlama-ve-analiz"]
  },
  {
    slug: "hizmet-danismanlik",
    num: "08",
    title: "Hizmet & Danışmanlık",
    lead: "Teklif, proje takibi, müşteri iletişimi ve faturalamayı ekibin hafızasından sisteme taşıyın.",
    problems: [
      "Teklif hazırlamak için önceki teklifler aranıyor",
      "Toplantıda konuşulan işler görev listesine düşmüyor",
      "Proje durumu sorulduğunda cevap için ekip aranıyor",
      "Faturalama gecikiyor çünkü yapılan iş kayıt altında değil",
      "Müşteri raporları her ay elle hazırlanıyor"
    ],
    solutions: ["satis-operasyonlari", "iletisim-ve-takip", "finans-operasyonlari", "raporlama-ve-analiz"]
  }
];

// ---------------------------------------------------------------------------
// NEDEN OPTIOSLAB · SÜREÇ · PRENSİPLER
// ---------------------------------------------------------------------------
export const why = [
  {
    t: "Mevcut araçlarınızla çalışır",
    d: "Program değiştirmenizi istemiyoruz. Sistem; e-posta, WhatsApp, Excel, muhasebe ve CRM programlarınıza bağlanır, bilgiyi oradan okur, oraya yazar."
  },
  {
    t: "İnsan karar verir, sistem yürütür",
    d: "Hangi adımı sistemin yapacağı, hangi kararı ekibinizin vereceği baştan yazılır. Onay gereken hiçbir şey onaysız gitmez."
  },
  {
    t: "Ölçülebilir hedefle başlar",
    d: "Kuruluma başlamadan önce seçilen sürecin bugünkü süresi, hata ve takip yükü not edilir. Sonuç aynı ölçütlerle takip edilir."
  },
  {
    t: "Haftalar içinde canlı",
    d: "Bir anda tüm şirketi değiştirmiyoruz. En çok zaman kaybettiren süreçle başlıyor, ilk sistemi 4–6 hafta içinde canlıya almayı hedefliyoruz."
  }
];

export const tour = [
  {
    t: "Topla",
    d: "E-posta, WhatsApp, form, telefon notu ve dosyalar tek kuyruğa düşer. Hiçbir talep kişisel kutuda kalmaz.",
    tag: "e-posta · whatsapp · form · dosya"
  },
  {
    t: "Anla",
    d: "Sistem talebin konusunu, aciliyetini ve eksik bilgisini çıkarır. Eksik varsa soruyu kendisi sorar.",
    tag: "sınıflandır · önceliklendir · eksik bilgi"
  },
  {
    t: "Yönlendir",
    d: "Doğru kişiye ya da ekibe atar. Onay gereken adımda bekler; kim onayladı, ne zaman onayladı kayda geçer.",
    tag: "atama · onay · kayıt"
  },
  {
    t: "Üret",
    d: "Teklif taslağı, yanıt, kayıt veya belge hazırlanır. Ekip kontrol eder ve tek tıkla onaylar.",
    tag: "taslak · kayıt · belge"
  },
  {
    t: "Raporla",
    d: "Kim neyi bekliyor, ne kadar sürdü, nerede takıldı. Canlı panel ve haftalık özet yönetime ulaşır.",
    tag: "canlı panel · haftalık özet"
  }
];

export const process = [
  { t: "Analiz", d: "20 dakikalık ücretsiz görüşmede en çok zaman kaybettiren sürecinizi birlikte belirleriz." },
  { t: "Haritalama", d: "Bilgi nereden geliyor, kimde bekliyor, hangi araçta duruyor: mevcut akış yazılı hale gelir." },
  { t: "Tasarım", d: "Hangi adımı sistem yapar, hangi kararı insan verir. Kapsam, takvim ve ölçütler netleşir." },
  { t: "Kurulum & test", d: "Sistem mevcut araçlarınıza bağlanır; gerçek müşteri, teklif ve belge örnekleriyle test edilir." },
  { t: "Devreye alma", d: "Ekibinizin günlük kullanımına açılır. Kullanım eğitimi verilir, ilk hafta yakından izlenir." },
  { t: "Takip & iyileştirme", d: "Ne kadar zaman kazandırdı, nerede takıldı. Sıradaki süreç birlikte seçilir." }
];

export const pricing = [
  { t: "Sürecin kapsamı", d: "Kaç adım sisteme devrediliyor, kaç kanal bağlanıyor, kaç onay noktası var." },
  { t: "Bağlanacak programlar", d: "E-posta, WhatsApp, muhasebe, ERP, CRM ya da pazaryeri: her bağlantı ayrı bir iş kalemi." },
  { t: "Net teklif, ilk görüşmeden sonra", d: "İhtiyaç analizi ücretsiz. Kapsam netleşince yazılı teklif ve takvim sunulur." }
];

export const commitments = [
  {
    label: "ÖLÇÜT",
    big: "Baştan",
    small: "yazılır",
    t: "Süre, hata ve takip yükü",
    d: "Kuruluma başlamadan önce seçilen sürecin bugünkü hali not edilir. Sonuç aynı ölçütlerle karşılaştırılır."
  },
  {
    label: "ONAY",
    big: "İnsan",
    small: "karar verir",
    t: "Onay noktaları sözleşmede",
    d: "Hangi adımın sistemde, hangi kararın ekibinizde kalacağı yazılı olur. Onaysız hiçbir şey gönderilmez."
  },
  {
    label: "DESTEK",
    big: "Net",
    small: "kapsam",
    t: "Destek ve iletişim şekli",
    d: "Sistem hata verirse kim bakar, nasıl ulaşılır, ne kadar sürede dönülür: proje başlamadan netleşir."
  }
];

export const compare = {
  head: ["", "Manuel süreç", "OptiosLab ile"],
  rows: [
    ["Bilgi nerede", "Kişilerin hafızasında, e-postada, WhatsApp’ta", "Tek sistemde, kim baktı kim onayladı kayıtlı"],
    ["Dönüş süresi", "Kişi müsait olunca", "Talep düştüğü anda sınıflanır, dakikalar içinde yönlendirilir"],
    ["Hata", "Elle giriş, mükerrer kayıt, unutulan takip", "Kontrol kuralları; emin olunmayan adım onaya düşer"],
    ["Takip", "Yöneticinin sorması gerekir", "Geciken ve bekleyen işler kendini hatırlatır"],
    ["Büyüme", "Her yeni müşteri için yeni personel", "Aynı ekip daha fazla iş çıkarır"],
    ["Raporlama", "Ay sonu, elle, üç programdan", "Canlı panel ve haftalık özet"]
  ]
};

export const integrations = [
  "Gmail", "Outlook", "WhatsApp Business", "Instagram", "Slack", "Microsoft Teams", "Google Sheets", "Excel",
  "Google Drive", "Notion", "Trello", "Asana", "HubSpot", "Zoho CRM", "Parasüt", "Logo", "Netsis", "Mikro",
  "Trendyol", "Hepsiburada", "Shopify", "ikas", "Ticimax", "Zapier", "Make", "n8n", "Google Meet", "Zoom",
  "Power BI", "Looker Studio", "Calendly", "Typeform"
];

export const faq = [
  {
    q: "Bu sistem benim işletmeme gerçekten uygun mu?",
    a: "İlk görüşmede tekrar eden işlerinizi birlikte inceleriz. Size zaman veya para kazandırmayacaksa bunu açıkça söyleriz."
  },
  {
    q: "Kurulum ne kadar sürer?",
    a: "Süre, yapılacak işe göre değişir. İlk sistemi 4–6 hafta içinde canlıya almayı hedefleriz. Net takvimi işe başlamadan önce paylaşırız."
  },
  {
    q: "Fiyatı neye göre belirliyorsunuz?",
    a: "Fiyat; otomatikleştirilecek işin kapsamına ve bağlanacak programlara göre belirlenir. İlk görüşmeden sonra size net bir teklif sunarız."
  },
  {
    q: "Kullandığımız programları değiştirmemiz gerekir mi?",
    a: "Çoğu zaman hayır. Mümkün olduğunda mevcut muhasebe, CRM, e-posta ve diğer programlarınızla çalışırız."
  },
  {
    q: "Ekibimizin teknik bilgiye ihtiyacı var mı?",
    a: "Hayır. Sistemi günlük kullanımı kolay olacak şekilde kurar, ekibinize nasıl kullanacağını gösteririz."
  },
  {
    q: "Uzun süreli sözleşme şart mı?",
    a: "Hayır. Önce seçilen süreci ve beklenen etkiyi değerlendirdiğimiz kısa bir keşif aşamasıyla başlarız. Devam eden destek sunulabilir ama zorunlu değildir."
  },
  {
    q: "Kurulum sürecinde bizim ne kadar dahil olmamız gerekir?",
    a: "İlk iki haftada süreç haritalama ve bilgi paylaşımı için yaklaşık 5–10 saatlik katılım gerekir. Kurulum sırasında çoğunlukla bizim ekip çalışır. Toplam müşteri zamanı çoğu projede 20–30 saattir."
  },
  {
    q: "Sistem hata verirse ne olur?",
    a: "Sistemlere izleme ve hata bildirimi kurarız; geçici hatalar için tekrar deneme mantığı ekleriz. Destek kapsamını ve iletişim şeklini proje başlamadan netleştiririz."
  },
  {
    q: "Türkiye dışındaki şirketlerle çalışıyor musunuz?",
    a: "Evet. Türkiye merkezli çalışıyoruz; Almanya başta olmak üzere Avrupa’daki şirketlere de hizmet veriyoruz. Görüşmeler Türkçe, Almanca veya İngilizce yapılabilir."
  }
];

export const team = [
  { name: "Ahmet Taymi Genel", role: "Co-Founder", img: "/assets/img/team/ahmet-taymi-genel.jpeg", pos: "50% 40%" },
  { name: "Batuhan Akagündüz", role: "Co-Founder", img: "/assets/img/team/batuhan-akagunduz.jpg", pos: "50% 36%" },
  { name: "Semih Yıldırım", role: "AI Automation Engineer", img: "/assets/img/team/semih-yildirim.jpg", pos: "50% 38%" },
  { name: "Aysenur Yıldırım", role: "Growth & Marketing", img: "/assets/img/team/aysenur-yildirim.jpg", pos: "50% 42%" },
  { name: "Merve Tunç", role: "Brand & Content", img: "/assets/img/team/merve-tunc.jpg", pos: "50% 35%" },
  { name: "Burak Karaçayır", role: "Product Developer", img: "/assets/img/team/burak-karacayir.jpg", pos: "50% 42%" }
];

export const principles = [
  {
    t: "Önce ölçülebilir bir hedef belirleriz.",
    d: "Başlangıçta süre, hata ve takip yükünü belirler; sistem canlıya alındığında aynı ölçütlerle ilerlemeyi takip ederiz."
  },
  {
    t: "Manuel iş pahalıdır.",
    d: "Firmalar manuel süreçlerin gerçek maliyetini çoğu zaman küçümser. Gerçek rakamları görünür hale getiririz."
  },
  {
    t: "Mükemmel, çalışan sistemin düşmanıdır.",
    d: "Gelecek yıl kusursuz olacak bir otomasyon yerine, bu ay vakaların yüzde 80’ini çözen sistemi devreye almayı tercih ederiz."
  },
  {
    t: "İstisnaları en iyi ekibiniz bilir.",
    d: "Sistemi gerçek kullanıcılarla birlikte tasarlarız. Süreç belgelerinden önce sahada gerçekten ne olduğunu dinleriz."
  }
];

export const story = [
  "OptiosLab, tekrar eden operasyon işlerinin büyüyen şirketlerde nasıl zaman ve fırsat kaybı yarattığını görerek kuruldu. Amacımız; bu işleri kişilerin hafızasından çıkarıp, ekiplerin her gün kullanacağı sistemlere taşımak.",
  "Sadece otomasyon fikri sunmuyoruz. Süreci birlikte haritalıyor, mevcut araçlarınıza bağlı iş akışını kuruyor, gerçek işlerinizle test ediyor ve ekibinizin kullanımına açıyoruz.",
  "Her projede aynı noktadan başlarız: En çok zaman kaybettiren işi seçer, başlangıçtaki süre, hata ve takip yükünü görünür hale getirir; sonuçları aynı ölçütlerle takip ederiz."
];

// Eski adreslerden yeni adreslere yönlendirme (statik stub sayfaları)
export const redirects = {
  "about": "/hakkimizda/",
  "contact": "/iletisim/",
  "case-studies": "/cozumler/",
  "case-studies/boltshift": "/cozumler/",
  "case-studies/clandestine": "/cozumler/",
  "case-studies/commandr": "/cozumler/",
  "case-studies/lightspeed": "/cozumler/",
  "case-studies/polymath": "/cozumler/",
  "boltshift": "/cozumler/",
  "clandestine": "/cozumler/",
  "commandr": "/cozumler/",
  "lightspeed": "/cozumler/",
  "polymath": "/cozumler/",
  "articles": "/",
  "careers": "/",
  "video-landing": "/",
  "legal/privacy-policy": "/gizlilik-politikasi/",
  "legal/cookie-policy": "/cerez-politikasi/",
  "legal/terms-conditions": "/kullanim-kosullari/",
  "legal/acceptable-use-policy": "/kabul-edilebilir-kullanim/",
  "privacy-policy": "/gizlilik-politikasi/",
  "cookie-policy": "/cerez-politikasi/",
  "terms-conditions": "/kullanim-kosullari/",
  "acceptable-use-policy": "/kabul-edilebilir-kullanim/"
};
