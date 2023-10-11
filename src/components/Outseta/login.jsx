"use client";

import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    window.outseta_login = {
      id: "outseta_l",
      domain: process.env.NEXT_PUBLIC_OUTSETA_URL,
      load: "auth",
      auth: {
        widgetMode: "login",
        id: "login_embed",
        mode: "embed",
        selector: "#o-login-form",
      },
    };
    const script = document.createElement("script");
    script.src = "https://cdn.outseta.com/outseta.min.js";
    script.dataset.options = "outseta_login";
    document.body.appendChild(script);
  }, []);
  return <div id="o-login-form"></div>;
}
