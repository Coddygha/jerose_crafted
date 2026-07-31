/* =====================================================
   JEROSE HANDCRAFT — SCRIPT.JS
   Vanilla JS + Three.js • Cart • AI Chatbot • Animations
   ===================================================== */

/* ----------------------------- DATA ----------------------------- */
const PRODUCTS = [
  // ---- Original 14 products ----
  {id: 'p01', name: '🌼 Ivory Blossom Bouquet', category: 'Bouquets,Gifts', price: 250, oldPrice: 350, rating: 4.9, badge: 'best', type: 'video', media: 'video/Sunflower_Crochet_Bouquet.mp4', image: 'images/1_bouquet.jpg',stock: '💐 Handmade & Customizable'},
  {id: 'p02', name: '💙 Azure Serenity Bouquet', category: 'Bouquets,Gifts', price: 200,oldPrice: 225, rating: 4.8, badge: 'new', image: 'images/2_bouquet.jpg', stock: '💐 Handmade & Customizable'},
  {id: 'p03', name: '🤎 Mocha Elegance Bouquet', category: 'Bouquets,Gifts', price: 250, rating: 4.7, badge: 'best', image: 'images/3_bouquet.jpg', stock: '💐 Handmade & Customizable'},
  {id: 'p04', name: '❤️ Crimson Bloom Bouquet', category: 'Bouquets,Gifts',price: 280, oldPrice: 300, rating: 4.8, badge: 'sale',image: 'images/4_bouquet.jpg',stock: '💐 Handmade & Customizable'},
  {id: 'p05', name: '💜 Amethyst Bloom Bouquet', category: 'Bouquets,Gifts',price: 280, rating: 4.6, badge: 'new',image: 'images/5_bouquet.png',stock: '💐 Handmade & Customizable'},
  {id: 'p06', name: '🌺 Pink Blossom Delight Bouquet', category: 'Bouquets,Gifts', price: 150, rating: 4.9, badge: 'best', image: 'images/6_bouquet.png', stock: '💐 Handmade & Customizable'},
  {id: 'p07', name: '🌷 Cherry Blossom Dream Bouquet', category: 'Bouquets,Gifts', price: 150, rating: 4.5, image: 'images/7_bouquet.png', stock: '💐 Handmade & Customizable'},
  {id: 'p08', name: '🌈 Spring Symphony Bouquet with Lights', category: 'Bouquets,Gifts', price: 600, oldPrice: 750, rating: 4.7, badge: 'sale', image: 'images/8_bouquet.png', stock: '💐 Handmade & Customizable'},
  {id: 'p09', name: '🌷 Tulip Charm Bouquet', category: 'Bouquets,Gifts', price: 280, rating: 4.6, badge: 'new', image: 'images/9_bouquet.png', stock: '💐 Handmade & Customizable'},
  {id: 'p10', name: '🌸 Blush Lily Bouquet', category: 'Bouquets,Gifts', price: 150, rating: 4.8, image: 'images/10_bouquet.png', stock: '💐 Handmade & Customizable'},
  {id: 'p11', name: '💜 Lavender Grace Bouquet', category: 'Bouquets,Gifts', price: 85, rating: 4.7, badge: 'best', image: 'images/11_bouquet.png', stock: '💐 Handmade & Customizable'},
  {id: 'p12', name: '🌻 Golden Sunflower Bouquet', category: 'Bouquets,Gifts', price: 85, rating: 4.5, image: 'images/12_bouquet.png', stock: '💐 Handmade & Customizable'},
  {id: 'p13', name: 'Candle', category: 'Souvenirs', price: 15, oldPrice: 20, rating: 4.6, badge: 'sale', image: 'images/13_candle.png', stock: '💐 Handmade & Customizable'},
  {id: 'p14', name: 'Headband', category: 'Accessories,Gifts', price: 65, rating: 4.9, badge: 'new', image: 'images/14_headband.png', stock: '💐 Handmade & Customizable'},

  // ---- 36 New Products (p15 – p50) ----
  {id: 'p15', name: ' Headband', category: 'Accessories,Gifts', price: 65, oldPrice: 75, rating: 4.7, badge: 'sale', image: 'images/15_headband.png', stock: '💐 Handmade & Customizable'},
  {id: 'p16', name: ' Headband', category: 'Accessories,Gifts', price: 65, rating: 4.5, badge: 'new', image: 'images/16_headband.png', stock: '💐 Handmade & Customizable'},
  {id: 'p17', name: 'Headband', category: 'Accessories,Gifts', price: 75, rating: 4.8, badge: 'best', image: 'images/17_headband.png', stock: '💐 Handmade & Customizable'},
  {id: 'p18', name: 'Headband', category: 'Accessories,Gifts', price: 75, rating: 4.9, badge: 'best', image: 'images/18_headband.png', stock: '💐 Handmade & Customizable'},
  {id: 'p19', name: 'Bonsai', category: 'Souvenirs,Gifts', price: 250, oldPrice: 300, rating: 4.8, badge: 'sale', image: 'images/19_bonsai.png', stock: '🧶 Crochet cutie'},
  {id: 'p20', name: 'Bonsai', category: 'Souvenirs,Gifts', price: 280, rating: 4.9, badge: 'new', image: 'images/20_bonsai.png', stock: '🐰 Handmade with love'},
  {id: 'p21', name: 'Bonsai', category: 'Souvenirs,Gifts', price: 200, rating: 4.7, image: 'images/21_bonsai.png', stock: '🐱 Soft & huggable'},
  {id: 'p22', name: '🪴 Flower Pot', category: 'Souvenirs,Gifts', price: 150, oldPrice: 200, rating: 4.6, badge: 'sale', image: 'images/22_pot.png', stock: '🧣 Warm & cozy'},
  {id: 'p23', name: '🪴 Flower Pot', category: 'Souvenirs,Gifts', price: 150, rating: 4.5, badge: 'new', image: 'images/23_pot.png', stock: '🧶 Soft acrylic yarn'},
  {id: 'p24', name: '🪴 Flower Pot', category: 'Souvenirs,Gifts', price: 150, oldPrice: 190, rating: 4.8, badge: 'sale', image: 'images/24_pot.png', stock: '👶 Perfect for newborns'},
  {id: 'p25', name: '🪴 Flower Pot', category: 'Souvenirs,Gifts', price: 150, rating: 4.9, badge: 'best', image: 'images/25_pot.png', stock: '🌿 Boho vibes'},
  {id: 'p26', name: 'Headband', category: 'Accessories,Gifts', price: 75, rating: 4.8, image: 'images/26_headband.png', stock: '✨ Statement piece'},
  {id: 'p27', name: 'Single Flower Bouquet', category: 'Bouquets,Gifts', price: 30, rating: 4.6, badge: 'new', image: 'images/27_bouquet.png', stock: '🔑 Great as giveaways'},
  {id: 'p28', name: 'Single Flower Bouquet', category: 'Bouquets,Gifts', price: 30, rating: 4.7, badge: 'new', image: 'images/28_bouquet.png', stock: '✨ Hand-strung beads'},
  {id: 'p29', name: 'Single Flower Bouquet', category: 'Bouquets,Gifts', price: 30, rating: 4.5, image: 'images/29_bouquet.png', stock: '🌊 Summer essential'},
  {id: 'p30', name: 'Single Flower Bouquet', category: 'Bouquets,Gifts', price: 30, rating: 4.8, badge: 'new', image: 'images/30_bouquet.png', stock: '🪶 Unique & stylish'},
  {id: 'p31', name: 'Single Flower Bouquet', category: 'Bouquets,Gifts', price: 30, rating: 4.9, badge: 'new', image: 'images/31_bouquet.png', stock: '🌻 Brighten any table'},
  {id: 'p32', name: '🕯️ Crochet Candle Wrap – Lace', category: 'Crochet,Home Decor,Souvenirs', price: 40, rating: 4.5, image: 'images/32_candle_wrap.png', stock: '🕯️ Elegant accent'},
  {id: 'p33', name: '📱 Crochet Phone Pouch – Lavender', category: 'Crochet,Accessories', price: 160, rating: 4.7, badge: 'new', image: 'images/33_phone_pouch.png', stock: '📱 Fits most phones'},
  {id: 'p34', name: '👜 Mini Crochet Tote Bag', category: 'Crochet,Accessories', price: 220, oldPrice: 280, rating: 4.6, badge: 'sale', image: 'images/34_tote.png', stock: '👜 Cute & functional'},
  {id: 'p35', name: '🦊 Amigurumi Fox', category: 'Crochet,Gifts', price: 170, rating: 4.8, image: 'images/35_fox.png', stock: '🦊 Forest friend'},
  {id: 'p36', name: '🐼 Amigurumi Panda', category: 'Crochet,Gifts', price: 190, rating: 4.9, badge: 'best', image: 'images/36_panda.png', stock: '🐼 Irresistibly cute'},
  {id: 'p37', name: '🌵 Crochet Cactus in Pot', category: 'Crochet,Home Decor', price: 100, rating: 4.7, badge: 'new', image: 'images/37_cactus.png', stock: '🌵 No watering needed'},
  {id: 'p38', name: '🍩 Crochet Donut Keychain', category: 'Crochet,Souvenirs,Accessories', price: 35, rating: 4.6, image: 'images/38_donut.png', stock: '🍩 Sweet & squishy'},
  {id: 'p39', name: '🌸 Mini Crochet Flower Bouquet (Single Stem)', category: 'Bouquets,Souvenirs', price: 45, oldPrice: 55, rating: 4.5, badge: 'sale', image: 'images/39_single_stem.png', stock: '🌸 Perfect as a token'},
  {id: 'p40', name: '🍀 Macramé Leaf Earrings', category: 'Macrame,Accessories', price: 70, rating: 4.8, badge: 'new', image: 'images/40_earrings.png', stock: '🍀 Lightweight & boho'},
  {id: 'p41', name: '🪞 Beaded Dreamcatcher – Mini', category: 'Beaded,Home Decor,Souvenirs', price: 110, oldPrice: 140, rating: 4.7, badge: 'sale', image: 'images/41_dreamcatcher.png', stock: '🌙 Sweet dreams'},
  {id: 'p42', name: '🌻 Knitted Headband – Sunflower', category: 'Knitted,Accessories,Gifts', price: 85, rating: 4.9, badge: 'best', image: 'images/42_headband_sunflower.png', stock: '🌻 Warm & stylish'},
  {id: 'p43', name: '🧵 Cross-stitch Keychain – Custom Name', category: 'Crochet,Souvenirs,Gifts', price: 50, rating: 4.8, image: 'images/43_cross_stitch.png', stock: '🧵 Personalized'},
  {id: 'p44', name: '🕊️ Crochet Dove Ornament', category: 'Crochet,Home Decor,Souvenirs', price: 90, rating: 4.6, badge: 'new', image: 'images/44_dove.png', stock: '🕊️ Peace & love'},
  {id: 'p45', name: '🎄 Crochet Christmas Wreath Ornament', category: 'Crochet,Home Decor,Souvenirs,Gifts', price: 80, rating: 4.7, image: 'images/45_wreath.png', stock: '🎄 Festive decor'},
  {id: 'p46', name: '📖 Macramé Bookmark – Tassel', category: 'Macrame,Souvenirs', price: 30, rating: 4.5, badge: 'new', image: 'images/46_bookmark.png', stock: '📖 For book lovers'},
  {id: 'p47', name: '🍂 Knitted Pumpkin (Fall Decor)', category: 'Knitted,Home Decor', price: 140, oldPrice: 180, rating: 4.8, badge: 'sale', image: 'images/47_pumpkin.png', stock: '🍂 Autumn feels'},
  {id: 'p48', name: '🐚 Beaded Shell Necklace', category: 'Beaded,Accessories', price: 95, rating: 4.7, image: 'images/48_necklace.png', stock: '🐚 Beachy vibes'},
  {id: 'p49', name: '🧸 Crochet Teddy Bear Mini', category: 'Crochet,Gifts', price: 120, oldPrice: 150, rating: 4.9, badge: 'sale', image: 'images/49_teddy.png', stock: '🧸 Pocket-sized cuddle'},
  {id: 'p50', name: '💐 Eternal Rose Crochet Bouquet (Single)', category: 'Bouquets,Gifts', price: 100, rating: 4.9, badge: 'best', image: 'images/50_eternal_rose.png', stock: '🌹 Never fades'}
];

