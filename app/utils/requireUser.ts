import { auth } from "./auth";
import { redirect } from "next/navigation";

export default async function requireUser() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login"); // This will immediately redirect
  }

  return session.user;
}
