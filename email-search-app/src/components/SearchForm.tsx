import React, { useState } from 'react';
import axios from 'axios';

const SearchForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [controller, setController] = useState<AbortController | null>(null);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, '');
        value = value.match(/.{1,2}/g)?.join('-') || value;
        setNumber(value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (controller) {
            controller.abort();
        }

        const newController = new AbortController();
        setController(newController);

        setIsLoading(true);
        try {
            const fixedNumber = number.split('-').join('')
            const response = await axios.post('http://localhost:3001/api/search', { email, number: fixedNumber }, { signal: newController.signal });
            setResults(response.data);
        } catch (error) {
            if (axios.isCancel(error)) {
                console.log('Previous request canceled');
            } else {
                console.error(error);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="number" className="block text-sm font-medium text-gray-700">Number:</label>
                    <input
                        type="text"
                        id="number"
                        value={number}
                        onChange={handleNumberChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                    />
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                >
                    Submit
                </button>
            </form>
            {isLoading ? <p className="mt-4 text-center text-blue-500">Loading...</p> : null}
            {results.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-xl font-semibold">Results:</h2>
                    <ul className="list-disc list-inside">
                        {results.map((result: any, index: number) => (
                            <li key={index}>{result.email} - {result.number}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchForm;
