const money = (value) => `₹${value}`;
const img = (name) => `assets/images/${name}`;

const gallery = [
  ["exterior-night.png", "Illuminated exterior"],
  ["exterior-day.png", "UGAADI CAFE facade"],
  ["interior-peacock.png", "Traditional interior"],
  ["breakfast-plates.png", "South Indian breakfast"],
  ["dosa-table.png", "Dosa and chutneys"],
  ["family-dosa.png", "Family dosa"],
  ["filter-coffee-premium.png", "Filter coffee"],
  ["ghee-podi-masala-dosa.png", "Ghee podi masala dosa"],
  ["upma-dosa.png", "Upma dosa"],
  ["sambar-idly.png", "Chitti sambar idly"],
  ["spice-caddy.png", "Traditional chutneys"],
  ["pot-junnu.png", "Pot junnu"],
  ["apricot-delight.png", "Apricot delight"],
  ["chilli-parotta.png", "Chilli parotta"],
  ["schezwan-fried-rice.png", "Schezwan fried rice"]
];

const amenities = [
  ["100% Vegetarian", "Pure vegetarian Telugu dining for families and community gatherings.", "VG"],
  ["Authentic Telugu Recipes", "Dosas, chutneys, rice items, sweets, and filter coffee rooted in familiar Andhra flavours.", "TE"],
  ["Family Dining", "Warm tables, comfortable interiors, and food made for sharing.", "FD"],
  ["Community Gathering Place", "A neighbourhood space for celebrations, quick breakfasts, and long conversations.", "CG"],
  ["Freshly Prepared Food", "Breakfast, tiffins, meals, snacks, sweets, and beverages prepared with care.", "FP"],
  ["Traditional Chutneys", "Classic podis, chutneys, sambar, and serving details that complete the plate.", "TC"],
  ["Affordable Pricing", "Value-led vegetarian dining with menu items and meals in the ₹1-200 range.", "₹"],
  ["Open Until 11:30 PM", "Open daily for breakfast, lunch, dinner, coffee, and evening snacks.", "11"],
  ["Google Rating 4.0", "Known locally with 900+ Google reviews and steady guest attention.", "4★"],
  ["900+ Reviews", "Guest highlights mention breakfast variety, vegetarian food, atmosphere, and hospitality.", "900"]
];

const signatures = [
  ["Chitti Sambar Idly", "చిట్టి సాంబార్ ఇడ్లీ", "Mini idly soaked in comforting sambar, served with homely warmth.", 80, "sambar-idly.png"],
  ["Ghee Podi Dosa", "నెయ్యి పొడి దోసె", "Crisp dosa finished with fragrant podi and ghee.", 90, "ghee-podi-idly.png"],
  ["Ghee Podi Masala Dosa", "నెయ్యి పొడి మసాలా దోసె", "Golden dosa, spiced potato masala, chutneys, and a rich ghee finish.", 120, "ghee-podi-masala-dosa.png"],
  ["Multigrain Dosa", "మల్టిగ్రెయిన్ దోసె", "A wholesome dosa with traditional chutneys.", 70, "dosa-table.png"],
  ["Filter Coffee", "ఫిల్టర్ కాఫీ", "Brass tumbler coffee with the aroma of a South Indian morning.", 35, "filter-coffee-premium.png"],
  ["Veg Biryani", "వెజ్ బిర్యానీ", "Fragrant vegetarian rice cooked with spices and a festive Telugu touch.", 120, "schezwan-fried-rice.png"],
  ["Ghee Pongal", "నెయ్యి పొంగల్", "Soft, warm, and comforting with sambar, chutney, and crisp sides.", 80, "pongal-pappad.png"],
  ["Family Dosa", "ఫ్యామిలీ దోసె", "A generous dosa made for sharing at the table.", 220, "family-dosa.png"],
  ["Rava Dosa", "రవ్వ దోసె", "Lacy crisp dosa with classic accompaniments.", 70, "dosa-table.png"],
  ["Uthappam", "ఉత్తప్పం", "Soft, filling, and served with chutney and sambar.", 80, "breakfast-plates.png"]
];

