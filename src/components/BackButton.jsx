import React from "react";

const BackButton = () => {
  return (
    <button
      className="mb-4 text-blue-500 hover:underline"
      onClick={() => window.history.back()}
    >
      &larr; Back to Home
    </button>
  );
};

export default BackButton;
