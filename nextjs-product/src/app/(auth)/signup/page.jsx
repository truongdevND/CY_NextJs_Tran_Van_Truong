'use client';
import React, { useState } from 'react';
import DialogNotification from '../../components/DialogNotification';
import InputForm from '../../components/InputForm';
import Link from 'next/link';
import { signup } from '../service/auth';
import notificationStore from '@/stores/notificationStore';
import { useRouter } from "next/navigation";

function Signup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { setNotification } = notificationStore();
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(name, email, password);
      router.push('/login')

    } catch (error) {
      console.error('Signup failed:', error);
      await setNotification({
        text: error.response?.data?.message || 'An error occurred while logging in.',
        title: 'Error',
        imgUrl: 'https://media.istockphoto.com/id/1407160246/vector/danger-triangle-icon.jpg?s=612x612&w=0&k=20&c=BS5mwULONmoEG9qPnpAxjb6zhVzHYBNOYsc7S5vdzYI=',
        textBtn: 'Cancel'
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-400">
      <div className="opacity-[0.7] max-w-md w-full">
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-8"
        >
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold text-gray-800">Register</h1>
            <p className="text-gray-600 mt-2">Please register to your account</p>
          </div>

          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Username
            </label>
            <InputForm
              value={name}
              setValue={setName}
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>
            <InputForm
              value={email}
              setValue={setEmail}
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full px-4 py-2 text-gray-700 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                      clipRule="evenodd"
                    />
                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-200"
          >
            Sign up
          </button>

          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-800 font-medium">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <DialogNotification />
    </div>
  );
}

export default Signup;
