import React from 'react';
import {Link} from "react-router"

const About = () => {
  return (
    <div className="container-fluid" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#007bff', marginBottom: '1.5rem' }}>About DoDo</h1>

      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
        Welcome to <strong>DoDo</strong>, your go-to platform for staying organized, productive, and stress-free! At DoDo, we believe that managing your tasks should be simple, intuitive, and even a little fun. Whether you're tackling daily chores, planning a big project, or just trying to remember what’s for dinner, DoDo is here to help you get it done.
      </p>

      <h2 style={{ color: '#007bff', marginBottom: '1rem' }}>Why Choose DoDo?</h2>
      <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
        <li style={{ marginBottom: '0.5rem' }}><strong>Simple & Clean Design</strong>: No clutter, no distractions—just a sleek interface that helps you focus on what matters.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Smart Task Management</strong>: Create, edit, and organize tasks with ease. Mark tasks as complete, set priorities, and never miss a deadline.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Accessible Anywhere</strong>: Access your to-do list from any device, anytime. Your tasks are always in sync, whether you're at home, at work, or on the go.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Customizable</strong>: Personalize your experience with themes, categories, and more. Make DoDo truly yours!</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Collaborate & Share</strong>: Working on a team? Share tasks and lists with others to stay on the same page.</li>
        <li style={{ marginBottom: '0.5rem' }}><strong>Sign up</strong> <Link to="/signup">now!</Link></li>
      </ul>

    </div>
  );
};

export default About;