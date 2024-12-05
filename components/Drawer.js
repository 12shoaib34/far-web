"use client";
import React, { useEffect } from "react";

const Drawer = (props) => {
  const { open, onClose, width = 540 } = props;

  useEffect(() => {
    if (open) {
      // Disable scrolling on the body
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling on the body
      document.body.style.overflow = "";
    }

    // Cleanup on unmount or when the drawer is closed
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) {
    return null; // Don't render the drawer if it's not open
  }

  return (
    <div
      className="fixed w-full h-[100svh] right-0 top-0 z-50 bg-black bg-opacity-20 overflow-hidden"
      onClick={onClose} // Close the drawer when clicking outside
    >
      <div
        style={{
          maxWidth: `${width}px`,
        }}
        className="fixed w-full h-[100svh] right-0 top-0 z-50 bg-white overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the drawer from closing it
      >
        {/* Drawer content goes here */}
      </div>
    </div>
  );
};

export default Drawer;
