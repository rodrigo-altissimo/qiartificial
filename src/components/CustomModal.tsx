import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ open, onClose, title, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open || typeof document === 'undefined') return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#fff',
          color: '#000',
          borderRadius: 12,
          maxWidth: 700,
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: 32,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          marginBottom: 32,
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>{title}</div>
        <div>{children}</div>
        <div style={{ marginTop: 24, textAlign: 'right' }}>
          <button
            onClick={onClose}
            style={{
              background: '#000',
              color: '#fff',
              border: 'none',
              padding: '10px 20px',
              borderRadius: 8,
              cursor: 'pointer',
            }}
          >
            Fechar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CustomModal;
