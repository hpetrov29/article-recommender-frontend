import { withAuth, WithAuthProps } from "@/lib/WithAuth";
import { LoginForm } from "./LoginForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

async function Login({ user }: WithAuthProps) {
  return (
    <div className="flex items-center justify-center bg-background h-[calc(100%-3.5rem)]">
      <LoginForm />
    </div>
  );
}

export default withAuth(Login);
