# Little Lemon Restaurant 🍋

A modern, responsive restaurant website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases a complete online presence for Little Lemon restaurant, featuring online ordering, table reservations, and an immersive dining experience.

## 🌟 Project Overview

Little Lemon is a Mediterranean restaurant website that provides customers with a seamless digital experience. The site features a modern design, online ordering system, reservation booking, and comprehensive restaurant information.

### Key Features
- **Online Ordering System** - Browse menu, add items to cart, and place orders
- **Table Reservations** - Book tables with date/time selection and guest count
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, intuitive interface with smooth animations
- **Performance Optimized** - Built with Next.js 15 and Turbopack for fast loading

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Redux** - State management for cart and menu

### UI Components
- **Flowbite React** - Pre-built components and design system
- **React Slick** - Carousel/slider components
- **Iconify** - Icon library with 200k+ icons

### Development Tools
- **Jest** - Unit testing framework
- **Testing Library** - React testing utilities
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing

## 📁 Project Structure

```
little-lemon/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About us page
│   │   ├── menu/              # Menu page
│   │   ├── booking/           # Table reservations
│   │   ├── order_now/         # Online ordering
│   │   └── reservations/      # Reservation system
│   ├── components/            # Reusable components
│   │   ├── Home/             # Home page sections
│   │   ├── Menu/             # Menu components
│   │   ├── OrderNow/         # Ordering components
│   │   └── BookingForm/      # Reservation form
│   ├── data/                  # Static data
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilities and helpers
│   ├── redux/                 # Redux store and slices
│   └── types/                 # TypeScript definitions
├── public/                    # Static assets
├── tests/                     # Test files
└── package.json              # Dependencies and scripts
```

## 🎯 Pages & Features

### Home Page (`/`)
- Hero section with restaurant branding
- About section with restaurant story
- Featured menu highlights
- Customer testimonials carousel
- Call-to-action buttons

### Menu Page (`/menu`)
- Complete menu with categories
- Dish cards with images and descriptions
- Filter by category functionality
- Responsive grid layout

### Order Online (`/order-now`)
- Full menu browsing
- Shopping cart functionality
- Item customization options
- Order summary and checkout
- Persistent cart state

### Reservations (`/booking`)
- Date and time selection
- Guest count input
- Contact information form
- Booking confirmation modal
- Form validation

### About Us (`/about`)
- Restaurant story and history
- Chef profiles and team
- Restaurant ambiance photos
- Contact information

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/little-lemon.git
cd little-lemon
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Generate test coverage report
- `npm run lint` - Run ESLint

## 🧪 Testing

The project includes comprehensive testing setup with Jest and React Testing Library. Tests are located in the `tests/` directory.

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 🎨 Design System

### Colors
- Primary: `#F4CE14` (Lemon Yellow)
- Secondary: `#495E57` (Dark Green)
- Accent: `#EE9972` (Coral)
- Neutral: `#EDEFEE` (Light Gray)

### Typography
- Headings: Markazi Text
- Body: Karla

### Components
- Cards with hover effects
- Buttons with loading states
- Forms with validation
- Modals with animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuration

### Next.js Configuration
The project uses Next.js 15 with:
- App Router
- Turbopack for fast development
- Image optimization
- Font optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on Vercel
3. Deploy with zero configuration

---

Built with ❤️ by the Tristan