const CATEGORIES = [
  { id: 'all', name: 'All', icon: 'fa-grip' },
  { id: 'Bouquets', name: 'Bouquets', icon: 'fa-spa' },
  { id: 'Souvenirs', name: 'Souvenirs', icon: 'fa-circle-nodes' },
  { id: 'Accessories', name: 'Accessories', icon: 'fa-hat-cowboy' },
  { id: 'Gifts', name: 'Gifts', icon: 'fa-gift' },
  { id: 'Accessories', name: 'Accessories', icon: 'fa-hat-cowboy' },
];

const REVIEWS = [
  { name: 'Maria Santos', role: 'Verified Buyer', stars: 5, text: 'Super ganda ng bouquet! Yung quality talaga kitang-kita. Binilhan ko si mama for her birthday and she loved it. 🥰', initial: 'M' },
  { name: 'Kyla Reyes', role: 'Verified Buyer', stars: 5, text: 'Ang gagaling talaga mag-craft! Custom order ko na keychain, sobrang cute. Mabilis din ang delivery. Salamat Jerose!', initial: 'K' },
  { name: 'Angela Cruz', role: 'Verified Buyer', stars: 5, text: 'Ordered a macramé wall hanging for my room. Ang ganda ng gawa, sulit ang presyo. Will order again!', initial: 'A' },
  { name: 'Jenny Lopez', role: 'Verified Buyer', stars: 4, text: 'Cute na cute yung amigurumi bear! Pang-regalo sa pamangkin ko. Very responsive din si seller sa Messenger.', initial: 'J' },
  { name: 'Rica Mendoza', role: 'Verified Buyer', stars: 5, text: 'Third time ko na mag-order dito. Hindi ako nagsasawang bumili kasi quality talaga. Support local! 💛', initial: 'R' },
  { name: 'Trisha Gomez', role: 'Verified Buyer', stars: 5, text: 'Best gift ever yung crochet bouquet — hindi nalalanta! Perfect for anniversaries. Highly recommend!', initial: 'T' }
];

