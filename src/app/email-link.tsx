"use client";

import { ReactNode, useEffect, useState } from "react";

export default function EmailLink({ children }: { children: ReactNode }) {
  const [showingEmail, setShowingEmail] = useState(false);

  useEffect(() => {
    setShowingEmail(true);
  }, []);

  const handleButton = () => {
    window.location.href = "mailto:salut@dayandnightworship.fr";
  };

  if (!showingEmail) return null;

  return (
    <button className="underline hover:text-primary" onClick={handleButton}>
      {children}
    </button>
  );
}
