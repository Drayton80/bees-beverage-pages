# Basic Usage

To run the project in development mode, you only need to execute the two commands bellow:

```bash
yarn install
yarn start
```

And after, you can open that link http://localhost:3000/ in your browser to see the results.

# Showcase

# Project's Tools

This project was built using `React v18` with the npx's `create-react-app` that gave the basic config files, but most of them, like Webpack, Tsconfig and Eslintrc were reconfigured from scratch so that it was possible to have a better control of the code's transpilation and lint check.

## Webpack

With the Webpack I choosed to split it in three parts, one that hold the [development configurations](webpack.development.js) (used in the Basic Usage category), one with a [basic production](webpack.production.js) config with minification (that can be built using the command `yarn build`), and one with the configs that are [common](webpack.common.js) to the other two.

## CI

To better maintain the code's arrangement, it was coded a simple pipeline using the Github actions and CI that only have two steps: one to build the project using the yarn commands and other that use the ESLint to check the code. The running stances of the pipe can be checked [here](https://github.com/Drayton80/bees-beverage-pages/actions).

## State Management

The state management was made using MobX library alongside the React Context. Due to the scale of the project, I only made one store that holds the [User's information](src/stores/User/store.ts).

# Directory Tree

I organized the project's src directory by categories (like components, pages, services, etc), and for each one member of those categories that had more than one file associated to it (like .less, .d.ts, .tsx, and/or .ts) I separated them in folders, having the index.tsx as the default import file. That can be visualized in the tree bellow.

```bash
├── package.json
├── README.md
├── src
│   ├── App.less
│   ├── App.tsx
│   ├── commons
│   │   └── utils.ts
│   ├── components
│   │   ├── BackButton
│   │   │   ├── index.tsx
│   │   │   ├── style.less
│   │   │   └── types.d.ts
│   │   ├── BreweryCard
│   │   │   ├── index.tsx
│   │   │   ├── style.less
│   │   │   └── types.d.ts
│   │   ├── Checkbox
│   │   │   ├── index.tsx
│   │   │   ├── style.less
│   │   │   └── types.d.ts
│   │   └── Tag
│   │       ├── index.tsx
│   │       ├── style.less
│   │       └── types.d.ts
│   ├── constants
│   │   ├── idNames.ts
│   │   └── urlRoutes.ts
│   ├── index.html
│   ├── index.tsx
│   ├── pages
│   │   ├── Breweries
│   │   │   ├── index.tsx
│   │   │   └── style.less
│   │   └── Login
│   │       ├── index.tsx
│   │       └── style.less
│   ├── public
│   │   ├── arrow-circle-left.png
│   │   ├── bee.png
│   │   ├── chart-square-bar.png
│   │   ├── location-marker.png
│   │   ├── phone.png
│   │   ├── plus-circle.png
│   │   └── trash.png
│   ├── services
│   │   └── Breweries
│   │       ├── index.ts
│   │       └── types.d.ts
│   └── stores
│       └── User
│           ├── Context.tsx
│           ├── store.ts
│           └── types.d.ts
├── tsconfig.json
├── webpack.common.js
├── webpack.development.js
├── webpack.production.js
├── yarn-error.log
└── yarn.lock
```

# Bonus Challenges Completed

- Implement using Typescript
- Save user name in the global state (feel free to use any tool/library)
- Responsivity
- Validate if the user entered only valid characters in the first screen
- Showing your work through your Git commit history
