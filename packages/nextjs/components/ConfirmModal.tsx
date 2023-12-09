const ConfirmModal = (props: { id: string; onConfirm: () => void }) => {
  return (
    <>
      <dialog id={props.id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-primary">Confirmation</h3>
          <p className="py-4">Press ESC key or click the button below to cancel</p>
          <div className="modal-action flex">
            <form method="dialog" className="flex-1">
              <button className="btn w-full">Close</button>
            </form>
            <button className="btn btn-primary w-full flex-1" onClick={props.onConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export const closeConfirmModal = (props: { id: string }) => {
  const modal = document.getElementById(props.id) as HTMLDialogElement;
  if (modal instanceof HTMLElement) {
    modal.close?.();
  } else {
    console.error("Modal element not found.");
  }
};

export const openConfirmModal = (props: { id: string }) => {
  const modal = document.getElementById(props.id) as HTMLDialogElement;
  if (modal instanceof HTMLElement) {
    modal.showModal?.(); // Use optional chaining to call showModal if it exists
  } else {
    console.error("Modal element not found.");
  }
};

export default ConfirmModal;
