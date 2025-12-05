import { useEffect, useState } from "react";

export function useOnline() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    setOnline(typeof navigator === "undefined" ? true : navigator.onLine);
    function onStatusChange() {
      setOnline(navigator.onLine);
    }
    window.addEventListener("online", onStatusChange);
    window.addEventListener("offline", onStatusChange);
    return () => {
      window.removeEventListener("online", onStatusChange);
      window.removeEventListener("offline", onStatusChange);
    };
  }, []);

  return online;
}

