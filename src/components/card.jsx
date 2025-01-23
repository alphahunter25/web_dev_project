import React, { useState } from 'react';

const Card = ({ id, title, completed, onToggleComplete, onChangeTitle, onDelete }) => {
  const [complete, setComplete] = useState(completed);

  const toggleComplete = () => {
    setComplete(!complete);
    onToggleComplete(id);
  };

  const handleChange = () => {
    const newTitle = prompt('Enter new task title:', title);
    if (newTitle) {
      onChangeTitle(id, newTitle);
    }
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      onDelete(id);
    }
  };

  return (
    <div className="card" style={{ marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '8px', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <input
          type="checkbox"
          checked={complete}
          onChange={toggleComplete}
          style={{ accentColor: 'green', cursor: 'pointer' }}
        />
      </div>

      <div style={{ textAlign: 'center', margin: '1rem 0' }}>
        <h3 style={{ textDecoration: complete ? 'line-through' : 'none', color: complete ? 'red' : 'white' }}>
          {title}
        </h3>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={handleChange} style={{ flex: 1, marginRight: '0.5rem' }}>
          Change
        </button>
        <button onClick={handleDelete} style={{ flex: 1, marginLeft: '0.5rem', backgroundColor: '#ff6b6b', color: '#fff' }}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;