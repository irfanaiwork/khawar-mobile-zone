/* ============================================================
   KHAWAR MOBILE ZONE — SHARED SITE ENGINE
   Header, footer, cart (localStorage), rendering, motion.
   Pages set: window.KMZ_BASE ('.' or '..') and window.KMZ_PAGE.
   ============================================================ */
(function () {
  "use strict";
  const BASE = window.KMZ_BASE || ".";
  const PAGE = window.KMZ_PAGE || "home";
  const asset = (p) => BASE + "/assets/" + p;

  const I = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
    smartphone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>',
    logoMark: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>'
  };

  const NAV = [
    { key: "home", label: "Home", href: BASE + "/" },
    { key: "phones", label: "Phones & Services", href: BASE + "/phones-services/" },
    { key: "about", label: "About Us", href: BASE + "/about/" },
    { key: "contact", label: "Contact", href: BASE + "/contact/" }
  ];
  const navLinks = (cls) => NAV.map(n =>
    `<a class="${cls || ""} ${PAGE === n.key ? "active" : ""}" href="${n.href}">${n.label}</a>`).join("");

  /* ---------------- Header / footer ---------------- */
  function buildHeader() {
    const el = document.querySelector("[data-header]");
    if (!el) return;
    el.innerHTML = `
    <header class="site-header" id="siteHeader">
      <div class="header-in">
        <a class="logo" href="${BASE}/" aria-label="Khawar Mobile Zone — Home">
          <img class="logo-img" src="${asset("img/logo.png")}" alt="Khawar Mobile Zone" width="267" height="50">
        </a>
        <nav class="main-nav" aria-label="Main navigation"><ul>
          ${NAV.map(n => `<li><a class="${PAGE === n.key ? "active" : ""}" href="${n.href}">${n.label}</a></li>`).join("")}
        </ul></nav>
        <div class="header-actions">
          <a class="btn btn-outline btn-sm" href="${BUSINESS.phoneLink}">${I.phone} ${BUSINESS.phoneDisplay}</a>
          <a class="btn btn-wa btn-sm" href="${BUSINESS.whatsappGeneral}" target="_blank" rel="noopener">${I.wa} WhatsApp</a>
          <button class="icon-btn" type="button" data-cart-open aria-label="Open shopping cart">
            ${I.cart}<span class="cart-count" data-cart-count>0</span>
          </button>
          <button class="icon-btn hamburger" type="button" data-menu-open aria-label="Open menu">${I.menu}</button>
        </div>
      </div>
    </header>
    <div class="mobile-drawer" data-mobile-drawer aria-hidden="true">
      <div class="scrim" data-menu-close></div>
      <div class="drawer-panel">
        <button class="icon-btn drawer-close" type="button" data-menu-close aria-label="Close menu">${I.x}</button>
        <nav aria-label="Mobile navigation">${navLinks()}</nav>
        <div class="drawer-foot">
          <a class="btn btn-navy btn-block" href="${BUSINESS.phoneLink}">${I.phone} Call ${BUSINESS.phoneDisplay}</a>
          <a class="btn btn-wa btn-block" href="${BUSINESS.whatsappGeneral}" target="_blank" rel="noopener">${I.wa} Chat on WhatsApp</a>
        </div>
      </div>
    </div>`;
    el.querySelector("[data-menu-open]").addEventListener("click", () => toggleMenu(true));
    el.querySelectorAll("[data-menu-close]").forEach(b => b.addEventListener("click", () => toggleMenu(false)));
    el.querySelector("[data-cart-open]").addEventListener("click", () => toggleCart(true));
    window.addEventListener("scroll", () => {
      document.getElementById("siteHeader").classList.toggle("scrolled", window.scrollY > 8);
    }, { passive: true });
  }
  function toggleMenu(open) {
    const d = document.querySelector("[data-mobile-drawer]");
    if (d) { d.classList.toggle("open", open); d.setAttribute("aria-hidden", String(!open)); document.body.style.overflow = open ? "hidden" : ""; }
  }

  function buildFooter() {
    const el = document.querySelector("[data-footer]");
    if (!el) return;
    el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-in">
          <div>
            <div class="footer-logo"><span class="footer-logo-plate"><img class="logo-img" src="${asset("img/logo.png")}" alt="Khawar Mobile Zone" width="235" height="44"></span></div>
            <p>Your local mobile phone shop for genuine smartphones from leading brands — with honest advice and personal service, every day.</p>
          </div>
          <div><h4>Quick Links</h4><ul>
            ${NAV.map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
          </ul></div>
          <div><h4>Contact</h4><ul>
            <li><a href="${BUSINESS.phoneLink}">Phone: ${BUSINESS.phoneDisplay}</a></li>
            <li><a href="${BUSINESS.whatsappGeneral}" target="_blank" rel="noopener">WhatsApp: ${BUSINESS.whatsappDisplay}</a></li>
            <li>${BUSINESS.hoursLabel}</li>
          </ul></div>
          <div><h4>Location</h4><ul>
            <li>${BUSINESS.address}</li>
            <li><a href="${BUSINESS.mapsDirections}" target="_blank" rel="noopener">Get Directions</a></li>
            <li>${BUSINESS.hoursLabel}</li>
          </ul></div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Khawar Mobile Zone. All rights reserved.</span>
          <span>Al Hassan Mobile Market · Khairpur Tamewali</span>
        </div>
      </div>
    </footer>`;
  }

  /* ---------------- Floating WhatsApp + cart drawer shells ---------------- */
  function buildFloating() {
    const wa = document.createElement("a");
    wa.className = "wa-float"; wa.href = BUSINESS.whatsappGeneral; wa.target = "_blank"; wa.rel = "noopener";
    wa.setAttribute("aria-label", "Chat with Khawar Mobile Zone on WhatsApp");
    wa.innerHTML = I.wa;
    document.body.appendChild(wa);

    const root = document.createElement("div");
    root.className = "cart-root"; root.setAttribute("data-cart-root", ""); root.setAttribute("aria-hidden", "true");
    root.innerHTML = `
      <div class="scrim" data-cart-close></div>
      <aside class="cart-drawer" role="dialog" aria-label="Shopping cart">
        <div class="cart-head"><h3>Your Cart</h3>
          <button class="icon-btn" type="button" data-cart-close aria-label="Close cart">${I.x}</button></div>
        <div class="cart-items" data-cart-items></div>
        <div class="cart-foot">
          <button class="btn btn-wa btn-block" type="button" data-cart-checkout>${I.wa} WhatsApp Par Order Karein</button>
          <button class="btn btn-outline btn-block" type="button" data-cart-clear>Clear Cart</button>
          <button class="btn btn-block" type="button" data-cart-close style="color:var(--navy);font-weight:700">Continue Shopping</button>
          <p class="cart-note">Rates are confirmed on WhatsApp before your order is finalised.</p>
        </div>
      </aside>`;
    document.body.appendChild(root);
    root.querySelectorAll("[data-cart-close]").forEach(b => b.addEventListener("click", () => toggleCart(false)));
    root.querySelector("[data-cart-clear]").addEventListener("click", () => { cart = {}; saveCart(); renderCart(); });
    root.querySelector("[data-cart-checkout]").addEventListener("click", checkout);
  }
  function toggleCart(open) {
    const r = document.querySelector("[data-cart-root]");
    if (r) { r.classList.toggle("open", open); r.setAttribute("aria-hidden", String(!open)); document.body.style.overflow = open ? "hidden" : ""; }
  }

  /* ---------------- Cart state (localStorage) ---------------- */
  const CART_KEY = "kmz_cart_v1";
  let cart = loadCart();
  function loadCart() {
    try {
      const raw = localStorage.getItem(CART_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      const clean = {};
      if (parsed && typeof parsed === "object") {
        for (const [id, qty] of Object.entries(parsed)) {
          if (PRODUCTS.some(p => p.id === id) && Number.isInteger(qty) && qty > 0 && qty <= 99) clean[id] = qty;
        }
      }
      return clean;
    } catch (e) { return {}; }
  }
  function saveCart() { try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) {} }
  function cartCount() { return Object.values(cart).reduce((a, b) => a + b, 0); }

  function renderCart() {
    document.querySelectorAll("[data-cart-count]").forEach(c => { c.textContent = cartCount(); });
    const wrap = document.querySelector("[data-cart-items]");
    if (!wrap) return;
    const ids = Object.keys(cart);
    if (!ids.length) {
      wrap.innerHTML = `<div class="cart-empty">${I.cart}<p>Your cart is empty.<br>Add a phone and order on WhatsApp.</p></div>`;
    } else {
      wrap.innerHTML = ids.map(id => {
        const p = PRODUCTS.find(x => x.id === id);
        return `<div class="cart-item">
          <img src="${asset("img/products/" + p.image)}" alt="${p.alt}">
          <div><div class="nm">${p.name}</div><div class="br">${p.brand}</div>
            <span class="qty">
              <button type="button" data-qty="${id}|-1" aria-label="Decrease quantity">−</button>
              <output>${cart[id]}</output>
              <button type="button" data-qty="${id}|1" aria-label="Increase quantity">+</button>
            </span>
            <a class="cart-remove" href="#" data-remove="${id}">Remove</a>
          </div>
          <div class="cart-side"><button class="cart-trash" type="button" data-remove="${id}" aria-label="Remove ${p.name} from cart">${I.trash}</button></div>
        </div>`;
      }).join("");
    }
    wrap.querySelectorAll("[data-qty]").forEach(b => b.addEventListener("click", () => {
      const [id, d] = b.dataset.qty.split("|");
      cart[id] = (cart[id] || 0) + parseInt(d, 10);
      if (cart[id] <= 0) delete cart[id];
      saveCart(); renderCart();
    }));
    wrap.querySelectorAll("[data-remove]").forEach(b => b.addEventListener("click", (e) => {
      e.preventDefault(); delete cart[b.dataset.remove]; saveCart(); renderCart();
    }));
    const co = document.querySelector("[data-cart-checkout]");
    if (co) { if (!ids.length) co.setAttribute("disabled", ""); else co.removeAttribute("disabled"); }
  }

  function addToCart(id, btn) {
    cart[id] = (cart[id] || 0) + 1;
    saveCart(); renderCart();
    document.querySelectorAll("[data-cart-count]").forEach(c => {
      c.classList.remove("pop"); void c.offsetWidth; c.classList.add("pop");
    });
    if (btn) {
      const card = btn.closest(".product-card");
      if (card) { card.classList.remove("added-flash"); void card.offsetWidth; card.classList.add("added-flash"); }
      const old = btn.innerHTML;
      btn.innerHTML = old.replace("Add to Cart", "Added to Cart");
      setTimeout(() => { btn.innerHTML = old; }, 1200);
    }
  }

  function checkout() {
    const ids = Object.keys(cart);
    if (!ids.length) return;
    const lines = ids.map((id, i) => {
      const p = PRODUCTS.find(x => x.id === id);
      return `${i + 1}. ${p.name} - Adad: ${cart[id]}`;
    });
    const msg = "Assalam o Alaikum! Mujhe Khawar Mobile Zone se ye phones khareedne hain:\n\n" +
      lines.join("\n") +
      "\n\nMeharbani karke in ki total price aur availability confirm kar dein.\n\nShukriya!";
    window.open(waLink(msg), "_blank", "noopener");
  }

  /* ---------------- Rendering: products / brands / gallery ---------------- */
  function productCard(p) {
    const rateMsg = waLink(`Assalam o Alaikum! Mujhe ${p.name} ka rate aur availability confirm kar dein. Shukriya!`);
    return `<article class="product-card tilt">
      <div class="product-media"><img loading="lazy" src="${asset("img/products/" + p.image)}" alt="${p.alt}"></div>
      <div class="product-body">
        <span class="product-brand">${p.brand}</span>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-rate">${I.wa} Rate WhatsApp par confirm hoga</p>
        <div class="product-actions">
          <button class="btn btn-cart" type="button" data-add="${p.id}">Add to Cart</button>
          <a class="btn btn-rate" href="${rateMsg}" target="_blank" rel="noopener">Rate on WhatsApp</a>
        </div>
      </div>
    </article>`;
  }
  function renderProducts() {
    document.querySelectorAll("[data-products]").forEach(grid => {
      grid.innerHTML = PRODUCTS.map(productCard).join("");
      grid.querySelectorAll("[data-add]").forEach(b =>
        b.addEventListener("click", () => addToCart(b.dataset.add, b)));
    });
  }
  function renderBrands() {
    document.querySelectorAll("[data-brand-marquee]").forEach(m => {
      const set = BRANDS.map(b => `<img style="height:${b.h}px" src="${asset("img/brands/" + b.logo)}" alt="${b.name} logo" loading="lazy">`).join("");
      m.innerHTML = `<div class="marquee-track"><div class="marquee-set">${set}</div><div class="marquee-set" aria-hidden="true">${set}</div></div>`;
    });
    document.querySelectorAll("[data-brand-grid]").forEach(g => {
      g.innerHTML = BRANDS.map(b => `
        <a class="brand-card tilt" href="${BASE}/phones-services/" aria-label="Explore ${b.name} phones">
          <img style="height:${Math.round(b.h * 1.25)}px" src="${asset("img/brands/" + b.logo)}" alt="${b.name} logo" loading="lazy"><span>${b.name}</span>
        </a>`).join("");
    });
  }
  function renderGallery() {
    document.querySelectorAll("[data-gallery]").forEach(g => {
      const items = [SHOP_IMAGES.exterior, SHOP_IMAGES.interior, SHOP_IMAGES.counter, SHOP_IMAGES.showcase];
      g.innerHTML = items.map(s => `
        <figure class="gallery-item tilt" data-lightbox="${asset("img/shop/" + s.file)}">
          <img loading="lazy" src="${asset("img/shop/" + s.file)}" alt="${s.alt}">
          <figcaption>${s.label}</figcaption>
        </figure>`).join("");
      g.querySelectorAll("[data-lightbox]").forEach(f => f.addEventListener("click", () => openLightbox(f.dataset.lightbox)));
    });
  }
  function openLightbox(src) {
    let lb = document.querySelector(".lightbox");
    if (!lb) {
      lb = document.createElement("div"); lb.className = "lightbox";
      lb.innerHTML = `<button type="button" aria-label="Close image viewer">${I.x}</button><img alt="Shop photograph enlarged">`;
      document.body.appendChild(lb);
      lb.addEventListener("click", () => lb.classList.remove("open"));
    }
    lb.querySelector("img").src = src;
    lb.classList.add("open");
  }

  /* ---------------- Opening hours (Asia/Karachi) ---------------- */
  function pktNow() { return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" })); }
  function isOpen() { const h = pktNow().getHours(); return h >= BUSINESS.openHour && h < BUSINESS.closeHour; }
  function renderHours() {
    const open = isOpen();
    document.querySelectorAll("[data-open-status]").forEach(el => {
      el.innerHTML = `<span class="dot"></span> ${open ? "Open Now" : "Closed"} · 9:00 AM – 9:00 PM`;
      el.classList.toggle("closed", !open);
    });
    document.querySelectorAll("[data-open-text]").forEach(el => {
      el.textContent = open ? "Open Today" : "Opens 9:00 AM";
    });
    const today = pktNow().getDay(); // 0 = Sunday
    document.querySelectorAll(".hours-table tr[data-dow]").forEach(tr => {
      if (parseInt(tr.dataset.dow, 10) === today) {
        tr.classList.add("today");
        const td = tr.querySelector("td");
        if (td && !td.querySelector(".today-tag")) td.insertAdjacentHTML("beforeend", '<span class="today-tag">Today</span>');
      }
    });
  }

  /* ---------------- Motion: reveal + tilt ---------------- */
  function initMotion() {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver((es) => es.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
    if (reduce || window.matchMedia("(hover: none)").matches) return;
    document.querySelectorAll(".tilt").forEach(card => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-3px)`;
        card.style.transition = "transform .08s ease-out";
      });
      card.addEventListener("pointerleave", () => {
        card.style.transition = "transform .45s cubic-bezier(.22,.8,.3,1)";
        card.style.transform = "";
      });
    });
  }

  /* ---------------- Map embeds ---------------- */
  function renderMaps() {
    document.querySelectorAll("[data-map]").forEach(f => { f.src = BUSINESS.mapsEmbed; });
    document.querySelectorAll("[data-directions]").forEach(a => { a.href = BUSINESS.mapsDirections; });
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildHeader(); buildFooter(); buildFloating();
    renderProducts(); renderBrands(); renderGallery();
    renderCart(); renderHours(); renderMaps(); initMotion();
  });
})();
