
# Project Name
GadgetHub

## Overview

This project is a React application where users can perform some search filtering functionalities. This project will focus on implementing pagination, searching, categorization and sorting of products. It has been deployed to Netlify.

## Live Demo

You can view the live demo of the application [here](https://gadgethub-97d636.netlify.app/).

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js (version 14.x or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shakhawat-pro/GadgetHub-client.git
   ```

2. Navigate into the project directory:

   ```bash
   cd your-repo-name
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   This will open the application in your default web browser at `http://localhost:3000`.

## Deployment

The application is deployed to Netlify. For details on deployment, refer to the Netlify documentation or the configuration in `netlify.toml`.

### Deployment Steps

1. **Build the application:**

   ```bash
   npm run build
   ```

   This will create a `build` directory with the production files.

2. **Deploy to Netlify:**

   - Make sure you have the Netlify CLI installed. If not, install it via:

     ```bash
     npm install -g netlify-cli
     ```

   - Login to Netlify:

     ```bash
     netlify login
     ```

   - Deploy the site:

     ```bash
     netlify deploy --prod
     ```

   Follow the instructions to complete the deployment.

## Configuration

The project is configured with the following files:

- **`netlify.toml`**: Configuration file for Netlify deployments.
- **`package.json`**: Includes scripts for building and deploying the application.

## Contributing

Contributions are welcome! Please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a new Pull Request.


