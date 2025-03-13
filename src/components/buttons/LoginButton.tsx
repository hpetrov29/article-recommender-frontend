"use client";

import { redirect } from "next/dist/server/api-utils";

const LoginButton = () => {
  const handleLogin = async () => {
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Log In
    </button>
  );
};

export default LoginButton;
