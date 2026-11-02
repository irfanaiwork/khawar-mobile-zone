/* ============================================================
   KHAWAR MOBILE ZONE — CENTRAL CONFIGURATION
   Business details, products, brands and image assets live here.
   To update the site, edit this file only.

   IMAGE REPLACEMENT GUIDE
   - Shop photos: put real shop photographs in  assets/img/shop/
     and update the file names under ASSETS.shop below.
   - Product photos: replace the files in  assets/img/products/
     keeping the same file names, or update PRODUCTS[].image.
   ============================================================ */

const BUSINESS = {
  name: "Khawar Mobile Zone",
  phoneDisplay: "0300 9183500",
  phoneLink: "tel:+923009183500",
  whatsappDisplay: "+92 300 9183500",
  whatsappNumber: "923009183500",
  address: "Al Hassan Mobile Market, Hasilpur Road, Khairpur Tamewali, Punjab 63000, Pakistan",
  addressShort: "Al Hassan Mobile Market, Hasilpur Road, Khairpur Tamewali",
  hoursLabel: "Open Daily · 9:00 AM – 9:00 PM",
  openHour: 9,          // 9:00 AM (Asia/Karachi)
  closeHour: 21,        // 9:00 PM (Asia/Karachi)
  googleRating: "5.0",
  plusCode: "H6PQ+X6R, Khairpur Tamewali, Pakistan",
  mapsQuery: "H6PQ+X6R Khairpur Tamewali, Pakistan"
};

function waLink(message) {
  return "https://wa.me/" + BUSINESS.whatsappNumber + "?text=" + encodeURIComponent(message);
}
BUSINESS.whatsappGeneral = waLink("Assalam o Alaikum! Mujhe Khawar Mobile Zone se aik phone ke baray mein maloomat chahiye hain.");
BUSINESS.mapsEmbed = "https://maps.google.com/maps?q=" + encodeURIComponent(BUSINESS.mapsQuery) + "&z=16&output=embed";
BUSINESS.mapsDirections = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(BUSINESS.plusCode);

/* Products — one shared catalogue for the whole website.
   Prices are intentionally NOT stored or displayed anywhere:
   rates are always confirmed on WhatsApp. */
const PRODUCTS = [
  { id: "vivo-y28",          brand: "Vivo",    name: "Vivo Y28",          image: "vivo-y28.jpg",          alt: "Vivo Y28 smartphone front view" },
  { id: "samsung-galaxy-a15", brand: "Samsung", name: "Samsung Galaxy A15", image: "samsung-galaxy-a15.jpg", alt: "Samsung Galaxy A15 smartphone front view" },
  { id: "infinix-hot-50",    brand: "Infinix", name: "Infinix Hot 50",    image: "infinix-hot-50.jpg",    alt: "Infinix Hot 50 smartphone front view" },
  { id: "oppo-a3",           brand: "Oppo",    name: "Oppo A3",           image: "oppo-a3.jpg",           alt: "Oppo A3 smartphone front view" },
  { id: "tecno-spark-20",    brand: "Tecno",   name: "Tecno Spark 20",    image: "tecno-spark-20.jpg",    alt: "Tecno Spark 20 smartphone front view" },
  { id: "xiaomi-redmi-13",   brand: "Xiaomi",  name: "Xiaomi Redmi 13",   image: "redmi-13.jpg",          alt: "Xiaomi Redmi 13 smartphone front view" }
];

/* Brands — logo files in assets/img/brands/
   "h" normalises each logo's visual size in the marquee (px). */
const BRANDS = [
  { name: "Vivo",    logo: "vivo.svg",    h: 26 },
  { name: "Oppo",    logo: "oppo.svg",    h: 26 },
  { name: "Samsung", logo: "samsung.svg", h: 23 },
  { name: "Infinix", logo: "infinix.svg", h: 24 },
  { name: "Tecno",   logo: "tecno.svg",   h: 24 },
  { name: "Xiaomi",  logo: "xiaomi.svg",  h: 28 },
  { name: "Realme",  logo: "realme.png",  h: 26 },
  { name: "iPhone",  logo: "apple.svg",   h: 28 }
];

/* Shop photography — replace these placeholder slots with the
   shop's real photographs (same file names, folder: assets/img/shop/). */
const SHOP_IMAGES = {
  hero:     { file: "shop-hero.svg",     label: "Shop Front",        alt: "Khawar Mobile Zone shop" },
  exterior: { file: "shop-exterior.svg", label: "Shop Exterior",     alt: "Khawar Mobile Zone shop exterior at Al Hassan Mobile Market" },
  interior: { file: "shop-interior.svg", label: "Inside the Shop",   alt: "Inside Khawar Mobile Zone" },
  counter:  { file: "shop-counter.svg",  label: "Display Counters",  alt: "Mobile phone display counters at Khawar Mobile Zone" },
  showcase: { file: "shop-showcase.svg", label: "Product Showcase",  alt: "Smartphone showcase at Khawar Mobile Zone" }
};
