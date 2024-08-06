# Arithmetic Calculator Frontend

This project is a frontend application for an Arithmetic Calculator, built with React and TypeScript.

## Project Description

The Arithmetic Calculator is a web application that allows users to perform various arithmetic operations, view their operation history, and manage their account balance. It integrates with a backend API to process operations and store user data.
## Live Demo

You can access the live version of this application at:
[https://main.d3a8zax3e8h5c7.amplifyapp.com/login](https://main.d3a8zax3e8h5c7.amplifyapp.com/login)

## Features

- User authentication
- Perform arithmetic operations (addition, subtraction, multiplication, division, square root)
- Generate random strings
- View operation history
- Filter and sort operation records
- Add balance to user account

## Technologies Used

- React
- TypeScript
- Material-UI
- AWS Amplify (for authentication)
- Axios (for API requests)
- React Router (for routing)

## Project Structure

The project follows a modular structure with components, hooks, and utilities separated into their own directories:

```bash
src/
components/
Auth/
Layout/
Operation/
UserRecords/
...
hooks/
api/
types/
utils/
pages/
styles/
```

## Getting Started

### Prerequisites

- Node.js (version v20.10.0)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/maxculen86/arithmetic-calculator-frontend.git
```
2. Navigate to the project directory:
```bash
cd arithmetic-calculator-frontend
```
3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory and add the necessary environment variables:
```bash
REACT_APP_API_BASE_URL=https://f8lzov2sb3.execute-api.us-east-1.amazonaws.com/v1
REACT_APP_API_OPERATION_ENDPOINT=/operation
REACT_APP_API_UPDATE_BALANCE_ENDPOINT=/update-balance
```

5. Start the development server:
```bash
npm start
```

The application should now be running on `http://localhost:3000`.

## Usage

The Arithmetic Calculator application allows users to perform various arithmetic operations and manage their account. Here's how to use the main features:

### Accessing the Application

1. Open your web browser and navigate to [https://main.d3a8zax3e8h5c7.amplifyapp.com/login](https://main.d3a8zax3e8h5c7.amplifyapp.com/login)

### Authentication

2. On the login page:
   - If you have an account, enter your email and password, then click "Sign In"
   - If you're a new user, click "Create account" and follow the registration process

### Performing Operations

3. Once logged in, you'll be directed to the New Operation page:
   - Select the operation type from the dropdown menu (e.g., addition, subtraction, multiplication, division, square root, random string)
   - Enter the required numbers for the operation
   - Click "Calculate" to perform the operation

### Viewing Operation History

4. To view your operation history:
   - Click on "Records" in the navigation menu
   - Here you can see a list of all your past operations

### Filtering and Sorting Records

5. On the Records page:
   - Use the search bar to find specific operations
   - Use the filter options to filter by operation type or date range
   - Click on column headers to sort the records

### Managing Account Balance

6. To add balance to your account:
   - Click on "Add Balance" in the navigation menu
   - Enter the amount you wish to add
   - Click "Add Balance" to confirm

### Logging Out

7. To log out of the application:
   - Click on the "Sign Out" button in the navigation menu

### Important Notes

- Each operation consumes a certain amount from your account balance
- Ensure you have sufficient balance before performing operations
- The random string operation generates a random string of specified length

## API Integration

This frontend application integrates with a backend API. The base URL for the API should be set in the `.env` file. API calls are made using Axios, and the endpoints are defined in the `src/api` directory.

## Deployment

This application is automatically deployed to AWS Amplify when changes are pushed to the main branch of the GitHub repository. Here's an overview of the deployment process:

1. **GitHub Integration**: 
   The project repository is connected to AWS Amplify. Any push to the main branch triggers a new build and deployment.

2. **Build Process**:
   When a new commit is pushed, AWS Amplify automatically:
   - Pulls the latest code from the GitHub repository
   - Installs dependencies (`npm install` or `yarn install`)
   - Builds the application (`npm run build` or `yarn build`)

3. **Environment Variables**:
   Sensitive information and configuration variables are stored as environment variables in the AWS Amplify Console, not in the codebase.

4. **Deployment**:
   After a successful build, Amplify deploys the built assets to a global CDN, ensuring fast access from anywhere in the world.

5. **Domain and HTTPS**:
   The application is served over HTTPS on a domain provided by AWS Amplify. A custom domain can be configured if needed.

6. **Continuous Deployment**:
   Every push to the main branch triggers this process, ensuring that the live version is always up-to-date with the latest code.

To deploy manually or set up the Amplify deployment for the first time:

1. Install the Amplify CLI: `npm install -g @aws-amplify/cli`
2. Configure the Amplify CLI: `amplify configure`
3. Initialize Amplify in your project: `amplify init`
4. Add hosting: `amplify add hosting`
5. Publish the app: `amplify publish`

For more detailed control over the build and deployment process, you can add an `amplify.yml` file to your project root with custom build settings.

To monitor deployments or configure settings:
1. Go to the [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Select your app
3. View deployment status, logs, and configure settings as needed
