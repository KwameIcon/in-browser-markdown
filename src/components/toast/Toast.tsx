import { StyledToast } from "../../styles/toast.styled";

interface ToastProps {
  backgroundColorMode: 'light' | 'dark';
  documentName: string;
  onCancel: () => void;
  onDelete: () => void;
}

const Toast: React.FC<ToastProps> = ({ backgroundColorMode, documentName, onCancel, onDelete }) => {
  const handleConfirmDelete = () => {
    onDelete(); // Call onDelete function passed from App component
    onCancel(); // Close the Toast after deletion
  };

  return (
    <StyledToast onClick={onCancel}>
      <div className={`card ${backgroundColorMode}`} onClick={(e) => e.stopPropagation()}>
        <h1>Delete this document?</h1>
        <p>Are you sure you want to delete '{documentName}' and its content? <br />This action cannot be reversed.</p>
        <div>
          <button onClick={handleConfirmDelete}>Confirm & Delete</button>
        </div>
      </div>
    </StyledToast>
  );
}

export default Toast;
