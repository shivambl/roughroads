# Rough Roads

A web application that uses device accelerometer data to detect road conditions.

## Prerequisites

- Node.js 20 or higher
- A device with accelerometer support (mobile phone or laptop with sensors)

## Development Setup

1. Clone the repository:
```bash
git clone ...
cd roughroads
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. For mobile testing, create an HTTPS tunnel using cloudflared:
```bash
cloudflared tunnel --url http://localhost:5173
```

## Project Structure

- `/src` - Source code
  - `/components` - React components
  - `/styles` - Styling and Tailwind configurations
- `public` - Static assets
- `index.html` - Entry HTML file

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Technical Details

- Built with React and Vite
- Styled using Tailwind CSS
- Uses Web APIs for accelerometer access
- Requires HTTPS for sensor access

## Notes

- The accelerometer API only works in secure contexts (HTTPS)
- For local development on mobile devices, use cloudflared to create an HTTPS tunnel
- Make sure to grant necessary permissions when prompted by the browser
