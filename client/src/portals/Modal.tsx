import { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
};

const Modal = ({ children }: Props) => {
  const overlayRoot = document.getElementById("portal");
  return overlayRoot
    ? createPortal(
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#ccc] opacity-70 z-50"></div>
          <div className="fixed top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] z-50 bg-white">
            {children}
          </div>
        </>,
        overlayRoot
      )
    : null;
};

export default Modal;
