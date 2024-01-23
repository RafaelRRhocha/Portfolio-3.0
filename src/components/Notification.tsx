import { FC, useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
  color: string;
  onClose: () => void;
}

const Notification: FC<NotificationProps> = ({ message, color, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-0 left-5 mb-7 p-4 bg-${color}-600 text-white rounded-md z-50`}
    >
      {message}
    </div>
  );
};

export default Notification;