const CHAT_RESPONSES = [
  { keys: ['hi','hello','hey','kumusta','kamusta','good morning','good afternoon','good evening','magandang'],
    reply: 'Hi there! 👋 Ako si Jen, your Jerose HandCraft assistant. Ano po ang maitutulong ko sa inyo today?' },
  { keys: ['product','products','item','items','what do you sell','anu-ano','anong meron'],
    reply: 'We make handmade bouquets, crochet items, knitted accessories, macramé, beaded bracelets, and personalized gifts! Browse our collection in the Shop section. 🌸' },
  { keys: ['price','presyo','how much','magkano','cost','rates'],
    reply: 'Our products range from ₱95 (single crochet stems) to ₱620 (large macramé pieces). Custom pricing also available — just tell me what you have in mind! 💰' },
  { keys: ['delivery','ship','deliver','padala','courier','how long'],
    reply: 'We deliver within Digos City with a flat ₱20 rate. Pick-up is also available for FREE at Colorado, Digos City. Orders are usually delivered within 1–3 days. 🚚' },
  { keys: ['payment','pay','bayad','gcash','cod','cash'],
    reply: 'We accept Cash on Delivery (COD) and GCash (0955-906-7041). Just choose your preferred method at checkout! 💳' },
  { keys: ['order','how to order','paano','buy','purchase'],
    reply: 'Easy lang po! 1) Add items to cart 2) Fill in your details 3) Click "Checkout via Messenger" 4) Paste the order message to our Messenger chat. Done! 🛍️' },
  { keys: ['contact','number','phone','messenger','email','reach'],
    reply: '📱 Phone/GCash: 0955-906-7041\n💬 Messenger: m.me/jerose.empuerto\n📧 Email: jerosehandcraft@gmail.com\n📍 Colorado, Digos City' },
  { keys: ['custom','customize','personalize','request','special'],
    reply: 'Yes! We love custom orders 💝. Just message us on Messenger with your idea — colors, size, personalization — and we\'ll quote you.' },
  { keys: ['location','address','saan','location','where'],
    reply: 'We\'re located at Colorado, Digos City, Davao del Sur. Pick-up is welcome! 🏡' },
  { keys: ['thanks','thank you','salamat','ty','salamat po'],
    reply: 'You\'re very welcome! 💛 Let me know if there\'s anything else I can help with.' },
  { keys: ['bye','goodbye','paalam','see you'],
    reply: 'Bye! Ingat po and happy shopping! 🌷' }
];

const FALLBACK_REPLY = 'Hmm, hindi ko po makuha. 🤔 Pwede niyo po bang i-rephrase? Or message us directly on Messenger: m.me/jerose.empuerto';

const QUICK_REPLIES = [
  'What do you sell?',
  'How to order?',
  'Delivery info',
  'Payment methods',
  'Contact'
];

/* ----------------------------- HELPERS ----------------------------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const fmt = n => '₱' + n.toLocaleString('en-PH', { maximumFractionDigits: 0 });

/* ----------------------------- STATE ----------------------------- */
let state = {
  cart: JSON.parse(localStorage.getItem('jh_cart') || '[]'),
  filter: 'all',
  search: '',
  sort: 'featured',
  delivery: 'delivery',
  payment: 'COD'
};

/* ----------------------------- LOADING SCREEN ----------------------------- */
function initLoader() {
  const canvas = document.getElementById('loaderCanvas');
  if (!canvas || typeof THREE === 'undefined') { hideLoader(); return; }
  const size = 240;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(size, size);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  camera.position.z = 6;

  // Fuzzy spinning rings
  const group = new THREE.Group();
  for (let i = 0; i < 3; i++) {
    const geo = new THREE.TorusGeometry(1.4 - i * 0.25, 0.02, 8, 80);
    const mat = new THREE.LineBasicMaterial({
      color: i === 0 ? 0x4F46E5 : i === 1 ? 0x06B6D4 : 0xF59E0B,
      transparent: true, opacity: 0.85
    });
    const edges = new THREE.EdgesGeometry(geo);
    const line = new THREE.LineSegments(edges, mat);
    line.rotation.x = Math.random() * Math.PI;
    line.rotation.y = Math.random() * Math.PI;
    group.add(line);
  }
  scene.add(group);

  let raf;
  const animate = () => {
    group.rotation.y += 0.02;
    group.rotation.x += 0.008;
    group.children.forEach((c, i) => {
      c.rotation.z += 0.01 + i * 0.004;
    });
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  };
  animate();

  window._loaderRaf = () => cancelAnimationFrame(raf);
  window._loaderRenderer = renderer;
}
function hideLoader() {
  const l = document.getElementById('loadingScreen');
  if (!l) return;
  l.classList.add('hidden');
  if (window._loaderRaf) window._loaderRaf();
  if (window._loaderRenderer) {
    window._loaderRenderer.dispose();
  }
}

