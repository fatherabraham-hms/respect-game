## Next.js 14 Consensus Voting App
#### Built by [Father Abraham](https://github.com/fatherabraham-hms) and [Optimism Fractal](https://optimismfractal.com/)
#### Come join us at [Optimism Fractal](https://optimismfractal.com/)!! where we use this repo for <a href="https://respect-game.vercel.app/">Fractalgram</a>

## Overview
Stack:
- Node.js - [Node.js 20.9.0+](https://nodejs.org/)
- Framework - [Next.js 14](https://nextjs.org/)
- Language - [TypeScript](https://www.typescriptlang.org)
- Thirdweb - [Connect](https://thirdweb.com/connect)
- Database - [Postgres](https://vercel.com/postgres)
- ORM - [Drizzle](https://orm.drizzle.team/)
- Deployment - [Vercel](https://vercel.com/docs/concepts/next.js/overview)
- Styling - [Tailwind CSS](https://tailwindcss.com)
- Analytics - [Vercel Analytics](https://vercel.com/analytics)
- Formatting - [Prettier](https://prettier.io)

## Getting Started

During the deployment, Vercel will prompt you to create a new Postgres database. This will add the necessary environment variables to your project.

Inside the Vercel Postgres dashboard, create a table based on the schema defined in this repository.

```
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  username VARCHAR(255),
  walletaddress VARCHAR(255),
  loggedin BOOLEAN DEFAULT FALSE,
  lastlogin TIMESTAMP,
  permissions INT2 DEFAULT 0,
);
```

Insert a row for testing:

```
INSERT INTO users (email, name, username, walletaddress, loggedin, lastlogin) VALUES ('user1@fake.com', 'Mad Hatter', 'hatter123', '0x12345', true, NOW());
```

Copy the `.env.example` file to `.env` and update the values.

Finally, run the following commands to start the development server:

```
pnpm install
pnpm dev
```

You should now be able to access the application at http://localhost:3000.
