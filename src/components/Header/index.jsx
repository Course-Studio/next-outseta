"use client";
import { useSession } from "@/context/Session";
import Link from "next/link";

export default function Header() {
  const { user } = useSession();
  return (
    <header className="absolute top-0 left-0 z-10 flex items-center justify-between w-full h-10 px-4 bg-neutral-200">
      <Link href="/">Home</Link>
      {user ? (
        <>
          {user && <span>Welcome, {user.first_name}!</span>}
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/logout">Logout</Link>
            </li>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul className="flex items-center gap-4">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </>
      )}
    </header>
  );
}
