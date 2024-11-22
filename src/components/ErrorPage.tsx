export interface ErrorValue {
    error: string | null
}

const ErrorPage = ({error}: ErrorValue) => {
  return (
    <div className="flex flex-col gap-2 w-full z-50">
        <div
          className="error-alert cursor-default flex items-center justify-between w-full rounded-lg bg-[#232531] p-4"
        >
          <div className="flex gap-2">
            <div className="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                ></path>
              </svg>
            </div>
            <div>
              <p className="text-white">Error</p>
              <p className="text-gray-500">{error}</p>
            </div>
          </div>
          <button
            className="text-gray-600 hover:bg-white/10 p-1 rounded-md transition-colors ease-linear"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
  );
};

export default ErrorPage;