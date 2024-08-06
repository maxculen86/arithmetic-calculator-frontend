# Arithmetic Calculator Frontend

This project is a frontend application for an Arithmetic Calculator, built with React and TypeScript.

## Project Description

The Arithmetic Calculator is a web application that allows users to perform various arithmetic operations, view their operation history, and manage their account balance. It integrates with a backend API to process operations and store user data.

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
Copy
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
REACT_APP_API_BASE_URL=your_api_base_url
5. Start the development server:
```bash
npm start
```

The application should now be running on `http://localhost:3000`.

## Usage

[Add instructions on how to use the application, including any necessary login credentials for testing]

## API Integration

This frontend application integrates with a backend API. The base URL for the API should be set in the `.env` file. API calls are made using Axios, and the endpoints are defined in the `src/api` directory.

## Testing

[Add instructions for running tests, if applicable]

## Deployment

[Add instructions for deploying the application]

## Contributing

[Add guidelines for contributing to the project, if applicable]

## License

[Add license information]

## Contact

[Add your contact information or link to your GitHub profile]