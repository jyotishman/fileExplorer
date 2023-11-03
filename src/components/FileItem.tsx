import React, { useState } from 'react';
import jsIcon from "../assets/js.png"
import docIcon from "../assets/doc.png"
import ContextMenu from './ContextMenu.tsx'; // Import your custom context menu component


const FileItem: React.FC<{
  file: { id: number; name: string };
  onItemClick: (fileId: number, action: string) => void;
}> = ({ file, onItemClick }) => {
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    // Get the mouse coordinates
    const x = e.clientX;
    const y = e.clientY;

    // Show the context menu at the mouse coordinates
    setContextMenuPosition({ x, y });
    setContextMenuVisible(true);
  };



  const iconEnum= {
    doc: docIcon,
    js: jsIcon
  }

  return (
    <div onContextMenu={handleContextMenu} className='file-item-wrapper'>
      <div onClick={() => onItemClick(file.id, 'select')} className='file-contents'>
        <img src={iconEnum[file?.meta]} alt="" />
        {file.name}
      </div>
      {contextMenuVisible && (
        <ContextMenu x={contextMenuPosition.x} y={contextMenuPosition.y} />
      )}
    </div>
  );
};

export default FileItem;
