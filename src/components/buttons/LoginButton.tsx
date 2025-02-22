"use client";

const LoginButton = () => {
  const handleLogin = async () => {
    console.log("login");
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
