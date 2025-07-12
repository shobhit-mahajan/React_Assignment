# Challenge Management Dashboard

A fully responsive React application for creating and managing team challenges with a modern, mobile-first design.

## 🚀 Features

### Responsive Design
- **Mobile-First Approach**: Optimized for all screen sizes from mobile to desktop
- **Collapsible Sidebar**: Mobile-friendly navigation with slide-out menu
- **Touch-Friendly**: All interactive elements meet accessibility standards (44px minimum touch targets)
- **Flexible Layout**: Adapts seamlessly across devices

### Key Components
- **Navbar**: Fixed top navigation with mobile menu button
- **LeftSidebar**: Collapsible navigation with completion progress
- **CreateChallengeSection**: Responsive form with step indicators
- **PreviewSection**: Mobile device preview with responsive scaling

### Responsive Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm to lg)
- **Desktop**: > 1024px (lg+)
- **Large Desktop**: > 1280px (xl+)

## 🛠️ Technologies

- **React 18** with TypeScript
- **Tailwind CSS** for responsive styling
- **Lucide React** for icons
- **Vite** for fast development and building

## 📱 Mobile Optimizations

### Performance
- Optimized images with proper sizing
- Smooth transitions and animations
- Efficient CSS with Tailwind's purge
- Removed unused components

### Accessibility
- Proper focus management
- Touch-friendly button sizes
- Semantic HTML structure
- Screen reader support

### User Experience
- Smooth scrolling
- Custom scrollbars
- Loading states
- Hover effects (desktop only)

## 🎨 Design System

### Colors
- Primary: Emerald (green) - #10b981
- Secondary: Slate (gray) - #1e293b
- Background: Gray-50 - #f9fafb

### Typography
- Responsive font sizes
- Optimized line heights
- Proper text truncation

### Spacing
- Consistent spacing scale
- Responsive padding and margins
- Mobile-safe areas support

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📐 Responsive Layout

### Mobile (< 640px)
- Single column layout
- Collapsible sidebar
- Stacked navigation buttons
- Optimized touch targets

### Tablet (640px - 1024px)
- Two-column layout
- Sidebar visible on larger tablets
- Responsive form elements

### Desktop (> 1024px)
- Full three-column layout
- Permanent sidebar
- Enhanced hover effects
- Larger touch targets

## 🔧 Customization

### Adding New Breakpoints
The Tailwind config includes custom breakpoints:
- `xs`: 475px
- `3xl`: 1600px

### Responsive Utilities
Custom CSS utilities for common responsive patterns:
- `.container-responsive`: Responsive container
- `.text-truncate-2/3`: Multi-line text truncation
- `.safe-top/bottom/left/right`: Safe area padding

## 📊 Performance

### Optimizations Made
- Removed unused components (Sidebar.tsx, MobilePreview.tsx, TopNavbar.tsx)
- Optimized Tailwind CSS configuration
- Added performance-focused CSS utilities
- Implemented efficient responsive breakpoints

### Bundle Size
- Minimal dependencies
- Tree-shaking enabled
- Optimized imports

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is open source and available under the MIT License. 