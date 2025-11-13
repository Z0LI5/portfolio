"use client";

import { useEffect } from "react";

export default function ModelViewerLoader() {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);

  return null;
}
