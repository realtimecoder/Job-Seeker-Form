import React from 'react'


    import { useState } from 'react';

    export default function Final() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleClear = () => {
    setSelectedFile(null);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 rounded-lg shadow-md w-96 mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Upload Your Resume</h2>
      
      {/* File input */}
      <input
        type="file"
        id="fileUpload"
        onChange={handleFileChange}
        className="hidden"
      />
      
      {/* Label as button to trigger file upload */}
      <label
        htmlFor="fileUpload"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700"
      >
        {selectedFile ? "Change File" : "Choose File"}
      </label>

      {/* Display selected file name or default message */}
      {selectedFile ? (
        <div className="mt-4 text-sm text-gray-700">
          <p>Selected file: <span className="font-semibold">{selectedFile.name}</span></p>
          <button
            onClick={handleClear}
            className="text-red-500 hover:text-red-700 mt-2 text-sm underline"
          >
            Clear file
          </button>
        </div>
      ) : (
        <p className="mt-4 text-sm text-gray-500">No file selected</p>
      )}
    </div>
  );
}

 
