// src/components/ModalApproveAction.jsx

const ModalApproveAction = ({ onClose, onConfirm }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Are you sure?</h2>
        <button onClick={onClose}>Cancel</button>
        <button onClick={onConfirm}>Yes</button>
      </div>
    </div>
  );
};

export default ModalApproveAction;
