import React from "react";

function LoadingAndErrorHandling({ loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return null;
}

export default LoadingAndErrorHandling;
