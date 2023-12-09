import { NextPage } from "next";
import ConfirmModal, { closeConfirmModal, openConfirmModal } from "~~/components/ConfirmModal";

const TestPage: NextPage = () => {
  return (
    <div>
      <ConfirmModal
        id="oo"
        onConfirm={() => {
          console.log("confirmed");
          closeConfirmModal({ id: "oo" });
        }}
      />
      <button className="btn" onClick={() => openConfirmModal({ id: "oo" })}>
        Open Modal
      </button>
    </div>
  );
};

export default TestPage;
