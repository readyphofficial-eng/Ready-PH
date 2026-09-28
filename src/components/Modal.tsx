import { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  maxWidth?: string;
}

export function Modal({ open, onClose, children, title, maxWidth = 'max-w-lg' }: ModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className={`relative w-full ${maxWidth} max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl animate-pop`}>
        {title && (
          <div className="sticky top-0 flex items-center justify-between bg-gradient-to-r from-primary-400 to-candy-pink px-6 py-4 rounded-t-3xl">
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <button onClick={onClose} className="rounded-full bg-white/30 p-2 hover:bg-white/50 transition">
              <X size={20} className="text-white" />
            </button>
          </div>
        )}
        {!title && (
          <button onClick={onClose} className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 shadow hover:bg-white transition">
            <X size={20} className="text-gray-700" />
          </button>
        )}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
