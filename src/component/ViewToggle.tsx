import React from 'react';

const ViewToggle = ({ view, setView }: any) => (
  <div className="flex gap-2 mb-4">
    <button onClick={() => setView('grid')} className={`px-3 py-1 border ${view === 'grid' && 'bg-black text-white'}`}>Grid</button>
    <button onClick={() => setView('list')} className={`px-3 py-1 border ${view === 'list' && 'bg-black text-white'}`}>List</button>
  </div>
);

export default ViewToggle;
