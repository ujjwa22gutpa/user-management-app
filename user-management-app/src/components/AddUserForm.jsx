import { useState } from 'react';

export default function AddUserForm({ onAddUser }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert('Please fill all fields');
      return;
    }

    // Create new user
    const newUser = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      username: formData.name.toLowerCase(),
    };

    // Call parent function
    onAddUser(newUser);

    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-user-form">
      <h3>Add New User</h3>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleChange}
      />

      <button type="submit">Add User</button>
    </form>
  );
}
