import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import LoadingScreen from '../components/LoadingScreen';

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="max-w-md mx-auto mt-16 px-4">
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Log in to my account
          </h1>
          <p className="text-sm text-gray-600 mb-6">
            Fields marked with * are obligatory.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address *
              </label>
              <p className="text-xs text-gray-500 mb-1">
                The expected email format is: prenom@mail.fr
              </p>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
            >
              Log in
            </button>

            <div className="mt-4 text-center">
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            New user?
          </h2>
          <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors">
            Create an account
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
