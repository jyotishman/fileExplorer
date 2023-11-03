import React from 'react';

const ContextMenu: React.FC<{ x: number; y: number }> = ({ x, y }) => {
  const handleMenuItemClick = (action: string) => {
    // Handle the selected action (e.g., copy, delete, rename)
    console.log(`Selected action: ${action}`);
    // Close the context menu
    closeContextMenu();
  };

  const closeContextMenu = () => {
    // Implement a function to close the context menu (e.g., by setting a state)
  };

  return (
    <div
      className='popup-menu'
      style={{
        position: 'absolute',
        left: x,
        top: y,
        border: '1px solid #ccc',
        backgroundColor: 'white',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        zIndex: 100,
      }}
    >
      <p onClick={() => handleMenuItemClick('copy')}>Copy</p>
      <p onClick={() => handleMenuItemClick('delete')}>Delete</p>
      <p onClick={() => handleMenuItemClick('rename')}>Rename</p>
    </div>
  );
};

export default ContextMenu;
