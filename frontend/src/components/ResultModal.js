export const ResultModal = ({ isOpen, onClose, result }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 p-8 max-w-md w-full mx-4 animate-scale-in">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Pipeline Analysis</h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          <div className="bg-sage-50 rounded-lg p-4 border border-sage-200">
            <div className="flex items-center justify-between">
              <span className="text-sage-600 text-sm font-medium">Nodes</span>
              <span className="text-3xl font-light text-sage-800">{result?.num_nodes || 0}</span>
            </div>
          </div>

          <div className="bg-terracotta-50 rounded-lg p-4 border border-terracotta-200">
            <div className="flex items-center justify-between">
              <span className="text-terracotta-600 text-sm font-medium">Edges</span>
              <span className="text-3xl font-light text-terracotta-800">{result?.num_edges || 0}</span>
            </div>
          </div>

          <div className={`rounded-lg p-4 border ${result?.is_dag ? 'bg-sage-50 border-sage-200' : 'bg-terracotta-50 border-terracotta-200'}`}>
            <div className="flex items-center justify-between">
              <span className={`text-sm font-medium ${result?.is_dag ? 'text-sage-600' : 'text-terracotta-600'}`}>Valid DAG</span>
              <div className="flex items-center gap-2">
                {result?.is_dag ? (
                  <>
                    <span className="text-3xl font-light text-sage-800">Yes</span>
                    <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    <span className="text-3xl font-light text-terracotta-800">No</span>
                    <svg className="w-5 h-5 text-terracotta-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </>
                )}
              </div>
            </div>
          </div>

          {!result?.is_dag && (
            <div className="bg-terracotta-50 border border-terracotta-200 rounded-lg p-3">
              <p className="text-terracotta-700 text-sm">
                Pipeline contains cycles and is not a directed acyclic graph
              </p>
            </div>
          )}
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-slate-800 text-white font-medium py-3 rounded-lg hover:bg-slate-900 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}