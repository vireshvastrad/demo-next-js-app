// app/components/ApiButton.tsx
"use client"; // This is required since we're using useState and onClick

import { useState } from "react";

export default function ApiButton() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Replace with your actual API endpoint
      const response = await fetch("https://api.example.com/data", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers here
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={fetchData}
        disabled={loading}
        className={`px-4 py-2 rounded-md ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        } text-white transition-colors`}>
        {loading ? "Loading..." : "Fetch Data"}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {data && (
        <div className="mt-4 p-4 border rounded-md">
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
