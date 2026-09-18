# Investment Property Portfolio app

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
