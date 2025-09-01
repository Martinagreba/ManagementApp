import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialog.current) {
          dialog.current.showModal();
        }
      },
      close() {
        if (dialog.current) {
          dialog.current.close();
        }
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 round-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
