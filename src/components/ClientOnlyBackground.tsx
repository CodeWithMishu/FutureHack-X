"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Dynamically import the DraggableAIBackground with no SSR
const DraggableAIBackground = dynamic(() => import("./DraggableAIBackground"), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
  ),
});

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