const menu = {
  Idly: [
    item("Plain Idly", "ఇడ్లీ", "Soft steamed idly with sambar and chutney.", 50, "breakfast-plates.png"),
    item("Chitti Sambar Idly", "చిట్టి సాంబార్ ఇడ్లీ", "Mini idly served in hot sambar.", 80, "sambar-idly.png"),
    item("Ghee Podi Idly", "నెయ్యి పొడి ఇడ్లీ", "Idly finished with ghee and podi.", 80, "ghee-podi-idly.png"),
    item("Ragi Idly", "రాగి ఇడ్లీ", "Wholesome ragi idly with chutneys.", 60, "ragi-idly.png")
  ],
  Vada: [
    item("Mirchi Bajji", "మిర్చి బజ్జి", "Evening snack with chutney.", 60, "bonda.png"),
    item("Mysore Bonda", "మైసూర్ బోండా", "Crisp outside, soft inside, served hot.", 60, "bonda.png"),
    item("Punugulu", "పునుగులు", "Classic Telugu snack for tea time.", 60, "bonda.png")
  ],
  Dosa: [
    item("Plain Dosa", "ప్లెయిన్ దోసె", "Crisp dosa with chutney and sambar.", 60, "dosa-table.png"),
    item("Topi Dosa", "టోపీ దోసె", "Tall, crisp cone-style dosa.", 70, "family-dosa.png"),
    item("Onion Dosa", "ఆనియన్ దోసె", "Dosa with onion and classic sides.", 80, "dosa-table.png"),
    item("Ghee Podi Dosa", "నెయ్యి పొడి దోసె", "Podi dosa enriched with ghee.", 90, "ghee-podi-idly.png"),
    item("Ghee Podi Masala Dosa", "నెయ్యి పొడి మసాలా దోసె", "Signature masala dosa with ghee podi.", 120, "ghee-podi-masala-dosa.png"),
    item("Guntur Karam Dosa", "గుంటూరు కారం దోసె", "Spicy dosa with fiery Andhra character.", 110, "dosa-table.png"),
    item("Open Butter Masala Dosa", "ఓపెన్ బట్టర్ మసాలా దోసె", "Open dosa with butter, masala, and chutneys.", 110, "ghee-podi-masala-dosa.png"),
    item("Onion Pesarattu", "ఆనియన్ పెసరట్టు", "Green gram dosa with onion.", 60, "ragi-idly.png"),
    item("Upma Pesarattu", "ఉప్మా పెసరట్టు", "Pesarattu filled with upma.", 70, "upma-dosa.png"),
    item("Rava Dosa", "రవ్వ దోసె", "Thin, crisp rava dosa.", 70, "dosa-table.png"),
    item("Onion Rava Dosa", "ఆనియన్ రవ్వ దోసె", "Rava dosa with onion.", 80, "dosa-table.png"),
    item("Multigrain Dosa", "మల్టిగ్రెయిన్ దోసె", "Wholesome multigrain dosa.", 70, "ragi-idly.png"),
    item("Family Dosa", "ఫ్యామిలీ దోసె", "Large sharing dosa for the table.", 220, "family-dosa.png"),
    item("Uthappam", "ఉత్తప్పం", "Soft uthappam served with sambar and chutney.", 80, "breakfast-plates.png")
  ],
  Pongal: [
    item("Ghee Pongal", "నెయ్యి పొంగల్", "Comforting pongal with ghee.", 80, "pongal-pappad.png"),
    item("Chakkara Pongal", "చక్కర పొంగల్", "Traditional sweet pongal.", 80, "ghee.png")
  ],
  Upma: [
    item("Upma", "ఉప్మా", "Homely upma served with chutney.", 60, "upma-dosa.png"),
    item("Upma Dosa", "ఉప్మా దోసె", "Dosa served with upma filling.", 90, "upma-dosa.png")
  ],
  Poori: [
    item("Poori", "పూరీ", "Fluffy poori with potato curry.", 80, "breakfast-plates.png"),
    item("Chapati Kurma", "చపాతీ కుర్మా", "Chapati served with vegetable kurma.", 80, null),
    item("Parotta Kurma", "పరోటా కుర్మా", "Layered parotta with kurma.", 100, "chilli-parotta.png"),
    item("Chilli Parotta", "చిల్లీ పరోటా", "Spicy parotta tossed with chilli masala.", 110, "chilli-parotta.png")
  ],
  Thali: [
    item("UGAADI Bhojanam", "ఉగాది భోజనం", "Traditional vegetarian meal served during lunch hours.", 200, "pongal-plate.png")
  ],
  "Rice Items": [
    item("Pulihora", "పులిహోర", "Tangy Telugu tamarind rice.", 120, "curd-rice.png"),
    item("Veg Biryani", "వెజ్ బిర్యానీ", "Vegetarian biryani with spices.", 120, "schezwan-fried-rice.png"),
    item("Coconut Rice", "కొబ్బరి అన్నం", "Mild coconut rice.", 120, "curd-rice.png"),
    item("Sambar Rice", "సాంబార్ అన్నం", "Rice mixed with sambar comfort.", 120, "pongal-plate.png"),
    item("Gongura Rice", "గోంగూర అన్నం", "Andhra-style gongura rice.", 120, null),
    item("Mudda Pappu Avakai Annam", "ముద్దపప్పు ఆవకాయ అన్నం", "Telugu dal, pickle, and rice comfort plate.", 120, "pongal-plate.png"),
    item("Curd Rice", "పెరుగు అన్నం", "Cooling curd rice with garnish.", 100, "curd-rice.png"),
    item("Combo Rice", "కాంబో రైస్", "A filling rice combo.", 180, "pongal-plate.png")
  ],
  Snacks: [
    item("Crispy Veg Balls", "క్రిస్పీ వెజ్ బాల్స్", "Crisp vegetarian bites.", 140, "bonda.png"),
    item("Veg Manchurian", "వెజ్ మంచూరియన్", "Saucy Indo-Chinese vegetarian favourite.", 150, null),
    item("Paneer 65", "పనీర్ 65", "Spicy paneer starter.", 175, null),
    item("Veg Fried Rice", "వెజ్ ఫ్రైడ్ రైస్", "Classic vegetarian fried rice.", 140, "schezwan-fried-rice.png"),
    item("Schezwan Fried Rice", "సెజ్వాన్ ఫ్రైడ్ రైస్", "Spicy fried rice with bold flavour.", 160, "schezwan-fried-rice.png"),
    item("Mushroom Fried Rice", "మష్రూమ్ ఫ్రైడ్ రైస్", "Fried rice with mushrooms.", 150, "schezwan-fried-rice.png"),
    item("Chilli Garlic Fried Rice", "చిల్లీ గార్లిక్ ఫ్రైడ్ రైస్", "Garlic-forward spicy rice.", 150, "schezwan-fried-rice.png")
  ],
  Sweets: [
    item("Pot Junnu", "పాట్ జున్ను", "Traditional Telugu milk pudding.", 70, "pot-junnu.png"),
    item("Carrot Halwa", "క్యారెట్ హల్వా", "Warm carrot sweet.", 80, "ghee.png"),
    item("Pineapple Kesari", "పైన్ ఆపిల్ కేసరి", "Kesari with pineapple notes.", 80, "ghee.png"),
    item("Apricot Delight", "ఆప్రికాట్ డిలైట్", "Premium creamy apricot dessert.", 150, "apricot-delight.png"),
    item("Sitaphal Malai", "సీతాఫల్ మలై", "Creamy fruit dessert.", 150, "apricot-delight.png")
  ],
  Beverages: [
    item("Tea", "టీ", "Hot tea.", 25, "filter-coffee-real.png"),
    item("Green Tea", "గ్రీన్ టీ", "Light hot beverage.", 30, null),
    item("Lemon Tea", "నిమ్మ టీ", "Fresh lemon tea.", 30, null),
    item("Boost", "బూస్ట్", "Hot malt drink.", 30, null),
    item("Horlicks", "హార్లిక్స్", "Hot malt drink.", 30, null),
    item("Hot Badam Milk", "బాదం పాలు", "Warm badam milk.", 30, "pot-junnu.png"),
    item("Filter Coffee", "ఫిల్టర్ కాఫీ", "Brass tumbler South Indian coffee.", 35, "filter-coffee-premium.png"),
    item("Butter Milk", "మజ్జిగ", "Cooling masala buttermilk.", 40, null),
    item("Mint Mojito", "మింట్ మోజిటో", "Blue, lime, and orange refresher.", 100, null)
  ],
  Juices: [
    item("Apple Juice", "ఆపిల్ జ్యూస్", "Fresh fruit juice.", 100, null),
    item("Grape Juice", "గ్రేప్ జ్యూస్", "Fresh fruit juice.", 100, null),
    item("Pineapple Juice", "పైన్ ఆపిల్ జ్యూస్", "Fresh fruit juice.", 100, null),
    item("Orange Juice", "ఆరెంజ్ జ్యూస్", "Fresh fruit juice.", 120, null),
    item("Mosambi Juice", "మొసంబి జ్యూస్", "Fresh fruit juice.", 100, null),
    item("Muskmelon Juice", "మస్క్ మెలన్ జ్యూస్", "Fresh fruit juice.", 100, null),
    item("Pomegranate Juice", "దానిమ్మ జ్యూస్", "Fresh fruit juice.", 120, null),
    item("Watermelon Juice", "వాటర్ మెలన్ జ్యూస్", "Fresh fruit juice.", 80, null)
  ]
};

