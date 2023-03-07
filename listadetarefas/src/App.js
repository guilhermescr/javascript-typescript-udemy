import React from 'react';
import './main.css';

export default function App() {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-between">
      <h1 className="bg-gray-900 text-5xl text-gray-300 text-center p-4">
        Hello, world!
      </h1>

      <img
        className="max-w-xs w-full mx-auto my-auto"
        src="https://cdn.britannica.com/91/181391-050-1DA18304/cat-toes-paw-number-paws-tiger-tabby.jpg"
        alt="Serious Cat"
      />
    </div>
  );
}
