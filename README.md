# DirtyPower - Energy Supply Website

## Introduction

This codebase contains a React-based website for DirtyPower, a company offering energy from various sources including gas, coal, and nuclear power plants. The site provides customers with a comprehensive interface to compare different energy options, view detailed information about each energy type, explore pricing plans, and contact the company.

The website is structured with the following main features:
- **Homepage** with services overview and customer testimonials
- **Energy Types** page detailing the different energy sources and their characteristics
- **Comparison Tool** allowing users to compare energy options by consumption needs
- **Offers** section with filtering for residential and business customers
- **Contact Page** with a form and company information

The project uses React with TypeScript, React Router for navigation, Tailwind CSS for styling, and JSON data files to simulate backend data. The UI is fully responsive and designed to work across all device sizes.

_This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)._

## Legal Notice

**IMPORTANT**: This codebase is the exclusive property of ENGIE. Any use, reproduction, distribution, or modification without explicit authorization from ENGIE is strictly prohibited. See the LICENSE file for more details.

## Project Structure

```
src/
  ├── components/       # Reusable UI components
  │   ├── EnergyCard.tsx    # Display energy type information
  │   ├── Footer.tsx        # Site footer component
  │   ├── Hero.tsx          # Hero banner component for homepage
  │   ├── Navbar.tsx        # Navigation menu component
  │   └── OfferCard.tsx     # Display energy offer information
  │
  ├── data/            # JSON data files
  │   ├── energy-types.json # Energy types information
  │   └── offers.json       # Energy offers information
  │
  ├── pages/           # Page components
  │   ├── ComparePage.tsx   # Energy comparison tool
  │   ├── ContactPage.tsx   # Contact form and information
  │   ├── EnergyTypesPage.tsx # Energy types listing
  │   ├── HomePage.tsx      # Website homepage
  │   └── OffersPage.tsx    # Energy offers listing
  │
  ├── assets/          # Images and static resources
  └── App.tsx          # Main application component
```

## Technologies Used

- **React** with **TypeScript** for UI development
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Heroicons** for icon components

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deployment with GitHub Actions

This project is configured to automatically deploy to GitHub Pages using GitHub Actions. Two workflow files have been added:

1. **deploy.yml** - Builds and deploys the application to GitHub Pages whenever changes are pushed to the main branch.
2. **code-quality.yml** - Runs tests and checks for build errors on pull requests to ensure code quality.

### Setup Steps for GitHub Pages Deployment

1. The `homepage` property in the `package.json` file is currently set to:
   ```json
   "homepage": "https://new-york-thunder.github.io/green-power-website"
   ```
   Update this if your GitHub username is different.

2. Push your code to GitHub in a repository named `green-power-website`.

3. In your GitHub repository settings:
   - Go to "Settings" > "Pages"
   - Under "Source", select the "gh-pages" branch
   - Save the settings

4. GitHub Actions will automatically build and deploy your site when you push to the main branch.

### Manual Deployment

If you prefer to deploy manually, you can run:
```bash
npm run build
```
And then upload the contents of the `build` folder to your web hosting service.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
