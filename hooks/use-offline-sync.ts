import { useEffect } from "react";
import { isOnline } from "@/features/sync/net-status";
import { flushQueue } from "@/features/sync/queue";

export function useOfflineSync() {
  useEffect(() => {
    if (isOnline()) {
      flushQueue();
    }
  }, []);
}

