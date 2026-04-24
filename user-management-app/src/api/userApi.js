/**
 * User API - Fetch users from JSONPlaceholder
 * This module handles all API calls related to users
 */

const API_URL = 'https://jsonplaceholder.typicode.com/users';

/**
 * Fetch all users from the API
 * @returns {Promise<Array>} Array of user objects
 * @throws {Error} If the fetch fails or response is not ok
 */
export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    
    // Check if response is ok (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw new Error(`Failed to fetch users: ${error.message}`, { cause: error });
  }
};
