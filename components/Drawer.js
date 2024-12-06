"use client";
import React, { useEffect, useRef, useState } from "react";

const Drawer = (props) => {
  const { open, onClose, width = 540, title, children } = props;

  const [isOpen, setIsOpen] = useState(open);
  const drawerRef = useRef();
  const overlayRef = useRef();

  useEffect(() => {
    if (open) {
      setIsOpen(true);
    } else {
      if (!drawerRef.current || !overlayRef.current) return;
      drawerRef.current.classList.add("animate-slide-out");
      overlayRef.current.classList.add("animate-fade-out");

      const timer = setTimeout(() => {
        setIsOpen(false);
        drawerRef.current.classList.remove("animate-slide-out");
        overlayRef.current.classList.remove("animate-fade-out");
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    isOpen && (
      <div className="fixed w-full h-full left-0 top-0 z-50">
        <div onClick={onClose} ref={overlayRef} className="bg-black bg-opacity-80 absolute w-full h-full animate-fade-in"></div>
        <div
          ref={drawerRef}
          style={{
            maxWidth: `${width}px`,
          }}
          className="fixed w-full h-[100svh] right-0 top-0 z-50 bg-white overflow-hidden duration-300 animate-slide-in flex flex-col"
        >
          <div className="p-4 border-b">
            <h1 className="text-lg font-medium">{title}</h1>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Drawer;
