import { useState } from "react";
import { useNavigate } from "react-router-dom";


function SignUp() {
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Store user data in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { name, email, password,role };

    // Check if user already exists
    const userExists = users.find(user => user.email === email);
    if (userExists) {
      alert('User already exists with this email.');
      return;
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Redirect to login page after successful signup
    navigate('/');
  };
    return (
        <div className="h-[92vh] flex items-center justify-center bg-gray-700">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
                required
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
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
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
              Role
            </label>
            <select
            required
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full  text-gray-700 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option className=" text-gray-700" value="" disabled>Select your role</option>
              <option className=" text-gray-700" value="Frontend Developer">Frontend Developer</option>
              <option className=" text-gray-700" value="Backend Developer">Backend Developer</option>
              <option  className=" text-gray-700"value="DevOps Engineer">DevOps Engineer</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account? <a href="/" className="text-blue-500">Login</a>
            </p>
          </div>
        </div>
      );
}

export default SignUp
