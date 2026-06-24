# Project Structure Documentation

This document describes the organized folder structure and components of the portfolio project.

## Folder Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx          # Main navigation header with logo and links
│   │   ├── MobileMenu.jsx       # Mobile dropdown navigation menu
│   │   ├── HireModal.jsx        # Contact form modal
│   │   ├── SuccessToast.jsx     # Success notification toast
│   │   └── index.js             # Barrel export for common components
│   ├── sections/
│   │   ├── Hero.jsx             # Hero section with profile image and CTA
│   │   ├── Features.jsx         # Feature cards section
│   │   ├── Footer.jsx           # Footer with scroll indicator
│   │   └── index.js             # Barrel export for section components
│   └── index.js                 # Main components export
├── hooks/
│   └── useNavigation.js         # Custom hook for navigation state management
├── utils/
│   └── constants.js             # Constants, colors, nav items, features data
├── styles/
│   └── index.css                # Global styles and animations
├── assets/
│   └── Mallikarjun.png          # Profile image
├── App.jsx                      # Main App component
└── main.jsx                     # React entry point
```

## Components Overview

### Common Components

#### `Header.jsx`
- **Purpose**: Fixed navigation header
- **Props**:
  - `activeTab`: Current active navigation tab
  - `setActiveTab`: Function to set active tab
  - `mobileMenuOpen`: Mobile menu state
  - `setMobileMenuOpen`: Function to toggle mobile menu
  - `onHireClick`: Callback for hire button click
- **Features**:
  - Logo with hover animation
  - Desktop navigation links with active indicator
  - Hire button for desktop
  - Mobile hamburger menu toggle

#### `MobileMenu.jsx`
- **Purpose**: Mobile dropdown navigation
- **Props**:
  - `isOpen`: Menu open state
  - `activeTab`: Current active tab
  - `setActiveTab`: Function to set active tab
  - `onClose`: Callback to close menu
  - `onHireClick`: Callback for hire button click
- **Features**:
  - Animated slide-in effect
  - Navigation links with active state
  - Hire button

#### `HireModal.jsx`
- **Purpose**: Contact form modal
- **Props**:
  - `isOpen`: Modal open state
  - `onClose`: Callback to close modal
  - `onSubmit`: Callback for form submission
- **Features**:
  - Name input field
  - Email input field
  - Project details textarea
  - Cancel and Send buttons

#### `SuccessToast.jsx`
- **Purpose**: Success notification after form submission
- **Props**:
  - `isOpen`: Toast visibility state
- **Features**:
  - Animated slide-in from bottom
  - Success icon with checkmark
  - Dismissible notification

### Section Components

#### `Hero.jsx`
- **Purpose**: Main landing hero section
- **Props**:
  - `onViewWork`: Callback for "View My Work" button
  - `onHireClick`: Callback for hire button
- **Features**:
  - Welcome badge
  - Main headline with gradient text
  - Description paragraph
  - CTA buttons (View Work, Download CV)
  - Trusted by companies section with logos
  - Profile image with hover effect
  - Floating skill badges (Code, React, JavaScript)
  - Decorative background graphics

#### `Features.jsx`
- **Purpose**: Features/services showcase
- **Features**:
  - 4 feature cards in a grid layout
  - Icons for each feature
  - Title and description
  - Responsive grid (1 col mobile → 4 cols desktop)

#### `Footer.jsx`
- **Purpose**: Footer with scroll indicator
- **Features**:
  - "Scroll to explore" text
  - Animated down arrow

## Hooks

### `useNavigation.js`
Custom hook for managing navigation state:
- `activeTab`: Current active tab
- `setActiveTab`: Update active tab
- `mobileMenuOpen`: Mobile menu state
- `setMobileMenuOpen`: Toggle mobile menu
- `closeMobileMenu`: Close mobile menu
- `showHireModal`: Modal visibility
- `setShowHireModal`: Toggle modal
- `showSuccessToast`: Toast visibility
- `handleHireMe`: Open hire modal
- `handleContactSubmit`: Handle form submission

## Utils

### `constants.js`
Centralized constants:
- `NAV_ITEMS`: Navigation menu items
- `COLORS`: Color palette
- `BREAKPOINTS`: Responsive breakpoints
- `ANIMATION_DELAYS`: Animation timing
- `FEATURES`: Feature cards data
- `TRUSTED_COMPANIES`: Company logos data

## Styles

### `index.css`
Global styles and animations:
- Tailwind CSS import
- Custom theme configuration (fonts, colors)
- Keyframe animations:
  - `float-badge`: Badge floating animation
  - `float-arrow`: Arrow floating animation
  - `pulse-soft`: Soft pulse animation
- Animation classes:
  - `.animate-float-1`, `.animate-float-2`, `.animate-float-3`
  - `.animate-float-arrow`
  - `.animate-pulse-soft`
- Custom scrollbar styling

## File Organization Best Practices

1. **Components Folder**: Organized by usage type
   - `common/`: Reusable UI components
   - `sections/`: Page sections and layout components

2. **Hooks Folder**: All custom React hooks centralized

3. **Utils Folder**: Shared constants, helpers, and utilities

4. **Styles Folder**: All CSS files organized separately

5. **Barrel Exports**: `index.js` files for easier imports
   ```javascript
   // Instead of:
   import Header from './components/common/Header'
   
   // You can do:
   import { Header } from './components'
   ```

## Importing Components

```javascript
// From main app
import {
  Header,
  MobileMenu,
  HireModal,
  SuccessToast,
  Hero,
  Features,
  Footer,
} from './components'

// From hooks
import { useNavigation } from './hooks/useNavigation'

// From constants
import { NAV_ITEMS, COLORS, FEATURES } from './utils/constants'
```

## Adding New Components

1. Create component in appropriate folder:
   - `src/components/common/` for reusable UI components
   - `src/components/sections/` for page sections

2. Create the component file with clear props and documentation

3. Add export to the corresponding `index.js`:
   ```javascript
   export { default as NewComponent } from './NewComponent'
   ```

4. Add to main `src/components/index.js` if needed

## Performance Considerations

- Components are split logically to enable code-splitting
- Custom hooks reduce state boilerplate
- Constants centralized for easy updates
- CSS animations optimized for smooth 60fps performance
- Tailwind CSS for zero-runtime overhead styling