const reviews = [
  ["Breakfast Variety", "Guests highlight the wide variety of breakfast options, from traditional South Indian dishes to familiar comfort plates, served fresh and warm."],
  ["Authentic Vegetarian Dining", "Review highlights consistently describe UGAADI CAFE as a completely vegetarian restaurant with authentic South Indian flavours."],
  ["Family-Friendly Atmosphere", "The traditional setting, warm service, and spacious dining feel make it suitable for family lunches and relaxed dinners."],
  ["Good Lunch and Thali", "Lunch visitors mention wholesome meals, thali-style dining, rice items, and a satisfying vegetarian spread."],
  ["Traditional Ambience", "The exterior, Telugu branding, peacock decor, and cultural details create a memorable Andhra hospitality experience."]
];

let activeCategory = Object.keys(menu)[0];
const cart = new Map();

function item(name, telugu, description, price, image) {
  return { id: `${name}-${price}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"), name, telugu, description, price, image };
}

function renderGallery() {
  document.getElementById("galleryGrid").innerHTML = gallery.map(([src, label]) => `
    <button class="gallery-item reveal" type="button" data-lightbox="${img(src)}" aria-label="Preview ${label}">
      <img src="${img(src)}" alt="${label}" loading="lazy">
      <span>${label}</span>
    </button>
  `).join("");
}

function renderAmenities() {
  document.getElementById("amenityGrid").innerHTML = amenities.map(([title, copy, icon]) => `
    <article class="amenity-card reveal">
      <span class="icon">${icon}</span>
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `).join("");
}

function renderSignatures() {
  document.getElementById("signatureGrid").innerHTML = signatures.map(([name, telugu, description, price, image]) => `
    <article class="signature-card reveal">
      <img src="${img(image)}" alt="${name}" loading="lazy">
      <div class="signature-body">
        <h3>${name}</h3>
        <div class="telugu">${telugu}</div>
        <p>${description}</p>
        <div class="price-row"><span class="veg" aria-label="Vegetarian"></span><strong>${money(price)}</strong></div>
      </div>
    </article>
  `).join("");
}

function renderMenuTabs() {
  document.getElementById("menuTabs").innerHTML = Object.keys(menu).map((category) => `
    <button class="menu-tab ${category === activeCategory ? "active" : ""}" type="button" data-category="${category}">${category}</button>
  `).join("");
}

function imageBlock(menuItem) {
  if (menuItem.image) {
    return `<img src="${img(menuItem.image)}" alt="${menuItem.name}" loading="lazy">`;
  }
  return `<div class="placeholder">Photo slot ready for<br>${menuItem.name}</div>`;
}

function renderMenu() {
  renderMenuTabs();
  document.getElementById("menuGrid").innerHTML = menu[activeCategory].map((menuItem) => `
    <article class="menu-card reveal">
      <div class="menu-image">${imageBlock(menuItem)}</div>
      <div class="menu-body">
        <h3>${menuItem.name}</h3>
        <div class="telugu">${menuItem.telugu}</div>
        <p>${menuItem.description}</p>
        <div class="price-row"><span class="veg" aria-label="Vegetarian"></span><strong>${money(menuItem.price)}</strong></div>
        <button class="add-btn" type="button" data-add="${menuItem.id}">Add to Cart</button>
      </div>
    </article>
  `).join("");
  observeReveals();
}

function allMenuItems() {
  return Object.values(menu).flat();
}

function findItem(id) {
  return allMenuItems().find((entry) => entry.id === id);
}

function renderReviews() {
  document.getElementById("reviewGrid").innerHTML = reviews.map(([title, copy]) => `
    <article class="review-card reveal">
      <div class="stars">★★★★★ <span>4.0</span></div>
      <h3>${title}</h3>
      <p>${copy}</p>
    </article>
  `).join("");
}

function renderCart() {
  const entries = [...cart.values()];
  const count = entries.reduce((sum, entry) => sum + entry.qty, 0);
  const total = entries.reduce((sum, entry) => sum + entry.qty * entry.price, 0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = money(total);
  document.getElementById("cartItems").innerHTML = entries.length ? entries.map((entry) => `
    <div class="cart-item">
      ${entry.image ? `<img src="${img(entry.image)}" alt="${entry.name}">` : `<div class="cart-thumb"></div>`}
      <div>
        <strong>${entry.name}</strong>
        <div>${money(entry.price)}</div>
        <div class="qty">
          <button type="button" data-dec="${entry.id}" aria-label="Decrease ${entry.name}">-</button>
          <span>${entry.qty}</span>
          <button type="button" data-inc="${entry.id}" aria-label="Increase ${entry.name}">+</button>
        </div>
      </div>
      <button class="remove-btn" type="button" data-remove="${entry.id}">Remove</button>
    </div>
  `).join("") : `<p>Your cart is empty. Add a few favourites from the menu.</p>`;
}

function addToCart(id) {
  const menuItem = findItem(id);
  if (!menuItem) return;
  const existing = cart.get(id);
  cart.set(id, { ...menuItem, qty: existing ? existing.qty + 1 : 1 });
  renderCart();
  openCart();
}

function openCart() {
  const drawer = document.getElementById("cartDrawer");
  drawer.classList.add("open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  drawer.classList.remove("open");
  drawer.setAttribute("aria-hidden", "true");
}

function checkout(event) {
  event.preventDefault();
  const entries = [...cart.values()];
  if (!entries.length) return;
  const form = new FormData(event.currentTarget);
  const total = entries.reduce((sum, entry) => sum + entry.qty * entry.price, 0);
  const lines = [
    "Namaste UGAADI CAFE, I would like to place an order:",
    "",
    ...entries.map((entry) => `${entry.qty} x ${entry.name} - ${money(entry.qty * entry.price)}`),
    "",
    `Total: ${money(total)}`,
    `Customer name: ${form.get("name")}`,
    `Phone: ${form.get("phone")}`,
    `Address / pickup preference: ${form.get("address")}`
  ];
  window.open(`https://wa.me/919649647535?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
}

function observeReveals() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal:not(.visible)").forEach((node) => observer.observe(node));
}

