# 3D Interactive React Web App

A modern React web application featuring stunning 3D visuals powered by Three.js and React Three Fiber.

## Features

- **Interactive 3D Scene**: Explore floating geometric shapes in a starry 3D environment
- **Responsive Controls**: Drag to rotate, scroll to zoom, and hover over shapes for interactions
- **Modern UI**: Sleek gradient design with glassmorphism effects
- **Smooth Animations**: Fluid animations and transitions throughout
- **Real-time Rendering**: Powered by Three.js for high-performance 3D graphics

## Technologies Used

- **React** - UI framework
- **Vite** - Build tool for fast development
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173/`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── App.jsx       # Main application component with 3D scene
├── App.css       # Component-specific styles
├── index.css     # Global styles
└── main.jsx      # Application entry point
```

## Interacting with the 3D Scene

- **Rotate**: Click and drag anywhere in the scene
- **Zoom**: Use mouse wheel to zoom in/out
- **Pan**: Right-click and drag (or use two fingers on trackpad)
- **Hover**: Move your cursor over the geometric shapes to see them highlight

## Customization

You can customize the 3D scene by modifying the components in `App.jsx`:

- Change colors by updating the `color` prop on mesh materials
- Add more shapes by creating new component instances
- Adjust animation speeds by modifying the delta multipliers in `useFrame`
- Modify lighting by adjusting the `intensity` values

## License

This project is open source and available under the MIT License.
