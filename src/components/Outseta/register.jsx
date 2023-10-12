"use client";

import { useEffect, useState } from "react";

export default function Register() {
  const [authCallbackUrl, setAuthCallbackUrl] = useState("");
  useEffect(() => {
    setAuthCallbackUrl(window.location.origin + "/api/auth/login");
  }, []);

  return (
    <div
      className="o-auth-embed"
      data-widget-mode="register"
      data-authenticationcallbackurl={authCallbackUrl}
    ></div>
  );
}
