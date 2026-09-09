/* OptiosLab — site.js */
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---- nav: mega menü + mobil ---- */
  const nav = $(".nav");
  if (nav) {
    $$(".nav-links > li > button", nav).forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const li = btn.parentElement;
        const open = li.classList.contains("open");
        $$(".nav-links > li.open", nav).forEach((o) => o.classList.remove("open"));
        if (!open) li.classList.add("open");
      });
    });
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target)) $$(".nav-links > li.open", nav).forEach((o) => o.classList.remove("open"));
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        $$(".nav-links > li.open", nav).forEach((o) => o.classList.remove("open"));
        document.body.classList.remove("menu-open");
      }
    });
    const burger = $(".nav-burger", nav);
    burger?.addEventListener("click", () => {
      const open = document.body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", String(open));
    });
    // masaüstünde hover ile aç
    if (window.matchMedia("(hover:hover) and (min-width: 981px)").matches) {
      $$(".nav-links > li", nav).forEach((li) => {
        if (!$(".mega", li)) return;
        let t;
        li.addEventListener("mouseenter", () => { clearTimeout(t); $$(".nav-links > li.open", nav).forEach((o) => o !== li && o.classList.remove("open")); li.classList.add("open"); });
        li.addEventListener("mouseleave", () => { t = setTimeout(() => li.classList.remove("open"), 120); });
      });
    }
  }

  /* ---- hero: çip + panel döngüsü ---- */
  const hero = $("[data-hero]");
  if (hero) {
    const chips = $$(".chip", hero);
    const views = $$(".panel-view", hero);
    const lines = JSON.parse(hero.dataset.lines || "[]");
    const rot = $(".rotating", hero);
    let i = 0, timer;
    const go = (n) => {
      i = n % chips.length;
      chips.forEach((c, k) => c.classList.toggle("is-active", k === i));
      views.forEach((v, k) => v.classList.toggle("is-active", k === i));
      if (rot && lines[i]) rot.innerHTML = `<span>${lines[i]}</span>`;
    };
    const start = () => { clearInterval(timer); timer = setInterval(() => go(i + 1), 4200); };
    chips.forEach((c, k) => c.addEventListener("click", () => { go(k); start(); }));
    go(0); start();
    document.addEventListener("visibilitychange", () => (document.hidden ? clearInterval(timer) : start()));
  }

  /* ---- tur: sticky adımlar ---- */
  const tour = $("[data-tour]");
  if (tour) {
    const steps = $$(".tour-step", tour);
    const views = $$(".panel-view", tour);
    const dots = $(".tour-dots");
    const dotEls = dots ? $$("i", dots) : [];
    const activate = (n) => {
      steps.forEach((s, k) => s.classList.toggle("is-active", k === n));
      views.forEach((v, k) => v.classList.toggle("is-active", k === n));
      dotEls.forEach((d, k) => d.classList.toggle("is-active", k === n));
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) activate(steps.indexOf(en.target)); });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    steps.forEach((s) => io.observe(s));
    activate(0);
    if (dots) {
      const vis = new IntersectionObserver((en) => dots.classList.toggle("is-visible", en[0].isIntersecting), { threshold: 0.05 });
      vis.observe(tour);
    }
  }

  /* ---- sektör sekmeleri ---- */
  $$("[data-tabs]").forEach((root) => {
    const tabs = $$(".sector-tab", root);
    const panes = $$(".sector-pane", root);
    tabs.forEach((t, k) => t.addEventListener("click", () => {
      tabs.forEach((x, j) => x.classList.toggle("is-active", j === k));
      panes.forEach((p, j) => p.classList.toggle("is-active", j === k));
    }));
  });

  /* ---- reveal ---- */
  const rv = $$(".reveal");
  if (rv.length && "IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    rv.forEach((el) => io.observe(el));
  } else rv.forEach((el) => el.classList.add("in"));

  /* ---- form ---- */
  const form = $("form[data-contact]");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const endpoint = form.dataset.endpoint;
      const data = new FormData(form);
      const btn = $("button[type=submit]", form);
      if (!endpoint) {
        // Sunucu tarafı yoksa e-posta istemcisiyle gönder
        const lines = [];
        data.forEach((v, k) => { if (k !== "_gotcha") lines.push(`${k}: ${v}`); });
        const subject = encodeURIComponent("OptiosLab analiz talebi");
        const body = encodeURIComponent(lines.join("\n"));
        window.location.href = `mailto:${form.dataset.mail}?subject=${subject}&body=${body}`;
        form.classList.add("is-sent");
        return;
      }
      btn.disabled = true; btn.textContent = "Gönderiliyor…";
      try {
        const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error(String(res.status));
        form.classList.add("is-sent");
      } catch {
        btn.disabled = false; btn.textContent = "Hata oluştu, tekrar deneyin";
      }
    });
  }

  /* ---- yıl ---- */
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
