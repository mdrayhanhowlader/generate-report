"use client"
import { useState } from 'react';
import Modal from './components/modal';
// import Modal from './Modal'; // Import Modal component

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
  <div>
    <div>
      <h1 className='text-2xl text-orange-500 font-sans font-bold p-4'>REPORT GENERATOR</h1>
    </div>
      <div className="flex h-screen justify-center items-center">
      <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={openModal}>
        Generate Report
      </button>
      {isOpen && <Modal onClose={closeModal}></Modal>}
    </div>
  </div>
  );
}