/* ----------------------------- THEME ----------------------------- */
function initTheme() {
  const saved = localStorage.getItem('jh_theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon();
  $('#themeToggle').addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('jh_theme', next);
    updateThemeIcon();
  });
}
function updateThemeIcon() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  $('#themeToggle').innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

/* ----------------------------- NAVBAR ----------------------------- */
function initNavbar() {
  const nav = $('#navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
    const prog = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    $('#scrollProgress').style.width = prog + '%';
  }, { passive: true });

  // Hamburger toggle
  const ham = $('#hamburger');
  const links = $('#navLinks');
  ham.addEventListener('click', () => {
    ham.classList.toggle('active');
    links.classList.toggle('mobile-open');
  });
  $$('.nav-link').forEach(l => l.addEventListener('click', () => {
    links.classList.remove('mobile-open');
    ham.classList.remove('active');
  }));

  // Active link on scroll
  const sections = $$('section[id]');
  window.addEventListener('scroll', () => {
    const y = window.scrollY + 120;
    sections.forEach(s => {
      if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
        $$('.nav-link').forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + s.id));
        $$('.bn-item').forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + s.id));
      }
    });
  }, { passive: true });

  // Back to top
  $('#backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Year
  $('#year').textContent = new Date().getFullYear();
}

/* ----------------------------- REVEAL ON SCROLL ----------------------------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = e.target.dataset.delay || 0;
        setTimeout(() => e.target.classList.add('in'), +delay);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  $$('.reveal').forEach(el => io.observe(el));
}

/* ----------------------------- THREE.JS: HERO BOUQUET ----------------------------- */
let heroScene, heroCamera, heroRenderer, heroGroup;

