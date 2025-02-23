import { headers } from "next/headers";

type User = {
  sub: string;
  email: string;
  roles: string[];
};

export type WithAuthProps = {
  user: User;
};

export function withAuth<P extends WithAuthProps>(
  WrappedComponent: React.ComponentType<P>
) {
  return async function AuthenticatedComponent(
    props: Omit<P, keyof WithAuthProps>
  ) {
    const headersList = await headers();
    const userHeader = headersList.get("X-User");
    const user: User | null = userHeader ? JSON.parse(userHeader) : null;

    return <WrappedComponent {...(props as P)} user={user} />;
  };
}
