**Task**: https://drive.google.com/file/d/1C148FRnWfXVoRDslDWcYac3bEhebdIAV/view?pli=1

App: @voronova/custom-components-lib
A custom React component library built with TypeScript, Webpack, and SCSS modules. Designed to provide reusable, well-tested UI components with Storybook integration for easy documentation and development.

**Features**:
Written in TypeScript for type safety

Uses SCSS modules for styling

Tested with Jest and React Testing Library

Storybook for interactive component development and documentation: [storybook](https://voronova-custom-components-storybook.netlify.app/?path=/docs/components-button--docs)

Built with Webpack

Supports React 18+

**Installation**
Install the package via npm:
npm install @voronovanasta/custom-components-lib

or yarn:
yarn add @voronovanasta/custom-components-lib

**Usage**
Import components into your React project:

tsx
import { YourComponent } from '@voronovanasta/custom-components-lib';

function App() {
return <YourComponent />;
}

**How to run the app**
Prerequisites:
Node.js (>= 16.x recommended)
npm or yarn package manager

1.Development server with Storybook
To start the Storybook development server and view components interactively:

npm run storybook
or

yarn storybook
This will launch Storybook at http://localhost:6006.

2.Build the library
npm run build
or

yarn build
The output will be in the dist/ directory.

3.Run tests
To run unit and integration tests with Jest:

npm test
or

yarn test
Lint and format

4.To run ESLint and automatically fix issues:

npm run lint
or

yarn lint

!Peer _Dependencies_
This library requires the following peer dependencies in your project:

react

react-dom

Make sure to install compatible versions.