function initHeroBouquet() {
  const canvas = document.getElementById('heroBouquet');
  if (!canvas || typeof THREE === 'undefined') return;
  const frame = canvas.parentElement;

  heroRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  heroRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  heroScene = new THREE.Scene();
  heroCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
  heroCamera.position.z = 5.5;

  heroGroup = new THREE.Group();

  const palette = [0xF472B6, 0xEC4899, 0xFB7185, 0xFBBF24, 0xA78BFA, 0x60A5FA];

  // Build flowers (fuzzy spheres as wireframe)
  const flowerPositions = [
    [0, 1.2, 0], [-0.8, 0.7, 0.3], [0.9, 0.6, -0.2],
    [-0.5, 0.2, -0.5], [0.4, 0.1, 0.4], [0, -0.3, 0],
    [-0.2, 1.5, -0.2], [0.6, 1.3, 0.2]
  ];

  flowerPositions.forEach((p, i) => {
    const size = 0.35 + Math.random() * 0.2;
    const geo = new THREE.IcosahedronGeometry(size, 1);
    const edges = new THREE.EdgesGeometry(geo);
    const mat = new THREE.LineBasicMaterial({
      color: palette[i % palette.length],
      transparent: true, opacity: 0.9
    });
    const line = new THREE.LineSegments(edges, mat);
    line.position.set(p[0], p[1], p[2]);
    line.userData.origPos = p.slice();
    heroGroup.add(line);
  });

  // Stems (vertical lines)
  const stemMat = new THREE.LineBasicMaterial({ color: 0x10B981, transparent: true, opacity: 0.7 });
  for (let i = 0; i < 8; i++) {
    const geo = new THREE.BufferGeometry();
    const x = (Math.random() - 0.5) * 0.5;
    const z = (Math.random() - 0.5) * 0.5;
    const pts = [new THREE.Vector3(x, -0.2, z), new THREE.Vector3(x * 0.4, -2.2, z * 0.4)];
    geo.setFromPoints(pts);
    heroGroup.add(new THREE.Line(geo, stemMat));
  }

  // Leaves (flattened spheres)
  for (let i = 0; i < 5; i++) {
    const geo = new THREE.SphereGeometry(0.25, 8, 6);
    geo.scale(1, 0.3, 0.6);
    const edges = new THREE.EdgesGeometry(geo);
    const mat = new THREE.LineBasicMaterial({ color: 0x34D399, transparent: true, opacity: 0.8 });
    const leaf = new THREE.LineSegments(edges, mat);
    leaf.position.set((Math.random() - 0.5) * 1.2, -0.8 + Math.random() * 0.6, (Math.random() - 0.5) * 0.6);
    leaf.rotation.z = Math.random() * Math.PI;
    heroGroup.add(leaf);
  }

  // Wrap paper (cone wireframe)
  const wrapGeo = new THREE.ConeGeometry(1.3, 1.8, 24, 2, true);
  const wrapEdges = new THREE.EdgesGeometry(wrapGeo);
  const wrapMat = new THREE.LineBasicMaterial({ color: 0xF59E0B, transparent: true, opacity: 0.55 });
  const wrap = new THREE.LineSegments(wrapEdges, wrapMat);
  wrap.position.y = -1.5;
  wrap.rotation.y = Math.PI / 6;
  heroGroup.add(wrap);

  heroScene.add(heroGroup);

  const resize = () => {
    const w = frame.clientWidth;
    const h = frame.clientHeight;
    heroRenderer.setSize(w, h, false);
    heroCamera.aspect = w / h;
    heroCamera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener('resize', resize);

  let t = 0;
  function animate() {
    t += 0.015;
    heroGroup.rotation.y += 0.005;
    heroGroup.position.y = Math.sin(t * 0.7) * 0.1;
    // Fuzzy vibration on flower edges
    heroGroup.children.forEach((c, i) => {
      if (c.userData.origPos) {
        c.rotation.x += 0.003;
        c.rotation.z += 0.002;
        // Slight position wobble for fuzzy feel
        c.position.x = c.userData.origPos[0] + Math.sin(t + i) * 0.02;
        c.position.y = c.userData.origPos[1] + Math.cos(t + i) * 0.02;
      }
    });
    heroRenderer.render(heroScene, heroCamera);
    requestAnimationFrame(animate);
  }
  animate();
}

/* ----------------------------- THREE.JS: BACKGROUND PARTICLES ----------------------------- */
function initBgParticles() {
  const canvas = document.getElementById('bgParticles');
  if (!canvas || typeof THREE === 'undefined') return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
  camera.position.z = 8;

  // Fuzzy spheres (wireframe)
  const group = new THREE.Group();
  const colors = [0x4F46E5, 0x06B6D4, 0xF59E0B, 0xEC4899];
  for (let i = 0; i < 18; i++) {
    const geo = new THREE.IcosahedronGeometry(0.1 + Math.random() * 0.25, 0);
    const edges = new THREE.EdgesGeometry(geo);
    const mat = new THREE.LineBasicMaterial({
      color: colors[i % colors.length],
      transparent: true, opacity: 0.35
    });
    const p = new THREE.LineSegments(edges, mat);
    p.position.set(
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 6
    );
    p.userData.speed = 0.002 + Math.random() * 0.006;
    p.userData.offset = Math.random() * Math.PI * 2;
    group.add(p);
  }
  scene.add(group);

  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener('resize', resize);

  let t = 0;
  function animate() {
    t += 0.01;
    group.children.forEach((p, i) => {
      p.rotation.x += p.userData.speed;
      p.rotation.y += p.userData.speed * 0.7;
      p.position.y += Math.sin(t + p.userData.offset) * 0.003;
    });
    group.rotation.y += 0.0005;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
}

/* ----------------------------- THREE.JS: PRODUCT CARD MINI PREVIEW ----------------------------- */
function initCard3D(canvas, color) {
  if (typeof THREE === 'undefined') return;

  let renderer, scene, camera, group, wire, wire2, raf, t = 0, running = false;

  // Dito ilalagay ang paggawa ng lahat ng Three.js objects
  function setup() {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 10);
    camera.position.z = 3.2;

    group = new THREE.Group();
    const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.95 });
    const shapes = [
      new THREE.IcosahedronGeometry(0.55, 1),
      new THREE.TorusGeometry(0.45, 0.18, 8, 20),
      new THREE.OctahedronGeometry(0.6, 0),
      new THREE.DodecahedronGeometry(0.55, 0)
    ];
    const chosen = shapes[Math.floor(Math.random() * shapes.length)];
    const edges = new THREE.EdgesGeometry(chosen);
    wire = new THREE.LineSegments(edges, mat);
    group.add(wire);

    const chosen2 = new THREE.IcosahedronGeometry(0.75, 0);
    const edges2 = new THREE.EdgesGeometry(chosen2);
    const mat2 = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.35 });
    wire2 = new THREE.LineSegments(edges2, mat2);
    group.add(wire2);
    scene.add(group);

    const resize = () => {
      const w = canvas.clientWidth || 200;
      const h = canvas.clientHeight || 200;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
  }

  function animate() {
    t += 0.02;
    group.rotation.y += 0.012;
    group.rotation.x += 0.005;
    wire2.rotation.y = -group.rotation.y * 0.5;
    wire2.rotation.x = Math.sin(t) * 0.2;
    const s = 1 + Math.sin(t * 2) * 0.05;
    wire2.scale.set(s, s, s);
    wire.position.x = Math.sin(t * 3) * 0.01;
    wire.position.y = Math.cos(t * 3) * 0.01;
    renderer.render(scene, camera);
    raf = requestAnimationFrame(animate);
  }

  function start() {
    if (running) return;
    running = true;
    if (!renderer) setup();   // <-- DITO LANG GUMAGAWA NG RENDERER
    animate();
  }

  function stop() {
    if (!running) return;
    running = false;
    if (raf) cancelAnimationFrame(raf);
    if (renderer) {
      renderer.dispose();     // <-- BITAWAN ANG CONTEXT
      renderer = null;
      scene = null;
      group = null;
      wire = null;
      wire2 = null;
    }
  }

  return { start, stop };
}

