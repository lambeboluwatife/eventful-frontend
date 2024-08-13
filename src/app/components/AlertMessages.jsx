import React, { useEffect } from "react";

const AlertMessage = ({ message, type, duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  const alertClass =
    type === "success" ? "alert alert-success" : "alert alert-danger";

  return <div className={alertClass}>{message}</div>;
};

export default AlertMessage;
