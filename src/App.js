import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">React with Tailwind CSS</h1>
          <p className="text-lg text-gray-600">A modern UI toolkit for React</p>
        </div>
        
        <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
          <div className="flex flex-col items-center sm:flex-row">
            <div className="sm:w-1/3 flex justify-center">
              <img src={logo} className="h-32 w-auto animate-spin" alt="logo" />
            </div>
            <div className="sm:w-2/3 mt-4 sm:mt-0">
              <h2 className="text-2xl font-semibold text-gray-800">Getting Started</h2>
              <p className="mt-2 text-gray-600">
                Edit <code className="bg-gray-100 p-1 rounded">src/App.js</code> and save to reload.
                This project has been set up with React and Tailwind CSS.
              </p>
              <div className="mt-4">
                <a
                  className="inline-block px-4 py-2 text-white font-semibold bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-200"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
                <a
                  className="inline-block ml-4 px-4 py-2 text-white font-semibold bg-green-500 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 transition-colors duration-200"
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tailwind Docs
                </a>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Example Components</h2>
        <div className="flex flex-wrap justify-center">
          <Card 
            title="Responsive Design" 
            description="Build fully responsive interfaces without leaving your HTML." 
            imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
          />
          <Card 
            title="Utility-First" 
            description="Create complex designs by composing simple utility classes." 
            imageUrl="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
          />
          <Card 
            title="Modern Development" 
            description="Rapidly build modern websites without ever leaving your HTML." 
            imageUrl="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
          />
        </div>
      </div>
    </div>
  );
}

export default App;
