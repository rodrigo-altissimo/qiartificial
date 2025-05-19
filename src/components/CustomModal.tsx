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
        background: 'rgba(0, 0, 0, 0.8)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#18181b',
          color: '#fff',
          borderRadius: 12,
          maxWidth: 700,
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: 32,
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          margin: 0,
        }}
        onClick={e => e.stopPropagation()}
      >
        <div style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>{title}</div>
        <div>{children}</div>
        <div style={{ marginTop: 24, textAlign: 'right' }}>
          <button
            onClick={onClose}
            style={{
              background: '#22c55e',
              color: '#18181b',
              border: 'none',
              padding: '10px 20px',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 600,
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
