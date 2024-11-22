import React from 'react';

function Page() {
  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: "url('https://anhdephd.vn/wp-content/uploads/2022/05/background-dep.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white bg-opacity-75 p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">Welcome to Our Platform</h1>
        <p className="text-lg text-gray-600 text-center mb-8">Let's get you started with just a few clicks!</p>
        <div className="flex flex-col items-center">
          <a
            href="/signup"
            className="bg-indigo-600 text-white hover:bg-indigo-700 py-3 px-6 rounded-full text-lg mb-4 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </a>
          <p className="text-gray-600 text-sm">Already have an account?</p>
          <a href="/login" className="text-indigo-600 hover:underline font-semibold text-lg">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;
