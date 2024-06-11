# TANN TRIM Website

This is the frontend Part: https://github.com/sneha2002-alt/Frontend.git

For backend : https://github.com/sneha2002-alt/Backend.git



- Deployed Frontend Website on Netlify:
- Deployed Backend Website on Render:

## Overview

This is a Fully Responsive Dynamic Page of TANN TRIM Website built with the (React.js ,Express.js, Node.js,REST API, Axios).This Website has two part frontend and backend.

- **Frontend**: Frontend (home page) build using react js. Try to implement and match the design which is given in figma. Few library I used are React-Icons for icons and Axios for fetching api. Home Page contains three major Component:

  - Header/Navbar Component: Contains Tann Trim Logo on left side and few react icons on right side which show (the search bar, user, bookmark, cart or bag).
  - Category Component: It contains category for shopping different types of bags.
  - Product Component: It shows the products for which is fetch from backend created with REST API.
  - Added fully responsiveness using CSS so website if responsive if different devices, Also add few CSS scaling animation in navbar and category scetion.

- **Backend**: Backend build using Node js. Used express.js for building the REST API which is used to fetch the product data in frontend for product section/component, also used dotenv for getting environment variables.

## Technologies Used

- **Frontend**:

  - [React.js]: A JavaScript library for building user interfaces.
  - [Axios]: A promise-based HTTP client for making requests to the server.
  - [React-Icons]: React Icons a library of popular icons that can be easily implemented in your React projects.

- **Backend**:
  - [Express.js]: A minimal and flexible Node.js web application framework.
  - [Nodemon]: Nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.
  - [dotenv]: The dotenv package is a great way to keep passwords, API keys, and other sensitive data out of your code. It allows you to create environment variables in a . env file instead of putting them in your code..

## Installation

To run this project, you'll need to have Node.js and. You can download Node.js from the official website.

To install the project dependencies, follow these steps:

Clone the repository to your local machine:

Navigate to the project directory:

```bash
cd tann trim frontend
```

Install the frontend dependencies:

```bash
npm install
```

Start the frontend server:

```bash
npm start
```

Navigate to the backend directory:

```bash
cd backend
```

Install the backend dependencies:

```bash
npm install
```

Create a .env file in the backend directory, and set the following environment variables:

makefile

```bash
PORT=3000
```

Start the backend server:

```bash
npm start
```

Open your web browser and navigate to http://localhost:3000 to view the application.

To view backend navigate to http://localhost:8000 to view json data for products.

That's it! You should now be able to run the application locally.

## Deployment

### Backend:-

Create a GitHub repository for your project.

Push your code to the GitHub repository.

Sign up for a Render account.

Create a new web service on Render, and select build and deploy from github repository.

Fill in the required details such as the name of the service, the region,
the startup command

```bash
npm start
```

the build command

```bash
npm install
```

Under the Environment section, add the necessary environment variables such as the

```bash
port number
```

Click on the "Create Web Service" button to create your backend server.

Once your backend server is live, update the frontend code with the new backend URL (the one provided by Render).

### Frontend:-

Create a GitHub repository for your project.

Push your code to the GitHub repository.

Sign up for a Netlify account.

Click on Add New Site on Render, select import existing github repository and deploy with github and select github respository.

create a domain based on your choice.

Click on the "Deploy" button to create your frontend server.

Your project should now be live and accessible via the new domain name.
