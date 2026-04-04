# SimpliRide - Next.js Project

A modern ride-sharing platform built with Next.js, TypeScript, and a feature-based architecture.

## Project Structure

```
src/
├── app/                      # Next.js App Router (routing layer only)
├── components/               # Reusable UI (NO business logic)
├── features/                 # Core layer (domain-based)
├── lib/                      # External configs & clients
├── hooks/                    # Global reusable hooks
├── store/                    # Global state (Zustand)
├── services/                 # API layer
├── types/                    # Global types
├── constants/                # Static constants
├── config/                   # Env validation, app config
└── styles/                   # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file (copy from `.env.example`):
```bash
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Architecture Overview

### Features Folder
Each feature contains:
- `components/` - Feature-specific UI components
- `hooks/` - Feature-specific custom hooks
- `services.ts` - API calls for this feature
- `types.ts` - TypeScript types for this feature
- `store.ts` - State management for this feature

### Lib Folder
- `axios.ts` - Configured Axios instance with interceptors
- `query-client.ts` - React Query configuration
- `utils.ts` - Utility functions

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Zustand** - State management
- **React Query** - Data fetching & caching
- **Axios** - HTTP client

## Development Tips

1. Keep components pure and presentation-focused
2. Place business logic in features or services
3. Use hooks for side effects and state
4. Follow the feature-based structure for scalability
5. Use path aliases (`@/`) for cleaner imports

## License

MIT
