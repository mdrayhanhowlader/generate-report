import React from 'react';
import GeneratedTable from './generated_table';

const Modal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-50 bg-opacity-50">
    <div className="fixed top-0 left-0 w-screen right-0 mx-auto max-w-6xl bg-white shadow-md rounded-xl p-4">
      <div className="h-dvh overflow-y-auto scrollbar-thick scrollbar-thumb-gray-300 scroll-p-0 scrollbar-track-gray-100">
        <GeneratedTable onClose={onClose} />
      </div>
    </div>
  </div>
);

export default Modal;