function bindEvents() {
  window.addEventListener("scroll", () => {
    document.getElementById("siteHeader").classList.toggle("scrolled", window.scrollY > 40);
  });
  document.querySelector(".nav-toggle").addEventListener("click", (event) => {
    const nav = document.querySelector(".main-nav");
    const open = nav.classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(open));
  });
  document.querySelector(".main-nav").addEventListener("click", (event) => {
    if (event.target.matches("a")) document.querySelector(".main-nav").classList.remove("open");
  });
  document.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-category]");
    if (tab) {
      activeCategory = tab.dataset.category;
      renderMenu();
    }
    const add = event.target.closest("[data-add]");
    if (add) addToCart(add.dataset.add);
    const lightboxTarget = event.target.closest("[data-lightbox]");
    if (lightboxTarget) {
      const lightbox = document.getElementById("lightbox");
      const image = lightbox.querySelector("img");
      image.src = lightboxTarget.dataset.lightbox;
      image.alt = lightboxTarget.querySelector("img").alt;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    }
  });
  document.getElementById("cartItems").addEventListener("click", (event) => {
    const inc = event.target.closest("[data-inc]");
    const dec = event.target.closest("[data-dec]");
    const remove = event.target.closest("[data-remove]");
    if (inc) cart.get(inc.dataset.inc).qty += 1;
    if (dec) {
      const entry = cart.get(dec.dataset.dec);
      entry.qty -= 1;
      if (entry.qty <= 0) cart.delete(dec.dataset.dec);
    }
    if (remove) cart.delete(remove.dataset.remove);
    renderCart();
  });
  document.querySelectorAll("[data-cart-open]").forEach((button) => button.addEventListener("click", openCart));
  document.querySelector("[data-cart-close]").addEventListener("click", closeCart);
  document.getElementById("cartDrawer").addEventListener("click", (event) => {
    if (event.target.id === "cartDrawer") closeCart();
  });
  document.getElementById("checkoutForm").addEventListener("submit", checkout);
  document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
  document.getElementById("lightbox").addEventListener("click", (event) => {
    if (event.target.id === "lightbox") closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeCart();
      closeLightbox();
    }
  });
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}

renderGallery();
renderAmenities();
renderSignatures();
renderMenu();
renderReviews();
renderCart();
bindEvents();
observeReveals();
