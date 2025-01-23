import React, { useEffect, useState } from 'react';
import Card from '../components/card';
import Nav from '../components/navbar'

const NotesPage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
          throw new Error('Failed to fetch todos');
        }
        const data = await response.json();
        const user = 1;
        const parsed = data.filter((todo) => todo.userId === user);
        setTodos(parsed);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleChangeTitle = (id, newTitle) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask = {
      id: todos.length + 1,
      userId: 1,
      title: newTaskTitle,
      completed: false,
    };

    setTodos((prevTodos) => [newTask, ...prevTodos]);
    setNewTaskTitle('');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <Nav/>
    <div className="container-fluid">
        
      <h1>Notes</h1>


      <form onSubmit={handleAddTask} style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            placeholder="Enter new task title"
    
          />
          <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
            Add Task
          </button>
        </div>
      </form>


      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        {todos.map((todo) => (
          <Card
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggleComplete={handleToggleComplete}
            onChangeTitle={handleChangeTitle}
            onDelete={handleDeleteTask}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default NotesPage;