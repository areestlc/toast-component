import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = (variant, message) => {
    setToasts((toasts) => [
      ...toasts,
      { id: crypto.randomUUID(), variant, message },
    ]);
  };

  const dismissToast = (id) => {
    setToasts((toasts) => {
      return toasts.filter((toast) => toast.id !== id);
    });
  };

  const dismissAllToasts = () => {
    setToasts([]);
  };

  return (
    <ToastContext.Provider
      value={{ toasts, createToast, dismissToast, dismissAllToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
