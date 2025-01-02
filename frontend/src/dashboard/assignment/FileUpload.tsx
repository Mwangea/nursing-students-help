import React, { useCallback } from 'react';
import { Upload, X } from 'lucide-react';

interface FileUploadProps {
  files: File[];
  onChange: (files: File[]) => void;
}

export function FileUpload({ files, onChange }: FileUploadProps) {
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      const droppedFiles = Array.from(e.dataTransfer.files);
      onChange([...files, ...droppedFiles]);
    },
    [files, onChange]
  );

  const handleRemoveFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index);
    onChange(newFiles);
  };

  return (
    <div className="space-y-4">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-yellow-400 transition-colors"
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-sm text-gray-600">
          Drag and drop your files here, or{' '}
          <label className="text-yellow-600 hover:text-yellow-700 cursor-pointer">
            browse
            <input
              type="file"
              className="hidden"
              multiple
              onChange={(e) => {
                if (e.target.files) {
                  onChange([...files, ...Array.from(e.target.files)]);
                }
              }}
            />
          </label>
        </p>
      </div>

      {files.length > 0 && (
        <ul className="space-y-2">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
            >
              <span className="text-sm text-gray-700">{file.name}</span>
              <button
                type="button"
                onClick={() => handleRemoveFile(index)}
                className="text-gray-400 hover:text-red-500"
                title="Remove file"
              >
                <X className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}