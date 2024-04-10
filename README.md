# Turborepo Next Express ShadcnUI starter

This is a starter template for Turborepo with nextjs, express and shadcnui.

![image](https://github.com/dragon1227/next-shadcn-express-turbo/assets/122885050/a1fd19bb-3a74-478c-a543-87b418702711)

![image](https://github.com/dragon1227/next-shadcn-express-turbo/assets/122885050/00de456d-8513-42de-979f-aa629dd62823)

![image](https://github.com/dragon1227/next-shadcn-express-turbo/assets/122885050/7c475b46-f71f-4a19-83f9-0fd882a0d3c7)

![image](https://github.com/dragon1227/next-shadcn-express-turbo/assets/122885050/4e42d798-1bb4-48a5-8c8e-5006116b30bc)


## Using this example

Run the following command:

```sh
git clone https://github.com/dragon1227/next-shadcn-express-turbo.git
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

#### Apps

- `web`: another [Next.js](https://nextjs.org/) app
- `api`: a [Express.js](https://expressjs.com/) app

#### Packages

- `ui`: a [shadcn/ui](https://ui.shadcn.com/) components and tailwindcss config shared by `web` application
- `eslint-config-custom`: `eslint` configurations for next.js
- `eslint-config-custom-server`: `eslint` configurations for express.js
- `tsconfig`: `tsconfig.json`s used throughout the monorepo
- `types`: type definition used all throughout the monorepo
- `utils`: utility methods used all throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Adding shadcn component

Run the following command:

```sh
pnpm run ui:add <YOUR_COMPONENT>

pnpm run ui:add <YOUR_COMPONENT> --overwrite // to overwrite your components
```

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd next-shadcn-express-turbo
pnpm run build
```

### Add Dependency

To add dependencies to apps and packages, run the following command:

```
cd next-shadcn-express-turbo
pnpm add <package> --filter=<workspace>
```

### Develop

To develop all apps and packages, run the following command:

```
cd next-shadcn-express-turbo
pnpm run dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd next-shadcn-express-turbo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
