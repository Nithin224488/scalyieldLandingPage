"use client";

import { useEffect } from "react";
import { ContactForm } from "./ContactForm";

interface PopupProps {
  open: boolean;
  onClose: () => void;
  //children: React.ReactNode;
}

export default function LeadFormPopup({ open, onClose }: PopupProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex h-[90vh] w-full max-w-4xl flex-col overflow-auto rounded-2xl bg-white shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute z-150 right-4 top-4 text-2xl text-gray-500 hover:text-black cursor-pointer"
        >
          ×
        </button>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
