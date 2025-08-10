import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">React with Tailwind CSS</h1>
          <p className="text-lg text-gray-600">A clean, minimal example</p>
        </div>
        
        <div className="flex flex-wrap justify-center">
          <Card 
            title="Simple Card" 
            description="A clean, minimal card component using Tailwind CSS." 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
