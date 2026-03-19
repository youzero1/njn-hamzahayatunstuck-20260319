# NextJS Dashboard

A production-ready dashboard built with Next.js 14, TypeScript, Tailwind CSS, and TypeORM with SQLite.

## Features

- **Modern Dashboard UI**: Responsive layout with sidebar navigation and header
- **Key Metrics**: Cards displaying important business metrics with visual indicators
- **Interactive Charts**: Revenue trends visualization using Chart.js
- **Recent Activity**: Timeline of user activities with status indicators
- **User Authentication**: Simulated authentication system (UI only)
- **Database Integration**: TypeORM with SQLite for data persistence
- **Production Ready**: Error handling, loading states, and responsive design

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- TypeORM
- SQLite
- Chart.js / React Chart.js 2
- Headless UI / Heroicons

## Getting Started

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Docker Deployment

Build and run with Docker:

```bash
docker build -t nextjs-dashboard .
docker run -p 3000:3000 nextjs-dashboard
```

## Database

The application uses SQLite with TypeORM. The database file (`database.sqlite`) will be created automatically in the project root.

### Database Entities

- **User**: User accounts with name, email, role, and activity status
- **Activity**: Log of user activities with timestamps and status

### API Endpoints

- `GET /api/users`: Fetch all users
- `POST /api/users`: Create a new user
- `GET /api/activities`: Fetch recent activities
- `POST /api/activities`: Create a new activity log

## Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages and layouts
│   ├── components/       # React components
│   ├── entities/         # TypeORM database entities
│   ├── lib/             # Utility functions and database connection
│   └── styles/          # Global styles
├── public/              # Static assets
├── .env                 # Environment variables
├── Dockerfile           # Docker configuration
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies and scripts
└── tailwind.config.ts   # Tailwind CSS configuration
```

## Deployment

This application is configured for deployment on Coolify or any Docker-compatible platform. The Dockerfile uses a multi-stage build for optimal performance.

## License

MIT