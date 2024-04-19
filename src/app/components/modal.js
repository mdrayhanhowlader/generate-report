import React from 'react';
import GeneratedTable from './generated_table';

const Modal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-50 bg-opacity-50">
    <div className="fixed top-4 left-0 w-screen right-0 mx-auto max-w-6xl">
      <div className="h-dvh overflow-y-auto scrollbar-thick scrollbar-thumb-white scroll-p-0 scrollbar-track-white">
        <GeneratedTable onClose={onClose} />
      </div>
    </div>
  </div>
);

export default Modal;
