import React, { useEffect, useState } from "react";

import { MdCancel } from "react-icons/md";

const Chatbot = ({ isOpen, onClose }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "grabbing"; // Change cursor style to grabbing
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "auto"; // Reset cursor style to default
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "auto"; // Reset cursor style on component unmount
    };
  }, [isDragging, dragStart]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  return (
    <>
      <div
        className="modal"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        onMouseDown={handleMouseDown}
      >
        <div
          style={{ resize: "horizontal", overflow: "hidden" }}
          className={` absolute right-0 z-0 min-w-80 max-w-[600px] sm:center md:ml-auto m-4 bg-white rounded-lg shadow-lg transition-transform transform ${
            isOpen ? "translate-y-0" : "hidden"
          }`}
        >
          {/* Chatbot header */}
          <div className=" flex justify-between bg-gray-200 px-4 py-2 rounded-t-lg">
            <h3 className="text-lg items-center font-semibold">Chatbot</h3>
            <MdCancel className=" text-2xl cursor-pointer" onClick={onClose} />
          </div>

          {/* Chat messages */}
          <div className="p-4 max-h-80 h-60  overflow-y-auto">
            {/* Chat message components go here */}
            <div className="left-0 flex items-start w-[100%] mb-2 max-w-60 ">
              <div className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">
                Hello! How can I help you?
              </div>
            </div>
            <div className="flex  ml-auto mb-2 max-w-60">
              <div className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm">
                I want to make ATS friendly resume
              </div>
            </div>
          </div>
          {/* Chat input */}
          <div className="bg-gray-100 px-4 py-2 rounded-b-lg">
            <input
              type="text"
              placeholder="Type your message..."
              className="w-full border-gray-300 rounded-md focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:border-blue-500 p-2 outline-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
