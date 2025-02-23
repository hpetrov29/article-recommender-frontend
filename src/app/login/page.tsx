import { withAuth, WithAuthProps } from "@/lib/WithAuth";
import { LoginForm } from "./LoginForm";

async function Login({ user }: WithAuthProps) {
  return (
    <div>
      {user && user.email}
      <LoginForm />
    </div>
  );
}

export default withAuth(Login);
