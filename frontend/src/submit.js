import { useState } from 'react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import axios from 'axios';
import { ResultModal } from './components/ResultModal';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await axios.post('process.env.REACT_APP_API_URL', {
        nodes: nodes,
        edges: edges
      });

      setResult(response.data);
      setIsModalOpen(true);
    } catch (err) {
      setError(err.message);
      alert(`Error: ${err.message}\n\nMake sure the backend is running on process.env.REACT_APP_API_URL`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center py-6 bg-white border-t border-slate-200">
        <button 
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-slate-800 text-white font-medium px-8 py-3 rounded-lg hover:bg-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </span>
          ) : (
            'Submit Pipeline'
          )}
        </button>
      </div>

      <ResultModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        result={result}
      />
    </>
  );
}