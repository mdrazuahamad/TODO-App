import React, { useState } from "react";
import "./App.css";

// Dummy user generator
const generateUsers = () => [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", group: "Admin" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", group: "Editor" },
  { id: 3, name: "Carol White", email: "carol@example.com", group: "Viewer" },
];

export default function App() {
  const [users, setUsers] = useState(generateUsers());
  const [search, setSearch] = useState("");
  const [group, setGroup] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newGroup, setNewGroup] = useState("Admin");
  const [errors, setErrors] = useState({});

  const [editingUser, setEditingUser] = useState(null); // New state for editing

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newUser = {
      id: editingUser ? editingUser.id : users.length + 1, // If editing, keep the same ID
      name,
      email,
      group: newGroup,
    };

    if (editingUser) {
      setUsers(users.map((user) => (user.id === editingUser.id ? newUser : user)));
    } else {
      setUsers([newUser, ...users]);
    }

    // Reset form and states
    setName("");
    setEmail("");
    setNewGroup("Admin");
    setEditingUser(null);
    setErrors({});
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleEditUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setNewGroup(user.group);
    setEditingUser(user); // Set the user being edited
  };

  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())) &&
      (group ? user.group === group : true)
  );

  return (
    <div className={"app-container"}>
      <div className='header'>
        <h1>User Management Dashboard</h1>
      </div>

      {/* Add or Edit User Form */}
      <div className='form-card'>
        <h2>{editingUser ? "Edit User" : "Add New User"}</h2>
        <form onSubmit={handleAddUser} className='form-container'>
          <div className='form-grid'>
            <div className='form-group'>
              <label>Full Name</label>
              <input
                type='text'
                placeholder='e.g. John Doe'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className='error-text'>{errors.name}</p>}
            </div>

            <div className='form-group'>
              <label>Email Address</label>
              <input
                type='email'
                placeholder='e.g. john@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className='error-text'>{errors.email}</p>}
            </div>

            <div className='form-group'>
              <label>User Group</label>
              <select value={newGroup} onChange={(e) => setNewGroup(e.target.value)}>
                <option>Admin</option>
                <option>Editor</option>
                <option>Viewer</option>
              </select>
            </div>
          </div>
          <button type='submit' className='cta-button'>
            {editingUser ? "Update User" : "Add User"}
          </button>
        </form>
      </div>

      {/* Filter Section */}
      <div className='filter-section'>
        <input
          type='text'
          placeholder='Search by name or email'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='search-input'
        />
        <select
          value={group}
          onChange={(e) => setGroup(e.target.value)}
          className='group-select'>
          <option value=''>All Groups</option>
          <option>Admin</option>
          <option>Editor</option>
          <option>Viewer</option>
        </select>
      </div>

      {/* User Cards Layout */}
      <div className='user-cards-container'>
        {filteredUsers.map((user) => (
          <div className='user-card' key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <span className={`badge badge-${user.group.toLowerCase()}`}>
              {user.group}
            </span>
            <div className='user-actions'>
              <button
                className='edit-button'
                onClick={() => handleEditUser(user)} // Call handleEditUser
              >
                Edit
              </button>
              <button className='delete-button' onClick={() => handleDeleteUser(user.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
