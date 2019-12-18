# Frontend challange - Dragons API

## Tech stack

- [Create React App](https://create-react-app.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [Emotion](https://emotion.sh)
- [SWR](https://swr.now.sh/)
- [Formik](https://jaredpalmer.com/formik/docs/overview)
- [Reach Router](https://reach.tech/router)
- [date-fns](https://date-fns.org/)
- [react-loading-skeleton](https://www.npmjs.com/package/react-loading-skeleton)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)
- [Storybook](https://storybook.js.org/)
- [Font Awesome](https://fontawesome.com/)

## Instructions

### To install the dependencies run

```
yarn install
```

### To run the application

```
yarn start
```

### To run jest tests

```
yarn test
```

### To run cypress tests (start the application first)

```
yarn cypress
```

## Tech decisions

### CSS

The app consists of a Create React App boilerplate tweaked with babel-plugin-macros to some customization, like tailwind as my CSS framework.
Tailwind provides useful css classes to improve productivity, and everything is based on a configuration file that may be tweaked to the user needs. With the tailwind.macro I can use Tailwind together with emotion and classnames library.

### State Managment

This project uses React Context API and useReducer hooks to handle state management.

### Data fetching

Data fetching is made using swr hooks. SWR is library that orchestrates and handle many important things about data fetching. It optimizes our rendering and perform cache invalidation/revalidation, making the application more responsive.

### Testing

All unit and integration tests are made using Jest.  
E2E tests were developed with the cypress library.

### Components

The application is split in many components and each component has a dedicated Storybook file.

### Routing

The application uses Reach Router to handle routing. All routes are lazy loaded with React Lazy and React Suspense to improve application performance and decrease the initial bundle downloaded by the browser.

## Author

Andreo Vieira @ <contato@andreovieira.com.br>
