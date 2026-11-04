/* =====================================================================
   MARMOREFLEX — monta a página a partir de window.STORE (config.js)
   Seções: utilitários · textos · modais · galeria/lightbox · cores ·
   tamanhos · calculadora · confirmar pedido · listas · segurança ·
   avaliações · vídeos · contagem · menu · barra fixa · animação
   ===================================================================== */
(function () {
  const S = window.STORE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const brl = (cents) => (cents / 100).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const icon = (name) => `<svg class="icon"><use href="#i-${name}"/></svg>`;
  const setAll = (sel, val, prop = "textContent") => $$(sel).forEach((el) => (el[prop] = val));
  const pct = (o) => Math.round((1 - o.price / o.compareAt) * 100); // mesma conta do site atual
  const VERIFIED = `<svg class="verified-title-badge" viewBox="0 0 24 24" aria-label="Produto Verificado" role="img"><title>Produto Verificado</title><path fill="#0095f6" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34z"/><path fill="#ffffff" d="M10.54 16.2 6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"/></svg>`;

  /* ---------- Textos básicos ---------- */
  const titleEl = $(".buybox h1");
  if (titleEl) {
    const words = S.product.title.trim().split(/\s+/);
    const last = words.pop() || "";
    titleEl.innerHTML = `${esc(words.join(" "))} <span class="title-verified-group">${esc(last)}${VERIFIED}</span>`;
  }
  setAll("[data-rating]", S.product.rating);
  setAll("[data-rating-count]", S.product.ratingCount);
  setAll("[data-sold]", S.product.soldCount);
  setAll("[data-campaign]", S.campaignLabel);
  setAll("[data-discount-label]", S.discountLabel);
  setAll("[data-address]", S.brand.address);
  setAll("[data-legal-name]", S.brand.legalName);
  setAll("[data-cnpj]", S.brand.cnpj);
  setAll("[data-email-text]", S.brand.email);
  setAll("[data-hours]", S.brand.hours);
  setAll("[data-year]", new Date().getFullYear());
  $$("[data-email]").forEach((a) => { a.textContent = S.brand.email; a.href = "mailto:" + S.brand.email; });
  $$("[data-map]").forEach((f) => (f.src = S.brand.mapEmbed));
  $$("[data-map-link]").forEach((a) => (a.href = S.brand.mapUrl));
  const nl = $("[data-newsletter]");
  if (nl) nl.addEventListener("submit", (e) => { e.preventDefault(); nl.innerHTML = `<p class="y" style="margin:0;font-weight:700">Inscrição feita! ✓</p>`; });

  /* ---------- Contador de pessoas ao vivo (mesma lógica da Bruttus) ---------- */
  const liveEl = $("[data-live-count]");
  if (liveEl) {
    let live = Math.floor(Math.random() * 7) + 22; // começa entre 22 e 28
    liveEl.textContent = live;
    const liveTick = () => {
      const deltas = [-2, -1, -1, 1, 1, 2, 2, -2, 3];
      let delta = deltas[Math.floor(Math.random() * deltas.length)];
      if (live >= 33) delta = -Math.abs(delta) || -1;
      if (live <= 18) delta = Math.abs(delta) || 1;
      live = Math.max(16, Math.min(38, live + delta));
      liveEl.classList.add("bump");
      liveEl.textContent = live;
      setTimeout(() => liveEl.classList.remove("bump"), 300);
      setTimeout(liveTick, Math.floor(Math.random() * 3500) + 4000);
    };
    setTimeout(liveTick, Math.floor(Math.random() * 2000) + 3500);
  }

  /* ---------- Bloqueio de scroll de fundo (modais e menu) ---------- */
  let scrollYLock = 0, activeOverlays = 0;
  const lockBodyScroll = () => {
    activeOverlays++;
    if (activeOverlays === 1) {
      scrollYLock = window.scrollY || document.documentElement.scrollTop || 0;
      document.documentElement.classList.add("modal-open");
      document.body.classList.add("modal-open");
    }
  };
  const unlockBodyScroll = () => {
    activeOverlays = Math.max(0, activeOverlays - 1);
    if (activeOverlays === 0) {
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      html.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
      const y = window.scrollY || html.scrollTop || 0;
      if (Math.abs(y - scrollYLock) > 2) window.scrollTo({ top: scrollYLock, left: 0, behavior: "instant" });
      requestAnimationFrame(() => (html.style.scrollBehavior = prev));
    }
  };
  // Toques fora do modal/menu não movem a página no iOS
  document.addEventListener("touchmove", (e) => {
    if ((document.body.classList.contains("modal-open") || document.body.classList.contains("lb-open")) && !e.target.closest(".modal-card, [data-drawer]")) e.preventDefault();
  }, { passive: false });

  // Movimento do dedo: não abre o lightbox quando a pessoa só está rolando
  let pageTouchStartX = 0, pageTouchStartY = 0, pageTouchMoved = false;
  window.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches.length === 1) { pageTouchStartX = e.touches[0].clientX; pageTouchStartY = e.touches[0].clientY; pageTouchMoved = false; }
  }, { passive: true });
  window.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches.length === 1 && (Math.abs(e.touches[0].clientX - pageTouchStartX) > 7 || Math.abs(e.touches[0].clientY - pageTouchStartY) > 7)) pageTouchMoved = true;
  }, { passive: true });

  /* ---------- Modais ---------- */
  let lastFocus = null;
  const openModal = (m) => {
    lastFocus = document.activeElement;
    m.hidden = false;
    lockBodyScroll();
    requestAnimationFrame(() => m.classList.add("open"));
    ($(".modal-x", m) || m).focus?.({ preventScroll: true });
  };
  const closeModal = (m) => {
    if (m.hidden) return;
    m.classList.remove("open");
    unlockBodyScroll();
    setTimeout(() => (m.hidden = true), 200);
    lastFocus?.focus?.({ preventScroll: true });
  };
  $$(".modal").forEach((m) => m.addEventListener("click", (e) => { if (e.target.closest("[data-close-modal]")) closeModal(m); }));
  const headerH = () => $(".header").offsetHeight;
  const scrollToEl = (el, extra = 12) => window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - headerH() - extra, behavior: "smooth" });

  /* ---------- Galeria ---------- */
  const track = $("[data-gallery-track]");
  const thumbs = $("[data-gallery-thumbs]");
  const counter = $("[data-gallery-counter]");
  const imgs = S.product.images;
  track.innerHTML = imgs.map((im, i) =>
    `<img src="${esc(im.src)}" alt="${esc(im.alt)}" width="800" height="800" ${i ? 'loading="lazy"' : 'fetchpriority="high"'} data-index="${i}">`).join("");
  thumbs.innerHTML = imgs.map((im, i) =>
    `<button type="button" aria-label="Ver foto ${i + 1}" data-thumb="${i}"><img src="${esc(im.src)}" alt="" loading="lazy"></button>`).join("");
  let current = 0;
  const goTo = (i) => { current = (i + imgs.length) % imgs.length; track.scrollTo({ left: track.clientWidth * current, behavior: "smooth" }); syncUI(); };
  const syncUI = () => {
    counter.textContent = `${current + 1} / ${imgs.length}`;
    $$("[data-thumb]").forEach((b, i) => b.classList.toggle("active", i === current));
    const active = $(`[data-thumb="${current}"]`);
    if (active) thumbs.scrollTo({ left: active.offsetLeft - thumbs.clientWidth / 2 + 32, behavior: "smooth" });
  };
  track.addEventListener("scroll", () => {
    const i = Math.round(track.scrollLeft / track.clientWidth);
    if (i !== current) { current = i; syncUI(); }
  }, { passive: true });
  $("[data-gallery-prev]").onclick = () => goTo(current - 1);
  $("[data-gallery-next]").onclick = () => goTo(current + 1);
  thumbs.addEventListener("click", (e) => { const b = e.target.closest("[data-thumb]"); if (b) goTo(+b.dataset.thumb); });
  syncUI();

  /* ---------- Lightbox com navegação ---------- */
  const lb = $("[data-lightbox]");
  const lbImg = $("img", lb);
  let lbList = [], lbIndex = 0;
  const lbShow = () => {
    const im = lbList[lbIndex];
    lbImg.src = im.src; lbImg.alt = im.alt || "";
    $("[data-lb-counter]").textContent = `${lbIndex + 1} / ${lbList.length}`;
    $$("[data-lb-prev],[data-lb-next],[data-lb-counter]", lb).forEach((b) => (b.hidden = lbList.length < 2));
  };
  const lbOpen = (list, i) => {
    lbList = list; lbIndex = i; lbShow();
    lb.classList.add("open");
    document.documentElement.classList.add("lb-open");
    document.body.classList.add("lb-open");
  };
  const lbClose = () => {
    lb.classList.remove("open");
    document.documentElement.classList.remove("lb-open");
    document.body.classList.remove("lb-open");
  };
  const lbStep = (d) => { lbIndex = (lbIndex + d + lbList.length) % lbList.length; lbShow(); };
  let trackMoved = false, trackStartX = 0, trackStartY = 0;
  track.addEventListener("touchstart", (e) => { if (e.touches.length === 1) { trackStartX = e.touches[0].clientX; trackStartY = e.touches[0].clientY; trackMoved = false; } }, { passive: true });
  track.addEventListener("touchmove", (e) => { if (e.touches.length === 1 && (Math.abs(e.touches[0].clientX - trackStartX) > 7 || Math.abs(e.touches[0].clientY - trackStartY) > 7)) trackMoved = true; }, { passive: true });
  track.addEventListener("click", (e) => {
    if (trackMoved || pageTouchMoved) return;
    const im = e.target.closest("img"); if (im) lbOpen(imgs, +im.dataset.index);
  });
  const descImgs = $$("#descricao .desc-img");
  descImgs.forEach((im, i) => {
    im.tabIndex = 0; im.setAttribute("role", "button"); im.title = "Clique para ampliar";
    const open = () => { if (!pageTouchMoved) lbOpen(descImgs.map((d) => ({ src: d.currentSrc || d.src, alt: d.alt })), i); };
    im.addEventListener("click", open);
    im.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
  $("[data-lb-prev]").onclick = (e) => { e.stopPropagation(); lbStep(-1); };
  $("[data-lb-next]").onclick = (e) => { e.stopPropagation(); lbStep(1); };
  lb.addEventListener("click", (e) => { if (e.target === lb || e.target.closest("[data-close-lightbox]")) { e.preventDefault(); lbClose(); } });
  let touchX = null;
  lb.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX; touchX = null;
    if (Math.abs(dx) > 50) lbStep(dx < 0 ? 1 : -1);
  });

  /* ---------- Cores (efeito mármore / lisas) com prévia no ambiente ---------- */
  const allColors = S.colorGroups.flatMap((g) => g.colors.map((c) => ({ ...c, group: g.id })));
  const colorByName = (n) => allColors.find((c) => c.name === n);
  let color = colorByName(S.defaultColor) || allColors[0];
  let colorTab = color.group;
  const swatchStyle = (c) => c.swatch ? `background-image:url('${esc(c.swatch)}')` : `background-color:${esc(c.hex)}`;
  const swatchHTML = (c, cls = "") => `<span class="swatch ${cls}" style="${swatchStyle(c)}" aria-hidden="true"></span>`;
  const colorLabel = (c) => c.label || c.name;
  const renderColors = () => {
    $("[data-color-tabs]").innerHTML = S.colorGroups.map((g) =>
      `<button type="button" role="tab" aria-selected="${g.id === colorTab}" data-color-tab="${g.id}">${esc(g.label)}</button>`).join("");
    const g = S.colorGroups.find((x) => x.id === colorTab);
    $("[data-swatches]").innerHTML = g.colors.map((c) => `
      <button type="button" class="sw${c.name === color.name ? " on" : ""}" aria-pressed="${c.name === color.name}" aria-label="${esc(c.name)}" data-color="${esc(c.name)}">
        ${c.badge ? `<em class="sw-badge">${esc(c.badge)}</em>` : ""}${swatchHTML(c)}<span class="sw-name">${esc(colorLabel(c))}</span>
      </button>`).join("");
  };
  const previewEl = $("[data-floor-preview]");
  const selectColor = (name, announce) => {
    color = colorByName(name) || color;
    previewEl.src = color.preview;
    previewEl.alt = `Simulação do piso MarmoreFlex ${color.name.replace(" (Liso)", " liso")} aplicado em um ambiente`;
    setAll("[data-floor-caption]", color.name);
    setAll("[data-sticky-color]", color.name);
    renderColors();
    updateSelection(announce);
  };
  $("[data-color-tabs]").addEventListener("click", (e) => {
    const b = e.target.closest("[data-color-tab]"); if (!b) return;
    colorTab = b.dataset.colorTab; renderColors();
  });
  $("[data-swatches]").addEventListener("click", (e) => { const b = e.target.closest("[data-color]"); if (b) selectColor(b.dataset.color); });

  /* ---------- Tamanhos e preço ---------- */
  const offerById = (id) => S.offers.find((o) => o.id === id);
  const perM2 = (o) => brl(Math.round(o.price / o.m2));
  const offersEl = $("[data-offers]");
  offersEl.innerHTML = S.offers.map((o) => `
    <button class="offer size" type="button" role="radio" aria-checked="false" data-offer="${o.id}">
      ${o.badge ? `<span class="o-badge">${esc(o.badge)}</span>` : ""}
      <span class="radio"></span>
      <span class="o-pic"><img src="${esc(o.image)}" alt="Balde MarmoreFlex de ${esc(o.label)}" width="120" height="120" loading="lazy"><b class="o-kgtag">${esc(o.label)}</b></span>
      <span class="o-main"><strong>Rende até ${o.m2} m² <em class="o-off">-${pct(o)}%</em></strong><small>${esc(o.detail)}</small>
        <small class="o-save">Economize ${brl(o.compareAt - o.price)}</small></span>
      <span class="o-price"><s>${brl(o.compareAt)}</s>${brl(o.price)}<small class="o-unit">${perM2(o)} por m²</small></span>
    </button>`).join("");
  let currentOffer = offerById(S.defaultOffer) || S.offers[0];
  function updateSelection(announce) {
    const o = currentOffer;
    $("[data-selection]").innerHTML = `${swatchHTML(color, "sel-swatch")}
      <span class="sel-info">
        <small>Sua seleção</small>
        <b class="sel-title">MarmoreFlex ${esc(color.name)}</b>
        <span class="sel-car">Quantidade: ${esc(o.label)} · rende até ${o.m2} m²</span>
        <div class="sel-pricing"><span class="sel-price">${brl(o.price)}</span><span class="sel-save-tag">${icon("tag")} Economia de <b>${brl(o.compareAt - o.price)}</b></span></div>
      </span>
      <span class="sel-check" aria-label="Seleção confirmada">${icon("check")}</span>`;
    if (announce) {
      const sel = $("[data-selection]");
      sel.classList.remove("pop"); void sel.offsetWidth; sel.classList.add("pop");
    }
  }
  const selectOffer = (id, announce) => {
    currentOffer = offerById(id) || S.offers[0];
    const o = currentOffer;
    $$("[data-offer]").forEach((b) => { const on = b.dataset.offer === o.id; b.classList.toggle("selected", on); b.setAttribute("aria-checked", on); });
    setAll("[data-price]", brl(o.price));
    setAll("[data-sticky-price]", brl(o.price));
    setAll("[data-sticky-title]", `MarmoreFlex ${o.label}`);
    $$("[data-sticky-img]").forEach((im) => (im.src = o.image));
    setAll("[data-compare]", brl(o.compareAt));
    setAll("[data-off]", `-${pct(o)}%`);
    setAll("[data-save]", brl(o.compareAt - o.price));
    setAll("[data-per-m2]", perM2(o));
    setAll("[data-m2]", `${o.m2} m²`);
    updateSelection(announce);
    if (announce) $(".buybox [data-buy]").scrollIntoView({ behavior: "smooth", block: "center" });
  };
  offersEl.addEventListener("click", (e) => { const b = e.target.closest("[data-offer]"); if (b) selectOffer(b.dataset.offer, true); });
  renderColors(); selectColor(color.name); selectOffer(currentOffer.id);

  /* ---------- Calculadora de área (mesmas faixas do site atual) ---------- */
  const cw = $("[data-calc-w]"), cl = $("[data-calc-l]"), cout = $("[data-calc-out]");
  const fmtNum = (n) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace(".", ","));
  const calc = () => {
    const w = parseFloat(cw.value.replace(",", ".")), l = parseFloat(cl.value.replace(",", "."));
    if (!Number.isFinite(w) || !Number.isFinite(l) || w <= 0 || l <= 0) { cout.hidden = true; return; }
    const area = Math.round(w * l * 100) / 100;
    const fit = S.offers.find((o) => area <= o.m2);
    cout.hidden = false;
    cout.innerHTML = `<p class="muted">Área: ${fmtNum(area)} m²</p>` + (fit
      ? `<p class="rec">Recomendamos a embalagem de ${esc(fit.label)}</p><button type="button" class="calc-pick" data-calc-pick="${fit.id}">Selecionar ${esc(fit.label)} ${icon("right")}</button>`
      : `<p class="rec">Para áreas maiores, combine embalagens ou fale com a gente.</p>`);
  };
  [cw, cl].forEach((i) => i.addEventListener("input", calc));
  cout.addEventListener("click", (e) => {
    const b = e.target.closest("[data-calc-pick]"); if (!b) return;
    selectOffer(b.dataset.calcPick);
    scrollToEl($("#ofertas"));
  });

  /* ---------- Popup "Confirmar pedido" com adicional (próximo tamanho) ---------- */
  const orderModal = $("[data-order-modal]");
  const U = S.upgrade;
  let upgrade = false;
  const finalOffer = () => (upgrade && U.next[currentOffer.id] ? offerById(U.next[currentOffer.id]) : currentOffer);

  // Leva os parâmetros de campanha da URL (utm_, src, sck, fbclid, gclid) para o checkout, como no site atual
  const checkoutFor = (o) => {
    try {
      const u = new URL(o.checkoutUrl);
      new URLSearchParams(location.search).forEach((v, k) => { if (/^(utm_|src|sck|fbclid|gclid)/i.test(k)) u.searchParams.set(k, v); });
      return u.toString();
    } catch { return o.checkoutUrl || "#"; }
  };
  const renderOrder = () => {
    const base = currentOffer, fin = finalOffer();
    setAll("[data-order-color]", color.name);
    $$("[data-order-img]").forEach((im) => { im.src = color.preview; im.alt = `Piso MarmoreFlex ${color.name}`; });
    setAll("[data-order-size]", fin.label);
    setAll("[data-order-m2]", `até ${fin.m2} m²`);
    const toId = U.next[base.id];
    $("[data-order-bumps]").hidden = !toId;
    if (toId) {
      const to = offerById(toId);
      $("[data-order-addons]").innerHTML = `
        <button type="button" class="ob-item${upgrade ? " on" : ""}" data-upgrade aria-pressed="${upgrade}">
          <span class="o-pic ob-pic"><img src="${esc(to.image)}" alt="" loading="lazy"><b class="o-kgtag">${esc(to.label)}</b></span>
          <span class="ob-info"><b>${esc(U.title(to.label, to.m2))}</b><small>${esc(U.detail(to.m2 - base.m2))}</small>
            <span class="ob-price"><s>${brl(to.compareAt - base.compareAt)}</s><b>+ ${brl(to.price - base.price)}</b></span></span>
          <span class="ob-check" aria-hidden="true">${icon("check")}</span>
        </button>`;
    }
    setAll("[data-order-total]", brl(fin.price));
    setAll("[data-order-compare]", brl(fin.compareAt));
    $("[data-order-finish]").href = checkoutFor(fin);
  };
  $("[data-order-addons]").addEventListener("click", (e) => { if (e.target.closest("[data-upgrade]")) { upgrade = !upgrade; renderOrder(); } });
  $$("[data-buy]").forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    upgrade = false;
    renderOrder();
    openModal(orderModal);
  }));
  $("[data-order-change]").addEventListener("click", () => { closeModal(orderModal); setTimeout(() => scrollToEl($("#cores")), 220); });

  /* Meta Pixel: InitiateCheckout com os mesmos parâmetros do site atual
     (content_name "MarmoreFlex <tamanho>", valor e BRL), com trava contra clique duplo. */
  let lastCheckoutFired = 0;
  const trackInitiateCheckout = (o) => {
    const now = Date.now();
    if (now - lastCheckoutFired < 800) return;
    lastCheckoutFired = now;
    try {
      if (typeof window.fbq === "function") window.fbq("track", "InitiateCheckout", {
        content_name: `MarmoreFlex ${o.label}`, content_ids: [o.label], content_type: "product",
        value: o.price / 100, currency: "BRL", num_items: 1
      });
    } catch (_) {}
  };
  $("[data-order-finish]").addEventListener("click", (e) => {
    e.preventDefault();
    const fin = finalOffer();
    const url = checkoutFor(fin);
    trackInitiateCheckout(fin);
    // pequena espera para o evento do Pixel sair antes de trocar de página
    setTimeout(() => (window.location.href = url), 220);
  });

  /* ---------- Listas ---------- */
  $("[data-highlights]").innerHTML = S.highlights.map((h) => `<li>${icon("check")}<span>${esc(h)}</span></li>`).join("");
  $("[data-features]").innerHTML = S.features.map((f) =>
    `<div class="feature"><span class="f-ic">${icon(f.icon)}</span><div><b>${esc(f.title)}</b><p>${esc(f.text)}</p></div></div>`).join("");
  $("[data-specs]").innerHTML = "<tbody>" + S.specs.map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join("") + "</tbody>";
  $("[data-box]").innerHTML = S.box.map((b) => `<li>${icon("check")}<span>${esc(b)}</span></li>`).join("");
  $("[data-faq]").innerHTML = S.faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join("");

  /* ---------- Popup "Compra segura" ---------- */
  const secModal = $("[data-security-modal]");
  setAll("[data-sec-intro]", S.security.intro);
  $("[data-sec-list]").innerHTML = S.security.items.map((it) =>
    `<li><span class="sec-ic">${icon(it.icon)}</span><div><b>${esc(it.title)}</b><p>${esc(it.text)}</p></div></li>`).join("");
  const renderSecStatus = () => {
    // Verificação real do navegador: protocolo desta página
    const https = location.protocol === "https:";
    $("[data-sec-status]").innerHTML = `
      <div class="${https ? "ok" : "warn"}">${icon(https ? "lock" : "shield")}
        <span><b>${https ? "Conexão segura (HTTPS)" : "Ambiente de teste local"}</b>
        <small>${esc(location.hostname || "este site")} · ${https ? "seus dados trafegam criptografados" : "o HTTPS é ativado na publicação"}</small></span></div>`;
  };
  $$("[data-open-security]").forEach((b) => b.addEventListener("click", () => { renderSecStatus(); openModal(secModal); }));

  /* ---------- Avaliações ---------- */
  const months = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const fmtDate = (iso) => { const [y, m, d] = iso.split("-").map(Number); return `${d} de ${months[m - 1]} de ${y}`; };
  const starStr = (n) => "★".repeat(Math.round(n)) + "☆".repeat(5 - Math.round(n));
  const PAGE = 6;
  const reviews = S.reviews.map((r, i) => ({ ...r, _order: i }));
  let shown = PAGE, filterStars = null;
  const renderSummary = () => {
    const R = reviews;
    $("[data-rating-bars]").innerHTML = `<p class="bars-label">Filtrar as ${R.length} avaliações abaixo por nota</p>` + [5, 4, 3, 2, 1].map((n) => {
      const c = R.filter((r) => r.stars === n).length;
      return `<button type="button" class="row${filterStars === n ? " active" : ""}" data-filter-stars="${n}" aria-label="Filtrar avaliações de ${n} estrelas" ${c ? "" : "disabled"}>
        <span>${n}★</span><span class="bar"><i style="width:${R.length ? (c / R.length) * 100 : 0}%"></i></span><span class="muted">${c}</span></button>`;
    }).join("");
  };
  const reviewCard = (r) => {
    const tag = r.mine ? `<span class="tag">Sua avaliação</span>`
      : r.illustrative ? `<span class="tag">Avaliação ilustrativa</span>`
      : `<span class="tag ok">${icon("badge")}Compra verificada</span>`;
    const variant = [r.color, r.size].filter(Boolean).join(" · ");
    return `
    <article class="review${r.mine ? " mine" : ""}">
      <div class="review-head">
        <span class="avatar">${esc((r.name.trim()[0] || "?").toUpperCase())}</span>
        <div><b>${esc(r.name)}</b><small>${esc(r.city)}</small></div>
        ${tag}
      </div>
      <div class="stars" aria-label="${r.stars} de 5 estrelas">${starStr(r.stars)}</div>
      <p>${esc(r.text)}</p>
      ${r.photo ? `<button type="button" class="review-photo photo-fit" style="--img:url('${esc(new URL(r.photo, location.href).href)}')" data-review-photo="${esc(r.photo)}" aria-label="Ampliar foto de ${esc(r.name)}"><img src="${esc(r.photo)}" alt="Foto enviada por ${esc(r.name)}" loading="lazy"></button>` : ""}
      <div class="review-foot">${variant ? `<span class="chip">${esc(variant)}</span>` : "<span></span>"}<small class="muted">${r.date ? fmtDate(r.date) : ""}</small></div>
    </article>`;
  };
  const renderReviews = () => {
    const q = ($("[data-review-search]").value || "").trim().toLocaleLowerCase("pt-BR");
    const sort = $("[data-review-sort]").value;
    const list = reviews.filter((r) => (!filterStars || r.stars === filterStars) &&
      (!q || `${r.name} ${r.city} ${r.color || ""} ${r.size || ""} ${r.text}`.toLocaleLowerCase("pt-BR").includes(q)));
    const byDate = (a, b) => (!!b.mine - !!a.mine) || (b.date || "").localeCompare(a.date || "") || a._order - b._order;
    list.sort(sort === "high" ? (a, b) => b.stars - a.stars || byDate(a, b)
      : sort === "low" ? (a, b) => a.stars - b.stars || byDate(a, b)
      : sort === "photo" ? (a, b) => (!!b.photo - !!a.photo) || byDate(a, b)
      : byDate);
    $("[data-reviews]").innerHTML = list.slice(0, shown).map(reviewCard).join("");
    $("[data-reviews-empty]").hidden = list.length > 0;
    $("[data-reviews-more]").hidden = list.length <= shown;
    $("[data-review-filter]").hidden = !filterStars;
    setAll("[data-filter-label]", `${filterStars} estrela${filterStars > 1 ? "s" : ""}`);
  };
  $("[data-rating-bars]").addEventListener("click", (e) => {
    const b = e.target.closest("[data-filter-stars]"); if (!b) return;
    const n = +b.dataset.filterStars;
    filterStars = filterStars === n ? null : n; shown = PAGE;
    renderSummary(); renderReviews();
  });
  $("[data-clear-filter]").onclick = () => { filterStars = null; renderSummary(); renderReviews(); };
  $("[data-review-search]").addEventListener("input", () => { shown = PAGE; renderReviews(); });
  $("[data-review-sort]").addEventListener("change", renderReviews);
  $("[data-reviews-more]").onclick = () => { shown += PAGE; renderReviews(); };
  $("[data-reviews]").addEventListener("click", (e) => {
    if (pageTouchMoved) return;
    const b = e.target.closest("[data-review-photo]"); if (!b) return;
    e.preventDefault();
    lbOpen([{ src: b.dataset.reviewPhoto, alt: "Foto do cliente" }], 0);
  });
  renderSummary(); renderReviews();

  // Formulário: publica só nesta página (site estático, nada é salvo — some ao atualizar)
  const form = $("[data-review-form]");
  let rfStars = 0, rfPhoto = null;
  $("[data-rf-color]").innerHTML = `<option value="">Selecione a cor</option>` + allColors.map((c) => `<option>${esc(c.name)}</option>`).join("");
  $("[data-rf-size]").innerHTML = `<option value="">Selecione o tamanho</option>` + S.offers.map((o) => `<option>${esc(o.label)}</option>`).join("");
  const paintStars = (n) => $$("[data-star]").forEach((b) => b.classList.toggle("on", +b.dataset.star <= n));
  $("[data-rf-stars]").addEventListener("click", (e) => { const b = e.target.closest("[data-star]"); if (b) { rfStars = +b.dataset.star; paintStars(rfStars); } });
  $("[data-rf-stars]").addEventListener("mouseover", (e) => { const b = e.target.closest("[data-star]"); if (b) paintStars(+b.dataset.star); });
  $("[data-rf-stars]").addEventListener("mouseleave", () => paintStars(rfStars));
  $("[data-rf-photo]").addEventListener("change", (e) => {
    const f = e.target.files[0];
    const prev = $("[data-rf-preview]");
    if (rfPhoto) URL.revokeObjectURL(rfPhoto);
    rfPhoto = f && f.type.startsWith("image/") ? URL.createObjectURL(f) : null;
    prev.hidden = !rfPhoto; if (rfPhoto) prev.src = rfPhoto;
    setAll("[data-rf-file-label]", f ? f.name : "Foto do produto aplicado (opcional)");
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const val = (k) => String(d.get(k) || "").trim();
    const errEl = $("[data-rf-error]");
    const state = val("state"), city = val("city");
    const err = val("name").length < 2 ? "Informe seu nome."
      : !state ? "Selecione o seu estado (UF)."
      : !rfStars ? "Escolha sua nota de 1 a 5 estrelas."
      : val("text").length < 10 ? "Escreva pelo menos 10 caracteres na avaliação." : "";
    errEl.textContent = err; errEl.hidden = !err;
    if (err) return;
    reviews.unshift({ name: val("name"), city: city ? `${city}, ${state}` : state, stars: rfStars, text: val("text"),
      color: val("color"), size: val("size"), photo: rfPhoto, date: new Date().toISOString().slice(0, 10), mine: true, _order: -1 });
    form.reset(); rfStars = 0; rfPhoto = null; paintStars(0);
    $("[data-rf-preview]").hidden = true; setAll("[data-rf-file-label]", "Foto do produto aplicado (opcional)");
    $("[data-review-form-wrap]").open = false;
    filterStars = null; $("[data-review-search]").value = ""; $("[data-review-sort]").value = "recent"; shown = PAGE;
    renderSummary(); renderReviews();
    const ok = $("[data-rf-success]");
    ok.hidden = false;
    ok.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => (ok.hidden = true), 9000);
  });

  /* ---------- Depoimentos em vídeo ---------- */
  if (S.videos && S.videos.length) {
    $("[data-videos]").hidden = false;
    $("[data-video-track]").innerHTML = S.videos.map((v) => `
      <figure class="video-card">
        <video src="${esc(v.src)}" poster="${esc(v.poster)}" playsinline controls preload="none"></video>
        <figcaption><b>${esc(v.name)}</b><span class="stars">★★★★★</span><small>Cliente verificado</small><span class="muted">${esc(v.city)}</span></figcaption>
      </figure>`).join("");
    // toca um por vez
    $("[data-video-track]").addEventListener("play", (e) => $$("[data-video-track] video").forEach((v) => v !== e.target && v.pause()), true);
  }

  /* ---------- Fotos reais (fotos enviadas nas avaliações) ---------- */
  const RP = S.reviews.filter((r) => r.photo).map((r) => ({ src: r.photo, alt: `Foto enviada por ${r.name} — ${r.color}` }));
  if (RP.length) {
    $("[data-real-photos]").innerHTML = RP.map((p, i) =>
      `<button type="button" class="photo-fit" style="--img:url('${esc(new URL(p.src, location.href).href)}')" data-rp="${i}" aria-label="Ampliar foto ${i + 1}">
        <img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy"></button>`).join("");
    setAll("[data-rp-count]", `${RP.length} fotos`);
    $("[data-real-photos]").addEventListener("click", (e) => {
      if (pageTouchMoved) return;
      const b = e.target.closest("[data-rp]"); if (b) lbOpen(RP, +b.dataset.rp);
    });
  } else $("[data-real-photos-wrap]").hidden = true;

  /* ---------- Contagem regressiva ---------- */
  const end = new Date(S.offerEndsAt).getTime();
  const pad = (n) => String(n).padStart(2, "0");
  const boxes = $$("[data-countdown]");
  boxes.forEach((b) => (b.innerHTML = ["Dias", "Horas", "Min", "Seg"].map((l) => `<div><b>00</b><small>${l}</small></div>`).join("")));
  const tick = () => {
    const ms = Math.max(0, end - Date.now());
    const d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60, s = Math.floor(ms / 1e3) % 60;
    setAll("[data-countdown-inline]", `${pad(d)}d ${pad(h)}:${pad(m)}:${pad(s)}`);
    boxes.forEach((b) => $$("b", b).forEach((el, i) => (el.textContent = pad([d, h, m, s][i]))));
  };
  tick(); setInterval(tick, 1000);

  /* ---------- Menu lateral ---------- */
  const drawer = $("[data-drawer]");
  const toggleDrawer = (open) => {
    if (drawer.classList.contains("open") === open) return;
    drawer.classList.toggle("open", open);
    drawer.setAttribute("aria-hidden", !open);
    if (open) lockBodyScroll(); else unlockBodyScroll();
  };
  $$("[data-open-drawer]").forEach((b) => (b.onclick = () => toggleDrawer(true)));
  $$("[data-close-drawer]").forEach((b) => b.addEventListener("click", () => toggleDrawer(false)));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { toggleDrawer(false); lbClose(); $$(".modal.open").forEach(closeModal); }
    if (lb.classList.contains("open") && (e.key === "ArrowRight" || e.key === "ArrowLeft")) lbStep(e.key === "ArrowRight" ? 1 : -1);
  });

  /* ---------- Barra fixa de compra (leva até as ofertas) ---------- */
  const sticky = $("[data-sticky]");
  const ofertas = $("#ofertas");
  const mainBuy = $(".buybox [data-buy]");
  let ofertasVisible = true, buyVisible = true;
  const syncSticky = () => sticky.classList.toggle("show", !ofertasVisible && !buyVisible && ofertas.getBoundingClientRect().top < 0);
  new IntersectionObserver(([e]) => { ofertasVisible = e.isIntersecting; syncSticky(); }).observe(ofertas);
  new IntersectionObserver(([e]) => { buyVisible = e.isIntersecting; syncSticky(); }).observe(mainBuy);
  $$("[data-goto-buy]").forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    scrollToEl(ofertas);
    mainBuy.classList.remove("attention"); void mainBuy.offsetWidth; mainBuy.classList.add("attention");
  }));

  /* ---------- Animação de entrada ao rolar ---------- */
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const els = $$("main > .section, #descricao > .bnr, #descricao > .bnr-specs, #descricao > .desc-img, .trust > div");
    els.forEach((el) => { if (el.getBoundingClientRect().top > innerHeight) el.classList.add("reveal"); });
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
  }
})();
