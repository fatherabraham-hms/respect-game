export function Alert({ message, variant, callback }: { message: string, variant: 'success' | 'error', callback: () => void }) {
  return (
    variant === 'success' &&
  <div className="space-y-5">
    <div className="bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30" role="alert">
      <div className="flex">
        <div className="flex-shrink-0">
              <span
                className="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
               viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
               strokeLinejoin="round">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
            <path d="m9 12 2 2 4-4"></path>
          </svg>
        </span>
        </div>
        <div className="ms-3">
          <h3 className="text-gray-800 font-semibold dark:text-white">
            Consensus Reached!
          </h3>
          <p className="text-sm text-gray-700 dark:text-neutral-400">
            {message}
          </p>
        <div className="mt-4">
          <div className="flex space-x-3">
            <button type="button"
                    className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400"
                    onClick={callback}>
              Start Session for Next Level
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
}
