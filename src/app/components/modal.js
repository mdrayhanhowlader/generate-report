import React from 'react';
import PaginationExample from './generated_table';

export default function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75">
    <div className="fixed top-0 left-0 max-h-lg mt-10 w-screen right-0 mx-auto max-w-6xl bg-white shadow-md rounded-xl p-4">
    
      <PaginationExample onClose={onClose} />
      
    </div>
  </div>
  );
}
