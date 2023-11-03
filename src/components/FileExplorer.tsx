import React, { useState } from 'react';
import FileItem from './FileItem.tsx';
import FolderItem from './FolderItem.tsx';

const initialData = [
  {
    type: "folder",
    name: 'Parent',
    isFolder: true,
    children: [
      { name: 'File 1.1', type: "file", meta: "js" },
      { name: 'File 1.2', type: "file", meta: "doc" },
    ],
  },
  { id: 4, name: 'File 2', type: "file", meta: "doc" },
];

const FileExplorer: React.FC = () => {
  const [data, setData] = useState(initialData);

  const handleItemClick = (fileId: number, action: string) => {
    // Handle copy, delete, rename actions here
    console.log(`File ID: ${fileId}, Action: ${action}`);
  };

  return (
    <div className='main-wrapper'>
      {data.map((item) => (
        item.isFolder ? (
          <FolderItem
            key={item.id}
            folder={item}
            onItemClick={handleItemClick}
          />
        ) : (
          <FileItem
            key={item.id}
            file={item}
            onItemClick={handleItemClick}
          />
        )
      ))}
    </div>
  );
};

export default FileExplorer;
