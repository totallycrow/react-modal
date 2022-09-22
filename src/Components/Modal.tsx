import React, { useState, useEffect, ReactNode } from "react";
import "./Modal.css";
import IProps from "../Interfaces/Props";

import ModalContainer from "./ModalContainer";
import { useCallback } from "react";

export const OpenContext = React.createContext(() => {});

export default function Modal({ children }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  //   HANDLE ESCAPE KEY
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === "Escape") {
        closeModal();
      }
    }
    document.addEventListener("keydown", handleEscapeKey);
    return () => document.removeEventListener("keydown", handleEscapeKey);
  }, []);

  // DEFINE SET STATE FUNCTIONS
  const closeModal = useCallback(() => {
    document.body.style.overflowY = "auto";
    document.body.classList.remove(".safari-lock");
    setIsOpen(false);
  }, []);

  const openModal = useCallback(() => {
    document.body.style.overflowY = "hidden";
    document.body.classList.add(".safari-lock");
    setIsOpen(true);
  }, []);

  return (
    <div>
      <button onClick={(e) => openModal()}>Open Modal</button>
      <OpenContext.Provider value={() => closeModal()}>
        <ModalContainer isOpen={isOpen}>{children}</ModalContainer>
      </OpenContext.Provider>
    </div>
  );
}
