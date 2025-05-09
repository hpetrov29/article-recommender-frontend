import { withAuth, WithAuthProps } from "@/lib/WithAuth";
import { LoginForm } from "./LoginForm";

async function Login({ user }: WithAuthProps) {
  return (
    <div className="flex items-center justify-center h-[calc(100%-3.5rem)]">
      <LoginForm />
    </div>
  );
}

export default withAuth(Login);
