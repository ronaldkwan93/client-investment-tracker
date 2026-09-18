# EstateFlow

A dashboard for tracking real estate investment properties — portfolio value, rental yields, property details, and an AI copilot for asking questions about the portfolio in plain English.

![alt text](image.png)

## Tech stack

| Technology | Why it was used |
| --- | --- |
| **React 19 + TypeScript** | Component-based UI with type safety, catching bugs (like data shape mismatches) at compile time rather than in the browser. |
| **Vite** | Fast dev server with hot module reload and a lean production build, avoiding the config overhead of older bundlers. |
| **React Router** | Client-side routing between the dashboard, property list, and property detail pages without full page reloads. |
| **Tailwind CSS** | Utility-first styling for building a consistent, responsive UI quickly without hand-rolling a separate CSS file per component. |
| **Recharts** | Declarative charting library for visualizing portfolio value and rental income trends. |
| **Google Maps API** (`@react-google-maps/api`) | Renders each property's location on a map from its address, giving an at-a-glance geographic view of the portfolio. |
| **ESLint** | Enforces consistent code quality and catches common mistakes across the codebase. |

The app is a pure frontend client — it talks to a separate backend API (see `VITE_API_BASE_URL` below) for property data, persistence, and the copilot's responses.

## Running locally

### Prerequisites

- Node.js 20+ and npm
- The [backend API](../) running locally (defaults to `http://localhost:8080/api`)

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root (copy `.env.example`) and fill in the values:

   ```bash
   cp .env.example .env
   ```

   | Variable | Description |
   | --- | --- |
   | `VITE_API_BASE_URL` | Base URL of the backend API, e.g. `http://localhost:8080/api` |
   | `VITE_GOOGLE_MAPS_KEY` | Google Maps API key, used to render property addresses on a map |

3. Start the dev server:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

### Other scripts

- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint
