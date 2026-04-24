# User Management App

I built this project as a React user management dashboard using Vite and functional components. The app fetches user data from the JSONPlaceholder API, lets me search users by name, view detailed user information, and add new users locally without a backend.

I kept the structure clean and reusable so it is easy to maintain and also easy to explain in an interview.

## Features

- Fetches users from the JSONPlaceholder API
- Displays users in a clean card-based list
- Search by name
- View full user details on click
- Add new users using a form
- Pagination with 5 users per page
- Highlights the selected user
- Saves added users in localStorage
- Responsive layout for mobile and desktop

## Tech Stack

- React
- Vite
- JavaScript (functional components)
- CSS
- Fetch API

## Folder Structure

```bash
src/
├── api/
│   └── userApi.js
├── components/
│   ├── SearchBar.jsx
│   ├── UserList.jsx
│   ├── UserCard.jsx
│   ├── UserDetails.jsx
│   ├── AddUserForm.jsx
│   └── Pagination.jsx
├── pages/
│   └── Home.jsx
├── styles/
│   └── app.css
├── App.jsx
└── main.jsx
```

## How It Works

### 1. User data
The app starts by fetching users from the API in `src/api/userApi.js`.

### 2. Main page logic
`src/pages/Home.jsx` manages the main state for:

- users
- loading
- error
- search term
- selected user
- current page

### 3. Adding users
When I add a user from the form, the new user is saved in local state and persisted in localStorage so it stays available after refresh.

### 4. User details
Clicking a user card shows the complete user profile on the right side of the layout.

## Run Locally

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` - starts the development server
- `npm run build` - builds the app for production
- `npm run lint` - checks the code with ESLint
- `npm run preview` - previews the production build locally

## Deployment

This project is ready to deploy on Vercel.

Before deploying, make sure:

- the build passes successfully
- the app runs without lint errors
- the GitHub repository is pushed and up to date

## Notes

This project does not use a backend for adding users. New users are managed in local state and stored in localStorage, which keeps the app simple and practical for a front-end assignment.
