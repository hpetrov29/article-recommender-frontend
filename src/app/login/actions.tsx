"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const credentials = btoa(`${email}:${password}`);

  const res = await fetch(
    "http://localhost:8000/v1/users/token/01d7318e-1e27-4727-9a4d-d8ae35123d9a",
    {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
      credentials: "include",
    }
  );

  if (!res.ok) {
    const data = await res.json();
    return {
      errors: {
        email: data.error,
      },
    };
  }

  const setCookie = res.headers.get("set-cookie");

  if (setCookie) {
    const cookieStore = await cookies();
    cookieStore.set(
      "authCookie",
      setCookie.split("=")[1].split(";")[0],
      {
        httpOnly: true,
        secure: true,
        path: "/",
      }
    );
  }

  redirect("/posts");
}

export async function logout() {
  redirect("/login");
}
