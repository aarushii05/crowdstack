import React, { useState } from 'react';
import axios from 'axios';

function CreateProject() {
  const [form, setForm] = useState({ title: '', description: '', goalAmount: '', image: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5000/api/projects/create', form, {
      headers: { Authorization: `Bearer ${token}` }
    });
    alert('Project Created!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
      <input placeholder="Image URL" onChange={e => setForm({ ...form, image: e.target.value })} />
      <textarea placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
      <input placeholder="Goal Amount" type="number" onChange={e => setForm({ ...form, goalAmount: e.target.value })} />
      <button type="submit">Create</button>
    </form>
  );
}

export default CreateProject;
