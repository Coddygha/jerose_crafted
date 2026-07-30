# 🌸 Jerose HandCraft — E-Commerce Website

A premium, fully-responsive e-commerce website for Jerose HandCraft featuring Three.js 3D elements, AI chatbot, and smooth animations.

## ✨ Features

### 🎨 Design
- **Premium glassmorphism** with soft shadows and gradients
- **Mobile-first responsive** layout (mobile → tablet → desktop)
- **Dark/Light mode** toggle with localStorage persistence
- **Color palette**: Primary (#4F46E5), Secondary (#06B6D4), Accent (#F59E0B)
- **Typography**: Poppins (headings) + Inter (body)

### 🧊 3D Elements (Three.js)
- **Hero Section**: Floating fuzzy wireframe bouquet with flowers, stems, leaves, and wrap
- **Product Cards**: 3D fuzzy wireframe preview on hover with rotation and wobble
- **Background**: Floating fuzzy particles throughout the page
- **Loading Screen**: Spinning fuzzy rings that dissolve on load
- All 3D elements use `EdgesGeometry` + `LineSegments` for the fuzzy wire look

### 🎬 Animations
- **Page load**: Staggered fade-up reveals on scroll
- **Hero**: 3D rotation + floating badges + gradient animation
- **Navbar**: Glass effect that intensifies on scroll
- **Buttons**: Ripple effect, hover lift, glow pulse
- **Product cards**: 3D tilt on mouse move, image zoom, 3D wireframe preview
- **Cart drawer**: Slide-in with spring easing (full-screen on mobile)
- **Add to cart**: Particle burst animation
- **Reviews carousel**: Auto-slide every 3.5s + drag/swipe support
- **Floating buttons**: Continuous bounce + glow pulse
- **Toast notifications**: Slide-in from bottom with spring

### 📱 Mobile-First
- **Bottom navigation** (Home, Shop, Cart, Contact)
- **Hamburger menu** for desktop nav links
- **Responsive grid**: 2 columns (mobile) → 3 (tablet) → 4 (desktop)
- **Cart drawer**: Full-screen on mobile, 440px side panel on desktop
- **Swipeable filter chips** on mobile
- **44×44px minimum** touch targets
- **iOS safe areas** support

### 🛒 E-Commerce
#### Products
- **14 handmade products** (bouquets, crochet, knitted, macramé, beaded, home decor, accessories, gifts)
- Each with: id, name, category, price, oldPrice (optional), rating, image, badge (sale/new/best), stock
- **Dynamic rendering** with JavaScript
- **Filter** by category (desktop dropdown + mobile chips)
- **Search** by name or category
- **Sort** by featured, price, or rating
- **Lightbox** image viewer on click

#### Shopping Cart
- **Side drawer** cart (slide-in from right)
- Add/remove items, quantity control
- **Auto-calculate** subtotal, shipping, grand total
- **localStorage** persistence
- Clear cart button

#### Checkout
- **Delivery options**: Delivery (₱20 flat) or Pick-up (Free)
- **Payment methods**: COD or GCash (0955-906-7041)
- **Customer form**: Name, Contact, Address (optional for pick-up), Special Instructions
- **Validation** before checkout
- **Messenger checkout**: Generates order summary, copies to clipboard, opens Messenger (m.me/jerose.empuerto) with pre-filled message

### 🤖 AI Chatbot (Jen)
- **Floating toggle** button with ping indicator
- **Chat window** with quick reply buttons
- **AI responses** for:
  - Greetings
  - Products & inventory
  - Pricing
  - Delivery & shipping
  - Payment methods
  - How to order
  - Contact info
  - Custom orders
  - Location
- **Keyword matching** with fallback response
- **Typing indicator** animation
- **Chat history** in session

### 🗺️ Other Sections
- **Categories**: 9 category cards with hover rotate & scale
- **Reviews**: 6 customer testimonials in auto-sliding carousel
- **About**: Mission, Vision, Why Choose Us cards
- **Contact**: Messenger, Facebook, Email, Phone, Address + Google Maps embed (Colorado, Digos City)
- **Footer**: Quick links, social icons, newsletter form, back-to-top button
- **Scroll progress bar** at the top

## 📦 Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Mobile-first, CSS variables, glassmorphism, animations
- **Vanilla JavaScript** — No frameworks
- **Three.js r128** — 3D graphics (CDN)
- **Font Awesome 6** — Icons (CDN)
- **Google Fonts** — Poppins + Inter (CDN)

## 🚀 Getting Started

1. **Open `index.html`** in a modern browser
2. All dependencies load via CDN (no build step needed)
3. Works offline after first load (CDN resources cached)

## 📂 File Structure

```
jerosehandcraft/
├── index.html       # Semantic HTML5 structure
├── style.css        # Mobile-first CSS with glassmorphism
├── script.js        # Vanilla JS + Three.js + AI chatbot
└── README.md        # This file
```

## 🎯 Key Features Breakdown

### Three.js Scenes
1. **Loader** (`initLoader`) — Spinning fuzzy rings during page load
2. **Hero Bouquet** (`initHeroBouquet`) — Floating wireframe bouquet with flowers, stems, leaves, wrap
3. **Background Particles** (`initBgParticles`) — Floating fuzzy spheres throughout page
4. **Product Card Preview** (`initCard3D`) — Mini 3D wireframe on hover

### Cart System
- State management with `state.cart` array
- localStorage persistence
- Real-time badge updates
- Dynamic total calculation
- Form validation
- Messenger integration

### AI Chatbot
- Keyword-based response matching
- Quick reply buttons
- Typing indicator
- Session-based chat history
- Fallback responses

### Responsive Breakpoints
- **Mobile**: < 640px (2 columns, bottom nav, full-screen cart)
- **Tablet**: 640px–900px (3 columns)
- **Desktop**: > 900px (4 columns, side nav, side-panel cart)

## 🎨 Customization

### Change Colors
Edit CSS variables in `:root` (line 10–30 in `style.css`):
```css
--primary: #4F46E5;
--secondary: #06B6D4;
--accent: #F59E0B;
```

### Add Products
Add to `PRODUCTS` array in `script.js` (line 10):
```javascript
{
  id: 'p15',
  name: 'New Product',
  category: 'Category',
  price: 500,
  rating: 4.8,
  badge: 'new',
  image: 'url',
  stock: 'In stock'
}
```

### Modify AI Responses
Edit `CHAT_RESPONSES` array in `script.js` (line 100):
```javascript
{ keys: ['keyword1', 'keyword2'], reply: 'Your response here' }
```

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Built for Jerose HandCraft. Feel free to customize for your own brand!

## 🙏 Credits

- **3D Graphics**: Three.js
- **Icons**: Font Awesome
- **Fonts**: Google Fonts
- **Images**: Unsplash (product placeholders)
- **Design & Development**: Senior Creative Developer ✨

---

**Made with 💛 in Digos City, Philippines**
