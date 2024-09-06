import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const { status, statusText, data } = useRouteError();
  return (
    <section className="rounded-md bg-white text-center shadow-md shadow-gray-400 w-fit px-12 py-12 mx-auto mt-16 space-y-4">
      <h2 className="text-8xl text-red font-bold text-red-600">{status}</h2>
      <p className="text-4xl text-gray-800">{statusText}</p>
      <p className="text-2xl text-gray-600">{data}</p>
    </section>
  );
};

export default Error;
