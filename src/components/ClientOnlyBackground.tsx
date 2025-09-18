"use client";

import { useState, useEffect } from "react";
import DraggableAIBackground from "./DraggableAIBackground";

export default function ClientOnlyBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
    );
  }

  return <DraggableAIBackground />;
}
