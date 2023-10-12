"use client";

import { useSession } from "@/context/Session";
import { useLayoutEffect } from "react";

export default function Profile() {
  const session = useSession();
  useLayoutEffect(() => {
    if (window.Outseta) {
      window.Outseta.setAccessToken(session.access_token);
    }
  }, [session]);
  return <div className="o-profile-embed"></div>;
}
