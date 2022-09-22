import React from "react";
import { OpenContext } from "./Modal";

type TFooterProps = {
  callToActionLabel: string;
};

export default function ModalFooter({ callToActionLabel }: TFooterProps) {
  const closeModal = React.useContext(OpenContext);
  return (
    <div>
      <button className="btn" onClick={() => closeModal()}>
        Cancel
      </button>
      <button
        className="btn"
        onClick={() => {
          alert("Success");

          closeModal();
        }}
      >
        {callToActionLabel}
      </button>
    </div>
  );
}
