// components/ResetButton.tsx
"use client"; // This makes it a Client Component

import { useState } from "react";

export default function ResetButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleReset = async () => {
    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch(
        "https://private-dev-springboot-app-latest.onrender.com/hello",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error("Reset failed");
      }

      const data = await response.text();
      setMessage(data);
    } catch (error) {
      setMessage("Error resetting data");
      console.error("Reset error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleReset}
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400">
        {isLoading ? "Resetting..." : "GET"}
      </button>
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}
