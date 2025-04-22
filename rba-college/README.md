# RBA College Website

This project is a responsive website for RBA College, built using React, TypeScript, and Vite. The website includes various components that provide information about the college, its courses, and contact details.

## Project Structure

- **src/**: Contains all the source code for the application.
  - **components/**: Contains the React components for different sections of the website.
    - `Header.tsx`: Displays the college name, establishment year, and contact information.
    - `Footer.tsx`: Contains copyright information and additional links.
    - `Home.tsx`: The landing page with a welcome message and overview of offerings.
    - `About.tsx`: Provides information about the college's history and mission.
    - `Courses.tsx`: Lists the various programs offered by the college.
    - `Contact.tsx`: Includes a contact form and the college's contact details.
  - **styles/**: Contains global styles and CSS variables for the website.
    - `index.css`: Global styles for layout, typography, and responsive design.
    - `variables.css`: CSS variables for the color scheme.
  - `App.tsx`: The main application component that renders the header, footer, and main content.
  - `main.tsx`: The entry point of the application.
  - `vite-env.d.ts`: Type definitions for Vite.

- **public/**: Contains static assets like the Vite logo.

- **index.html**: The main HTML file that includes the root div for the React application.

- **package.json**: Configuration file for npm, listing dependencies and scripts.

- **tsconfig.json**: TypeScript configuration file.

- **tsconfig.app.json**: TypeScript configuration specific to the application.

- **tsconfig.node.json**: TypeScript configuration specific to Node.js.

- **vite.config.ts**: Configuration file for Vite.

- **.gitignore**: Specifies files and directories to be ignored by Git.

- **eslint.config.js**: ESLint configuration for linting the project.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd rba-college-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the website.

## Features

- Responsive design that works well on all screen sizes.
- Clear and organized layout for easy navigation.
- Information about the college, its courses, and contact details.

## License

This project is licensed under the MIT License.