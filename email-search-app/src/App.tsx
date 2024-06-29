import React from 'react';
import SearchForm from './components/SearchForm';

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Email Search App</h1>
                <SearchForm />
            </div>
        </div>
    );
};

export default App;
