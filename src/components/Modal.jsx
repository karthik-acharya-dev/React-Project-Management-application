import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="bg-white backdrop:bg-gray-500/35 shadow-md p-5 rounded-xl"
    >
      {children}
      <form method="dialog">
        <button className="py-2 px-4 bg-amber-600 text-white rounded mt-5">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
