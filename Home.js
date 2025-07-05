import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects/all')
      .then(res => setProjects(res.data));
  }, []);

  return (
    <div>
      <h1>Explore Projects</h1>
      {projects.map(p => (
        <div key={p._id}>
          <h2>{p.title}</h2>
          <img src={p.image} width="200" />
          <p>{p.description}</p>
          <p>₹{p.raisedAmount} raised of ₹{p.goalAmount}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
