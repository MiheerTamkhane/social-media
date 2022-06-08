import React, { useRef } from "react";
import { useOnClickOutside } from "../../hooks";

const Modal = ({ children, setShowModal }) => {
  const modalRef = useRef();
  useOnClickOutside(modalRef, () => setShowModal(false));
  return (
    <div className="fixed w-screen right-0 h-screen bottom-0 modal-bg z-50 flex items-center justify-center">
      <div
        ref={modalRef}
        open
        className="h-fit overflow-y-auto  w-96 open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg py-2 px-4 rounded-lg m-2"
      >
        {children}
      </div>
    </div>
  );
};

export { Modal };
