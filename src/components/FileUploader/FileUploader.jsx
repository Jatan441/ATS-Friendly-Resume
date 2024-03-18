import React, { useState } from "react";
import { FaFileAlt } from "react-icons/fa";

const FileUploader = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (
      file &&
      (file.type === "application/pdf" || file.type === "application/msword")
    ) {
      setSelectedFile(file);
    } else {
      alert("Please upload a PDF or DOC file.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/pdf" || file.type === "application/msword")
    ) {
      setSelectedFile(file);
    } else {
      alert("Please upload a PDF or DOC file.");
    }
  };

  return (
    <div
      className={`file-uploader ${isDragging ? "dragging" : ""}`}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="file-input"
        accept=".pdf,.doc"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <div className=" border-2 border-dashed border-blue-300 bg-blue-100 p-10 rounded-lg flex flex-col items-center justify-center gap-3 h-96 overflow-hidden w-full file-label  mt-10 mb-10">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center  bg-blue-300"
          //   style={{ backgroundColor: "#2aacea" }}
        >
          <FaFileAlt className="text-3xl text-blue-500" />
        </div>

        <label
          className="min-w-100 text-blue-500 text-center border border-blue-400 rounded-lg p-2 border-4 cursor-pointer"
          htmlFor="file-input"
        >
          Upload your resume
        </label>
      </div>
      {selectedFile && (
        <div className="file-preview">
          <p>Selected File:</p>
          <p>{selectedFile.name}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
