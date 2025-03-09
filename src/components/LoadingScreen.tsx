import React from 'react';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-90 z-50 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-blue-900 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-lg text-blue-900">Loading...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
