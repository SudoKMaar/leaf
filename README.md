# LEAF: Full-stack Duolingo Clone Web Application

![LEAF Logo](/public/logo.webp)

LEAF is a language learning platform inspired by Duolingo. It allows users to learn and practice languages through interactive exercises, quizzes, and gamified experiences. The application is built using modern technologies and follows best practices for scalability and maintainability.

## Features

- **User Authentication**: Users can sign up, log in, and track their progress.
- **Language Selection**: Choose from a variety of languages to learn.
- **Interactive Lessons**: Engage in interactive lessons covering vocabulary, grammar, and pronunciation.
- **Progress Tracking**: Monitor your progress, earn points, and unlock new levels.
- **Leaderboards**: Compete with other learners and see who's at the top.
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.

## Tech Stack

- **Frontend**:
  - Next.js (React framework)
  - TypeScript
  - Tailwind CSS
  - Shadcn UI (custom UI components)
  - Zustand (state management)
- **Backend**:
  - Neon Database (for user data)
  - Drizzle ORM (for database interactions)
  - Stripe (for payment processing)

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/SudoKMaar/leaf.git
   ```

2. Install dependencies:

   ```bash
   cd leaf
   npm install
   ```

3. Set up environment variables:

   - Create a `.env.local` file in the root directory.
   - Add your API keys and other sensitive information (e.g., Stripe secret key).

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

Contributions are welcome! Please follow our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
