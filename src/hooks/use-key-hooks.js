import React from "react";

export function useKey(keycode, callback) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === keycode) {
        callback();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keycode, callback]);
}

export function useEscapeKey(callback) {
  useKey("Escape", callback);
}
