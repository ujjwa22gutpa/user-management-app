import { useState, useEffect } from 'react';
import { fetchUsers } from '../api/userApi';
import SearchBar from '../components/SearchBar';
import AddUserForm from '../components/AddUserForm';
import UserList from '../components/UserList';
import UserDetails from '../components/UserDetails';
import Pagination from '../components/Pagination';

const USERS_PER_PAGE = 5;
const STORAGE_KEY = 'saved_users';

export default function Home() {
  // useState for managing different states
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
    setSelectedUser(null);
  };

  useEffect(() => {
    let isMounted = true;

    fetchUsers()
      .then((apiUsers) => {
        if (!isMounted) {
          return;
        }

        const stored = localStorage.getItem(STORAGE_KEY);
        const savedUsers = stored ? JSON.parse(stored) : [];
        setUsers([...apiUsers, ...savedUsers]);
      })
      .catch((err) => {
        if (!isMounted) {
          return;
        }

        setError(err.message || 'Something went wrong while loading users');
        console.error('Error loading users:', err);
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Search filter
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;
  const paginatedUsers = filteredUsers.slice(startIndex, endIndex);

  // Add new user
  const handleAddUser = (newUser) => {
    const userToAdd = {
      ...newUser,
      id: Date.now(),
    };

    const updatedUsers = [...users, userToAdd];
    setUsers(updatedUsers);

    // Save to localStorage for persistence
    localStorage.setItem(STORAGE_KEY, JSON.stringify([userToAdd]));
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>User Management App</h1>
        <p>View, search, and manage users</p>
      </header>

      <div className="home-content">
        {/* Left Side: Search, Form, User List */}
        <div className="left-panel">
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={handleSearchChange}
          />

          <AddUserForm onAddUser={handleAddUser} />

          {/* Show error if any */}
          {error && <div className="error-box"> {error}</div>}

          {/* Loading state */}
          {loading && <p className="loading">Loading users...</p>}

          {/* No users found */}
          {!loading && filteredUsers.length === 0 && (
            <p className="empty-state">No users found</p>
          )}

          {/* Display user list with pagination */}
          {!loading && filteredUsers.length > 0 && (
            <>
              <UserList
                users={paginatedUsers}
                onSelectUser={setSelectedUser}
                selectedUserId={selectedUser?.id}
              />

              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </>
          )}
        </div>

        {/* Right Side: User Details */}
        <div className="right-panel">
          <UserDetails user={selectedUser} />
        </div>
      </div>
    </div>
  );
}
