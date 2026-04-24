# User Management App

I built this project as a simple user management dashboard in React using Vite and functional components. The main idea was to create something clean, easy to understand, and realistic enough to explain in an interview.

The app gets a list of users from the JSONPlaceholder API, lets me search through them, view full details, and add new users without needing a backend. I also saved the added users in localStorage so the data stays after a refresh.

## What I Built

This project includes:

- fetching users from a public API
- searching users by name
- showing user details when a card is clicked
- adding a new user through a form
- pagination with 5 users per page
- highlighting the selected user
- saving new users in localStorage
- responsive styling for desktop and mobile

## Tech Stack

I used:

- React
- Vite
- JavaScript functional components
- CSS
- Fetch API

## Project Structure

I kept the folder structure simple and separated the logic into reusable parts:

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

## How the App Works

### 1. Fetching users
The API call is handled in `src/api/userApi.js`. When the page loads, the app fetches the users and stores them in the main state.

### 2. Managing state
`src/pages/Home.jsx` is the main container for the app. It manages:

- the full users list
- loading state
- error state
- search text
- selected user
- current page

This is the file where most of the app logic lives.

### 3. Searching users
The search input filters users by name. When I type in the search bar, the list updates immediately and pagination resets back to the first page.

### 4. Adding a user
The add user form collects the name, email, and phone number. After submission, the new user is added to the UI and stored in localStorage so it is still there after a refresh.

### 5. Viewing details
When I click a user card, that user becomes the selected user and the details panel shows the full profile information on the right side.

### 6. Pagination
I limited the list to 5 users per page to keep the interface clean. The pagination component handles moving between pages.

## Component Roles

- `SearchBar.jsx` handles searching
- `AddUserForm.jsx` handles new user input
- `UserList.jsx` renders the visible users
- `UserCard.jsx` shows each user in a compact card
- `UserDetails.jsx` shows full details for the selected user
- `Pagination.jsx` moves through the list page by page

## Run Locally

```bash
npm install
npm run dev
```

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates the production build
- `npm run lint` checks the code with ESLint
- `npm run preview` previews the production build locally

## Deployment

I already structured the project so it is ready for Vercel deployment.

Before deploying, I make sure:

- the build passes
- lint is clean
- the GitHub repo is updated

## Note

This project does not use a backend for adding users. I kept that part in local state and localStorage so the app stays simple, practical, and focused on the React side of the assignment.
