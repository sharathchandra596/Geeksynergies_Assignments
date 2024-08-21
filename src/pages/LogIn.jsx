import { useState } from "react";
import { useNavigate } from "react-router-dom";


function LogIn() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
    
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
        // Find the user
        const user = users.find(user => user.email === email && user.password === password);
    
        if (user) {
          // Store logged-in user in localStorage
          localStorage.setItem('loggedInUser', JSON.stringify(user));
          alert('Login successful!');
          navigate('/home');  // Redirect to homepage or dashboard
        } else {
          alert('Invalid email or password.');
        }
      };


    return (
        <div className="h-[92vh] flex items-center justify-center bg-gray-700">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
            <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
            required
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
            required
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              Dont have an account? <a href="/signup" className="text-blue-500">Sign up</a>
            </p>
          </div>
        </div>
      );
}

export default LogIn