/* ----------------------------- CATEGORIES ----------------------------- */
function renderCategories() {
  const grid = $('#categoriesGrid');
  grid.innerHTML = CATEGORIES.map(c => `
    <div class="cat-card reveal reveal-up" data-cat="${c.id}">
      <div class="cat-icon"><i class="fa-solid ${c.icon}"></i></div>
      <h4>${c.name}</h4>
    </div>
  `).join('');
  $$('.cat-card').forEach(c => {
    c.addEventListener('click', () => {
      setFilter(c.dataset.cat);
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* ----------------------------- FILTER CHIPS ----------------------------- */
function renderFilterChips() {
  const chips = $('#filterChips');
  chips.innerHTML = CATEGORIES.map(c => `
    <button class="chip ${c.id === state.filter ? 'active' : ''}" data-cat="${c.id}">${c.name}</button>
  `).join('');
  $$('.chip').forEach(chip => {
    chip.addEventListener('click', () => setFilter(chip.dataset.cat));
  });
}
function setFilter(cat) {
  state.filter = cat;
  renderFilterChips();
  renderProducts();
}

/* ----------------------------- PRODUCTS ----------------------------- */
function renderProducts() {
  let list = PRODUCTS.slice();
  if (state.filter !== 'all') list = list.filter(p => p.category.split(',').map(s => s.trim()).includes(state.filter));
  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }
  if (state.sort === 'price-asc') list.sort((a,b) => a.price - b.price);
  if (state.sort === 'price-desc') list.sort((a,b) => b.price - a.price);
  if (state.sort === 'rating') list.sort((a,b) => b.rating - a.rating);

  const grid = $('#productsGrid');
  const empty = $('#emptyState');
  if (!list.length) { grid.innerHTML = ''; empty.hidden = false; return; }
  empty.hidden = true;

  grid.innerHTML = list.map(p => {
    const cats = p.category.split(',').map(s => s.trim());
    const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
    const badgeHTML = p.badge ? `<span class="product-badge badge-${p.badge}">${p.badge}</span>` : '';
    const priceHTML = p.oldPrice ? `${fmt(p.price)}<small>${fmt(p.oldPrice)}</small>` : fmt(p.price);
    return `
      <article class="product reveal reveal-up" data-id="${p.id}">
        <div class="product-media">
          ${badgeHTML}
          <button class="product-wish" aria-label="Wishlist"><i class="fa-regular fa-heart"></i></button>
          <img src="${p.image}" alt="${p.name}" loading="lazy" />
          <div class="product-3d"><canvas></canvas></div>
        </div>
        <div class="product-info">
          <div class="product-cat">${cats[0]}</div>
          <h3 class="product-name">${p.name}</h3>
          <div class="product-rating">
            <span class="stars">${stars}</span>
            <span>${p.rating.toFixed(1)}</span>
          </div>
          <div class="product-foot">
            <div class="product-price">${priceHTML}</div>
            <button class="btn-add" aria-label="Add to cart" data-id="${p.id}">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach events via delegation for robustness
  $$('.btn-add').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(b.dataset.id);
    particleBurst(b);
  }));

  $$('.product-media img').forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      openLightbox(img.src, img.alt);
    });
  });

  // 3D hover previews
  $$('.product').forEach((el) => {
    const canvas = el.querySelector('.product-3d canvas');
    const colors = [0xffffff, 0xF472B6, 0xFBBF24, 0xA78BFA, 0x60A5FA];
    const controller = initCard3D(canvas, colors[Math.floor(Math.random() * colors.length)]);
    el.addEventListener('mouseenter', () => controller && controller.start());
    el.addEventListener('mouseleave', () => controller && controller.stop());

    // 3D tilt
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  // Re-observe reveals
  $$('#productsGrid .reveal').forEach(el => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    io.observe(el);
  });
}

/* ----------------------------- PARTICLE BURST ----------------------------- */
function particleBurst(target) {
  const rect = target.getBoundingClientRect();
  const host = document.createElement('div');
  host.className = 'particle-burst';
  host.style.left = rect.left + rect.width/2 + 'px';
  host.style.top = rect.top + rect.height/2 + 'px';
  const colors = ['#4F46E5', '#06B6D4', '#F59E0B', '#EC4899'];
  for (let i = 0; i < 10; i++) {
    const s = document.createElement('span');
    const angle = (Math.PI * 2 * i) / 10;
    const dist = 40 + Math.random() * 30;
    s.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    s.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    s.style.background = colors[i % colors.length];
    host.appendChild(s);
  }
  document.body.appendChild(host);
  setTimeout(() => host.remove(), 900);
}

/* ----------------------------- RIPPLE ----------------------------- */
function rippleButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const r = document.createElement('span');
    r.className = 'ripple';
    const size = Math.max(rect.width, rect.height);
    r.style.width = r.style.height = size + 'px';
    r.style.left = e.clientX - rect.left - size/2 + 'px';
    r.style.top = e.clientY - rect.top - size/2 + 'px';
    btn.appendChild(r);
    setTimeout(() => r.remove(), 650);
  });
}

/* ----------------------------- CART ----------------------------- */
function saveCart() { localStorage.setItem('jh_cart', JSON.stringify(state.cart)); }
function updateCartBadge() {
  const count = state.cart.reduce((a, b) => a + b.qty, 0);
  $('#cartCount').textContent = count;
  $('#bnCartCount').textContent = count;
}
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const existing = state.cart.find(i => i.id === id);
  if (existing) existing.qty++;
  else state.cart.push({ id, qty: 1 });
  saveCart();
  updateCartBadge();
  renderCart();
  showToast(`Added "${product.name}" to cart 🛍️`);
}
function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart(); updateCartBadge(); renderCart();
}
function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  else { saveCart(); updateCartBadge(); renderCart(); }
}
function clearCart() {
  if (!state.cart.length) return;
  if (!confirm('Clear all items from your cart?')) return;
  state.cart = [];
  saveCart(); updateCartBadge(); renderCart();
}
function renderCart() {
  const body = $('#cartItems');
  const cartBody = $('#cartBody');
  const foot = $('#cartFoot');

  // Check if empty cart template exists, if destroyed, recreate
  let empty = $('#cartEmpty');
  if (!empty) {
    empty = document.createElement('div');
    empty.className = 'cart-empty';
    empty.id = 'cartEmpty';
    empty.innerHTML = `
      <i class="fa-solid fa-basket-shopping"></i>
      <h4>Your cart is empty</h4>
      <p>Browse our collection and add something lovely!</p>
      <button class="btn btn-primary" id="cartShopNow">Start Shopping</button>
    `;
    cartBody.insertBefore(empty, body);
    // Rebind shop now
    empty.querySelector('#cartShopNow').addEventListener('click', () => {
      $('#cartDrawer').classList.remove('open');
      $('#drawerBackdrop').classList.remove('open');
      document.body.style.overflow = '';
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
    });
  }

  if (!state.cart.length) {
    body.innerHTML = '';
    empty.hidden = false;
    foot.hidden = true;
    return;
  }
  empty.hidden = true;
  foot.hidden = false;

  body.innerHTML = state.cart.map(i => {
    const p = PRODUCTS.find(pr => pr.id === i.id);
    return `
      <div class="cart-item">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="cart-item-info">
          <h5>${p.name}</h5>
          <div class="ci-price">${fmt(p.price)}</div>
          <div class="qty-control">
            <button data-act="dec" data-id="${p.id}" aria-label="Decrease quantity">−</button>
            <span>${i.qty}</span>
            <button data-act="inc" data-id="${p.id}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item-remove" data-act="rm" data-id="${p.id}" aria-label="Remove item">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
  }).join('');

  $$('.cart-item [data-act]').forEach(b => b.addEventListener('click', () => {
    const id = b.dataset.id;
    if (b.dataset.act === 'inc') changeQty(id, 1);
    if (b.dataset.act === 'dec') changeQty(id, -1);
    if (b.dataset.act === 'rm') removeFromCart(id);
  }));

  updateTotals();
}
function updateTotals() {
  const subtotal = state.cart.reduce((a, i) => {
    const p = PRODUCTS.find(pr => pr.id === i.id);
    return a + p.price * i.qty;
  }, 0);
  const shipping = state.delivery === 'delivery' ? 20 : 0;
  const total = subtotal + shipping;
  $('#tSubtotal').textContent = fmt(subtotal);
  $('#tShipping').textContent = shipping ? fmt(shipping) : 'Free';
  $('#tTotal').textContent = fmt(total);
}

function initCart() {
  updateCartBadge();
  renderCart();

  const drawer = $('#cartDrawer');
  const backdrop = $('#drawerBackdrop');
  const openCart = () => {
    renderCart(); // Re-render cart on every open to ensure fresh state
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    drawer.setAttribute('aria-hidden','false');
  };
  const closeCart = () => { drawer.classList.remove('open'); backdrop.classList.remove('open'); document.body.style.overflow = ''; drawer.setAttribute('aria-hidden','true'); };

  $('#cartToggle').addEventListener('click', openCart);
  $('#bnCart').addEventListener('click', (e) => { e.preventDefault(); openCart(); });
  $('#cartClose').addEventListener('click', closeCart);
  $('#drawerBackdrop').addEventListener('click', closeCart);
  // Use event delegation for cartShopNow since it may be recreated
  $('#cartBody').addEventListener('click', (e) => {
    const btn = e.target.closest('#cartShopNow');
    if (btn) { closeCart(); document.getElementById('shop').scrollIntoView({ behavior: 'smooth' }); }
  });
  // Bind clear cart
  $('#clearCartBtn').addEventListener('click', clearCart);

  // Delivery & Payment radio cards
  $$('.radio-card[data-delivery]').forEach(card => {
    card.addEventListener('click', () => {
      $$('.radio-card[data-delivery]').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      card.querySelector('input').checked = true;
      state.delivery = card.dataset.delivery;
      $('#addressField').required = state.delivery === 'delivery';
      $('#addressField').disabled = state.delivery !== 'delivery';
      if (state.delivery !== 'delivery') $('#addressField').classList.remove('error');
      updateTotals();
    });
  });
  $$('.radio-card[data-payment]').forEach(card => {
    card.addEventListener('click', () => {
      $$('.radio-card[data-payment]').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      card.querySelector('input').checked = true;
      state.payment = card.querySelector('input').value;
    });
  });

  // Checkout
  $('#checkoutBtn').addEventListener('click', checkout);
}

/* ----------------------------- CHECKOUT VIA MESSENGER ----------------------------- */
function checkout() {
  if (!state.cart.length) { showToast('Your cart is empty!'); return; }
  const form = $('#checkoutForm');
  const data = Object.fromEntries(new FormData(form).entries());
  let valid = true;
  ['name', 'contact'].forEach(k => {
    const el = form.querySelector(`[name="${k}"]`);
    if (!data[k] || !data[k].trim()) { el.classList.add('error'); valid = false; } else el.classList.remove('error');
  });
  if (state.delivery === 'delivery') {
    const el = form.querySelector('[name="address"]');
    if (!data.address || !data.address.trim()) { el.classList.add('error'); valid = false; } else el.classList.remove('error');
  }
  if (!valid) { showToast('Please fill in required details.', 'warn'); return; }

  const items = state.cart.map(i => {
    const p = PRODUCTS.find(pr => pr.id === i.id);
    return `• ${p.name} × ${i.qty} — ${fmt(p.price * i.qty)}`;
  }).join('\n');
  const subtotal = state.cart.reduce((a, i) => a + PRODUCTS.find(p => p.id === i.id).price * i.qty, 0);
  const shipping = state.delivery === 'delivery' ? 20 : 0;
  const total = subtotal + shipping;

  const msg =
`🌸 *NEW ORDER — Jerose HandCraft* 🌸

*Customer Details*
👤 Name: ${data.name}
📞 Contact: ${data.contact}
📍 Address: ${state.delivery === 'delivery' ? data.address : 'Pick-up'}
📝 Notes: ${data.notes || '—'}

*Order Items*
${items}

*Summary*
Subtotal: ${fmt(subtotal)}
Shipping: ${shipping ? fmt(shipping) : 'Free (Pick-up)'}
Total: ${fmt(total)}

*Delivery:* ${state.delivery === 'delivery' ? 'Delivery (₱20)' : 'Pick-up (Free)'}
*Payment:* ${state.payment}

Thank you! 💛`;

  // Copy to clipboard
  if (navigator.clipboard) {
    navigator.clipboard.writeText(msg).then(() => {
      showToast('Order copied to clipboard! 📋');
    }).catch(() => {});
  }

  // Open messenger with message
  const enc = encodeURIComponent(msg);
  window.open(`https://m.me/jerose.empuerto?text=${enc}`, '_blank');
}

/* ----------------------------- LIGHTBOX ----------------------------- */
function openLightbox(src, alt) {
  const lb = $('#lightbox');
  $('#lightboxImg').src = src;
  $('#lightboxImg').alt = alt || '';
  lb.hidden = false;
}
function initLightbox() {
  $('#lightboxClose').addEventListener('click', () => { $('#lightbox').hidden = true; });
  $('#lightbox').addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') $('#lightbox').hidden = true;
  });
}

/* ----------------------------- SEARCH & SORT ----------------------------- */
function initShopControls() {
  $('#searchInput').addEventListener('input', (e) => {
    state.search = e.target.value;
    renderProducts();
  });
  $('#sortSelect').addEventListener('change', (e) => {
    state.sort = e.target.value;
    renderProducts();
  });
}

/* ----------------------------- REVIEWS CAROUSEL ----------------------------- */
function initReviews() {
  const track = $('#reviewsTrack');
  track.innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
      <p class="review-text">"${r.text}"</p>
      <div class="review-user">
        <div class="review-avatar">${r.initial}</div>
        <div>
          <strong>${r.name}</strong>
          <span>${r.role}</span>
        </div>
      </div>
    </div>
  `).join('');

  const dotsHost = $('#reviewsDots');
  const buildDots = () => {
    const cards = track.querySelectorAll('.review-card');
    dotsHost.innerHTML = '';
    cards.forEach((_, i) => {
      const d = document.createElement('span');
      d.addEventListener('click', () => cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' }));
      dotsHost.appendChild(d);
    });
  };
  buildDots();

  // Auto-slide
  let autoTimer;
  const autoNext = () => {
    const first = track.querySelector('.review-card');
    if (!first) return;
    const w = first.getBoundingClientRect().width + 16;
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
      track.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: w, behavior: 'smooth' });
    }
  };
  const startAuto = () => { autoTimer = setInterval(autoNext, 3500); };
  const stopAuto = () => clearInterval(autoTimer);
  startAuto();
  track.addEventListener('mouseenter', stopAuto);
  track.addEventListener('mouseleave', startAuto);
  track.addEventListener('touchstart', stopAuto, { passive: true });
  track.addEventListener('touchend', () => setTimeout(startAuto, 2000));

  // Arrows
  $('#revPrev').addEventListener('click', () => {
    const w = track.querySelector('.review-card').getBoundingClientRect().width + 16;
    track.scrollBy({ left: -w, behavior: 'smooth' });
  });
  $('#revNext').addEventListener('click', autoNext);

  // Drag/swipe
  let isDown = false, startX, startLeft;
  track.addEventListener('pointerdown', (e) => {
    if (e.target.closest('.review-card a')) return;
    isDown = true; startX = e.clientX; startLeft = track.scrollLeft;
    track.classList.add('dragging'); track.setPointerCapture(e.pointerId);
  });
  track.addEventListener('pointermove', (e) => {
    if (!isDown) return;
    track.scrollLeft = startLeft - (e.clientX - startX);
  });
  const up = () => { isDown = false; track.classList.remove('dragging'); };
  track.addEventListener('pointerup', up);
  track.addEventListener('pointercancel', up);

  // Update active dot
  track.addEventListener('scroll', () => {
    const cards = track.querySelectorAll('.review-card');
    const center = track.scrollLeft + track.clientWidth / 2;
    let activeIdx = 0;
    cards.forEach((c, i) => {
      const mid = c.offsetLeft + c.clientWidth / 2;
      if (Math.abs(mid - center) < Math.abs(cards[activeIdx].offsetLeft + cards[activeIdx].clientWidth/2 - center)) activeIdx = i;
    });
    dotsHost.querySelectorAll('span').forEach((d, i) => d.classList.toggle('active', i === activeIdx));
  }, { passive: true });
}

/* ----------------------------- CHATBOT ----------------------------- */
function initChat() {
  const win = $('#chatWindow');
  const toggle = $('#chatToggle');
  const close = $('#chatClose');
  const body = $('#chatBody');
  const quickHost = $('#chatQuick');
  const form = $('#chatForm');
  const input = $('#chatInput');

  const open = () => { win.hidden = false; toggle.style.display = 'none'; };
  const hide = () => { win.hidden = true; toggle.style.display = 'grid'; };
  toggle.addEventListener('click', open);
  close.addEventListener('click', hide);

  const addMsg = (text, who = 'bot') => {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + who;
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  };
  const addTyping = () => {
    const div = document.createElement('div');
    div.className = 'chat-msg bot typing-msg';
    div.innerHTML = '<div class="chat-typing"><span></span><span></span><span></span></div>';
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    return div;
  };
  const reply = (text) => {
    const t = addTyping();
    setTimeout(() => {
      t.remove();
      addMsg(text, 'bot');
    }, 650 + Math.random() * 400);
  };

  const findReply = (msg) => {
    const m = msg.toLowerCase();
    for (const r of CHAT_RESPONSES) {
      if (r.keys.some(k => m.includes(k))) return r.reply;
    }
    return FALLBACK_REPLY;
  };

  const renderQuick = () => {
    quickHost.innerHTML = QUICK_REPLIES.map(q => `<button type="button">${q}</button>`).join('');
    quickHost.querySelectorAll('button').forEach(b => {
      b.addEventListener('click', () => {
        addMsg(b.textContent, 'user');
        reply(findReply(b.textContent));
        quickHost.innerHTML = '';
      });
    });
  };

  // Greeting
  setTimeout(() => {
    addMsg('Hi! 👋 I\'m Jen, your craft assistant. How can I help you today?');
    renderQuick();
  }, 800);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const val = input.value.trim();
    if (!val) return;
    addMsg(val, 'user');
    input.value = '';
    quickHost.innerHTML = '';
    reply(findReply(val));
    setTimeout(renderQuick, 1500);
  });
}

/* ----------------------------- TOAST ----------------------------- */
function showToast(msg, type = 'success') {
  const host = $('#toastHost');
  const t = document.createElement('div');
  t.className = 'toast';
  const icon = type === 'warn' ? 'fa-circle-exclamation' : 'fa-circle-check';
  t.innerHTML = `<i class="fa-solid ${icon}"></i><span>${msg}</span>`;
  host.appendChild(t);
  setTimeout(() => {
    t.classList.add('out');
    setTimeout(() => t.remove(), 300);
  }, 2600);
}
window.showToast = showToast;

/* ----------------------------- WISHLIST ----------------------------- */
function initWishlist() {
  document.addEventListener('click', (e) => {
    const w = e.target.closest('.product-wish');
    if (!w) return;
    const i = w.querySelector('i');
    i.classList.toggle('fa-regular');
    i.classList.toggle('fa-solid');
    if (i.classList.contains('fa-solid')) {
      i.style.color = '#EF4444';
      showToast('Added to wishlist 💖');
    } else {
      i.style.color = '';
    }
  });
}

/* ----------------------------- INIT ----------------------------- */
window.addEventListener('load', () => {
  initTheme();
  initNavbar();
  initLoader();
  initHeroBouquet();
  initBgParticles();
  renderCategories();
  renderFilterChips();
  renderProducts();
  initShopControls();
  initReviews();
  initCart();
  initLightbox();
  initChat();
  rippleButtons();
  initWishlist();
  initReveal();

  // Hide loader after everything "settles"
  setTimeout(hideLoader, 1400);
});

// Escape to close cart/lightbox/chat
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    $('#cartDrawer').classList.remove('open');
    $('#drawerBackdrop').classList.remove('open');
    document.body.style.overflow = '';
    $('#lightbox').hidden = true;
    $('#chatWindow').hidden = true;
    $('#chatToggle').style.display = 'grid';
    $('#navLinks').classList.remove('mobile-open');
    $('#hamburger').classList.remove('active');
  }
});
