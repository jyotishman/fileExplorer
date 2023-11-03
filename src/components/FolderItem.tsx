import React, { useState } from 'react';
import FileItem from './FileItem.tsx';
import folderIcon from "../assets/folder.png"
const FolderItem: React.FC<{
  folder: { id: number; name: string; children: any[] };
  onItemClick: (fileId: number, action: string) => void;
}> = ({ folder, onItemClick }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [isSelected, setSelected] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!isExpanded);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(`Right-clicked on folder: ${folder.name}`);
    
  };

  return (
    <div onContextMenu={handleContextMenu} className={isExpanded ? "active folder-item-wrapper ": "folder-item-wrapper "}>
      <div onClick={() => {
          toggleExpansion();
          setSelected(true);
        }} className='heading'>
        <img src={folderIcon} alt="" />
        <span> {isExpanded ? '-' : '+'} {folder.name}</span>
      </div>
      {isExpanded && (
        <div className='content'>
          {folder.children.map((child) => (
            child.isFolder ? (
              <FolderItem
                key={child.id}
                folder={child}
                onItemClick={onItemClick}
              />
            ) : (
              <FileItem
                key={child.id}
                file={child}
                onItemClick={onItemClick}
              />
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default FolderItem;
