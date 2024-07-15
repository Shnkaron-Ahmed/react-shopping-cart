import React, { useState, useEffect } from 'react';
import { getData, postData, deleteData } from '../services/api';


const Form = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ id: null, name: '', email: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getData('/users'); // Replace with your actual endpoint
      setUsers(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.id) {
        await postData(`/users/${formData.id}`, formData); // Update user if ID exists
        const updatedUsers = users.map(user => user.id === formData.id ? formData : user);
        setUsers(updatedUsers);
      } else {
        const newUser = await postData('/users', formData); // Create new user
        setUsers([...users, newUser]);
      }
      setFormData({ id: null, name: '', email: '' }); // Clear form data
    } catch (error) {
      console.error('Error adding/updating user:', error);
    }
  };

  const handleEdit = (user) => {
    setFormData({ id: user.id, name: user.name, email: user.email });
  };

  const handleDelete = async (id) => {
    try {
      await deleteData(`/users/${id}`); // Replace with your actual endpoint
      setUsers(users.filter(user => user.id !== id));
      setFormData({ id: null, name: '', email: '' }); // Clear form data after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="user-form">
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{formData.id ? 'Update User' : 'Add User'}</button>
      </form>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id}>
            {user.name} ({user.email})
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
