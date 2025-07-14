# Next.js Boilerplate

A clean, production-ready Next.js boilerplate with authentication, database integration, and modern tooling.

## Features

- ⚡ **Next.js 15** with App Router
- 🔐 **Authentication System** (JWT + MongoDB)
- 🗄️ **Database Integration** (MongoDB + Mongoose)
- 🎨 **Modern UI** with Tailwind CSS
- 📦 **State Management** with Redux Toolkit + RTK Query
- 🔧 **Git Hooks** (Husky + Lint-staged)
- 📝 **Code Quality** (ESLint + Prettier + TypeScript)
- 🚀 **Firebase Ready** (configuration included)

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/naraja-03/jovona.git
   cd jovona
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env .env.local
   ```
   Update the values in `.env.local`:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A secure JWT secret (min 32 characters)
   - Firebase configuration (optional)

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
- `npm run commit` - Interactive commit with conventional format

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── login/             # Login page
│   ├── register/          # Register page
│   └── dashboard/         # Protected dashboard
├── components/            # React components
│   ├── ui/               # UI components
│   ├── AppLayout.tsx     # Main layout wrapper
│   └── AuthGuard.tsx     # Route protection
├── store/                # Redux store
│   ├── api/              # RTK Query APIs
│   └── slices/           # Redux slices
├── lib/                  # Utilities
├── models/               # Database models
└── .husky/               # Git hooks
```

## Authentication

The boilerplate includes a complete authentication system:

- **Registration**: Create new user accounts
- **Login**: JWT-based authentication
- **Route Protection**: Automatic redirects for protected routes
- **State Management**: User state persisted in Redux

## Database

Uses MongoDB with Mongoose for:
- User management
- Session handling
- Data persistence

## Git Hooks

Pre-configured Git hooks ensure code quality:
- **Pre-commit**: Runs linting, formatting, and type checking
- **Commit-msg**: Enforces conventional commit format
- **Post-commit**: Success notification

## Deployment

The boilerplate is ready for deployment on:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- Any Node.js hosting platform

## Contributing

1. Use `npm run commit` for properly formatted commit messages
2. Ensure all tests pass before submitting PRs
3. Follow the existing code style

## License

MIT License - feel free to use for your projects!

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies.
