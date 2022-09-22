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
        {/* Stop Modal from closing when clicking within modal body itself */}
        <div className="modal-body" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </FocusTrap>
  );
}
