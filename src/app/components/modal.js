import React, { useRef, useEffect } from 'react';
import GeneratedTable from './generated_table';

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-50 bg-opacity-50">
      <div className="fixed top-4 left-0 w-screen right-0 mx-auto max-w-6xl">
        <div ref={modalRef} className="h-dvh overflow-y-auto scrollbar-thick scrollbar-thumb-white scroll-p-0 scrollbar-track-white">
          <GeneratedTable onClose={onClose} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
