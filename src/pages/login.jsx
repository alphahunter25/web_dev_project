import React from 'react';
import { useNavigate} from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/notes');
  };

  return (
    <>
      <main className="container-fluid">
        <div className="grid">
          <div></div>
          <div>
            <form onSubmit={handleSubmit}>
              <fieldset>
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

              <input type="submit" value="Sign In" />
            </form>
          </div>
          <div></div>
        </div>
      </main>
    </>
  );
};

export default Login;