import { FC, useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
  type: 'positive' | 'negative';
  onClose: () => void;
}

const Notification: FC<NotificationProps> = ({ message, type, onClose }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [onClose]);

  const color = type === 'negative' ? 'red' : 'green';

  return (
    <div
      className={`fixed bottom-0 left-0 mb-4 mr-4 p-4 bg-${color}-600 text-white rounded-md`}
    >
      {message}
    </div>
  );
};

export default Notification;
