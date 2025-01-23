import React from 'react';
import { useNavigate , Link } from 'react-router';
import Nav from '../components/navbar';

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/notes'); 
  };

  return (
    <>
      <Nav />
      <main className="container-fluid">
        <div className="grid">
          <div></div>
          <div>
            <form onSubmit={handleSubmit}>
              <fieldset>
                <label>
                  Name
                  <input
                    name="first_name"
                    placeholder="First name"
                    autoComplete="given-name"
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                </label>
                <label>
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                </label>
              </fieldset>

              <input type="submit" value="Sign Up" />
              Already have an account? <Link to="/login">Login</Link>
            </form>
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
};

export default Signup;