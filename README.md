# FitMind AI

FitMind AI is a modern, responsive fitness companion built with React. It brings workout planning, diet guidance, calorie tracking, progress analytics, and an AI-coach-style chat experience into one premium, seamless interface.

## 🚀 Features

- **Dynamic Fitness Dashboard**: Track your calories burned, diet score, and workout progress with interactive overview charts.
- **Goal-Based Diet Planner**: Personalized nutrition plans tailored for weight loss, muscle gain, or maintenance.
- **Workout Generator**: Select your fitness level to generate tailored workout routines.
- **Interactive AI Fitness Coach**: Chat interface simulating personalized health guidance and motivation.
- **Seamless Page Transitions**: Powered by Framer Motion and React Router for a fluid, app-like experience.
- **Secure Authentication Flow**: Simulated login, signup, and protected dashboard routes managed by global Context state.
- **Beautiful & Modern UI**: Featuring a sleek dark mode with vibrant emerald and purple accents, glassmorphism, and custom animated components.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: React Router DOM (v6)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Data Visualization**: Recharts
- **State Management**: React Context API

## 📦 Getting Started

### Prerequisites

Install a current LTS version of [Node.js](https://nodejs.org/).

### Installation

```bash
git clone https://github.com/arham471332/fitmind-ai.git
cd fitmind-ai
npm install
```

### Development

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

### Production Build

```bash
npm run build
npm run preview
```

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Create an optimized production build. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |

## 🏗️ Project Structure

```text
src/
  components/  # Home, Dashboard, Auth UI, Legal Pages, Charts, Planners
  context/     # Global state management (FitnessContext)
  assets/      # Application images and SVG assets
  App.jsx      # Core application routes and Context providers
  main.jsx     # React entry point
```

## ⚠️ Note

The current AI coach, diet suggestions, and workout recommendations are front-end experiences powered by simulated backend responses and global React Context. Connect them to a trusted backend or real AI service before relying on them for personalized health guidance.
