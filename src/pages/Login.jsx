import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [role, setRole] = useState("Teacher");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showForgot, setShowForgot] = useState(false);

  const handleLogin = () => {
    setError("");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (role === "Admin") {
        setError("Invalid credentials. Please try again.");
        return;
      }

      login({
        name: role,
        role: role.toLowerCase(),
      });

      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-indigo-900 via-purple-900 to-pink-900">
      
      {/* Login Card */}
      <div
        className={`bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl w-full max-w-sm transition ${
          error ? "animate-shake" : ""
        }`}
      >
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-1">
          Smart Attendance
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Secure School Login
        </p>

        {/* Role Selection */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mb-4 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option>Teacher</option>
          <option>Admin</option>
        </select>

        {/* Inputs */}
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-sm mt-3 text-center">
            {error}
          </p>
        )}

        {/* Login Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-full font-medium transition shadow-lg flex items-center justify-center"
        >
          {loading ? (
            <span className="loader"></span>
          ) : (
            "Login"
          )}
        </button>

        {/* Forgot Password */}
        <p
          onClick={() => setShowForgot(true)}
          className="text-center text-sm text-indigo-600 mt-4 cursor-pointer hover:underline"
        >
          Forgot password?
        </p>
      </div>

      {showForgot && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] max-w-sm shadow-xl">
            <h3 className="text-lg font-semibold mb-2">
              Reset Password
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Enter your registered email. Backend will handle this later.
            </p>

            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border border-gray-300 rounded-xl mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowForgot(false)}
                className="px-4 py-2 rounded-full text-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowForgot(false)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-full"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
