import React, { ReactNode } from "react";
import { OpenContext } from "./Modal";
import FocusTrap from "focus-trap-react";

type ModalProps = {
  isOpen: boolean;
  children: ReactNode;
};

export default function ModalContainer({ isOpen, children }: ModalProps) {
  const closeModal = React.useContext(OpenContext);
  if (!isOpen) return null;

  return (
    <FocusTrap>
      <div
        className="modal-container"
        onClick={(e) => {
          closeModal();
        }}
      >
        <div
          className="modal-body"
          // Stop Modal from closing when clicking within modal content body itself
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </FocusTrap>
  );
}
