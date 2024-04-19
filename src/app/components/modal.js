import React from 'react';

export default function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75"> {/* Modal backdrop */}
      <div className="fixed top-0 left-0 right-0 mx-auto w-full max-w-sm bg-white shadow-md rounded-xl p-4">
        {children} {/* Modal content */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
