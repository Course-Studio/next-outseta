"use client";

import { useEffect } from "react";

export default function Register() {
  useEffect(() => {
    window.outseta_register = {
      id: "outseta_r",
      domain: "mavericks-unlimited.outseta.com",
      load: "auth",
      auth: {
        widgetMode: "register",
        planFamilyUid: "DmwAv394",
        planPaymentTerm: "month",
        skipPlanOptions: true,
        id: "signup_embed",
        mode: "embed",
        selector: "#o-register-form",
      },
    };
    const script = document.createElement("script");
    script.src = "https://cdn.outseta.com/outseta.min.js";
    script.dataset.options = "outseta_register";
    document.body.appendChild(script);
  }, []);
  return <div id="o-register-form"></div>;
}
