import { headers } from "next/headers";
import LoginButton from "./buttons/LoginButton";

async function Navbar() {
  const headersList = await headers();
  const userHeader = headersList.get("X-User");
  const user = userHeader ? JSON.parse(userHeader) : null;
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-xl">My App</h1>
      <div>
        {user ? <span className="text-sm">{user.email}</span> : <LoginButton />}
      </div>
    </nav>
  );
}

export default Navbar;
