# Wishlist for friends - client app

This client app is a NextJS project.

## Getting Started

Run the development server and visit [http://localhost:3000](http://localhost:3000):

```bash
npm run start:dev
```

## UI

UI is builded using [Material UI](https://mui.com/material-ui/all-components/) with custom theme.

## npm scripts

Development server:

```bash
npm run start:dev
```

Build app:

```bash
npm run build
```

Run builded app:

```bash
npm run start:generated
```

Run lint test:

```bash
npm run lint
```

## e2e tests

For writing e2e tests we are using Cypress. To run e2e tests make sure that `BASE_URL` is set in `.env` file and app is running.

To run Cypress client:

```bash
npm run cy:open
```

To run Cypress cli:

```bash
npm run cy:run
```

## Environment variables

```bash
BASE_URL= // app base url
```
