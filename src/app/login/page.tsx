import { headers } from "next/headers";
import { LoginForm } from "./LoginForm";

export default async function Login() {
  const headersList = await headers();
  const userHeader = headersList.get("X-User");
  const user = userHeader ? JSON.parse(userHeader) : null;
  return (
    <div>
      {user && user.email}
      <LoginForm />
    </div>
  );
}
