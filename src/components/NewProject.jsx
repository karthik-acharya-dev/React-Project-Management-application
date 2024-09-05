import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueData = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueData.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    //validation

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueData,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="font-bold">Invalid Input</h2>
        <p>Oops... looks like you forgot to enter a value</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={handleSave}
              className="bg-green-600 text-white rounded shadow-md py-2 px-4"
            >
              Save
            </button>
          </li>
          <li>
            <button
              onClick={onCancel}
              className="bg-red-600 text-white rounded shadow-md py-2 px-4"
            >
              Cancel
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} type="text" label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
}
