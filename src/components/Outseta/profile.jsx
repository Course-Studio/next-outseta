"use client";

import { useSession } from "@/context/Session";
import { useLayoutEffect } from "react";

export default function Profile() {
  const session = useSession();
  useLayoutEffect(() => {
    if (!window.outseta_profile) {
      window.outseta_profile = {
        id: "outseta_p",
        domain: process.env.NEXT_PUBLIC_OUTSETA_URL,
        load: "profile",
        profile: {
          id: "profile_embed",
          mode: "embed",
          selector: "#o-profile-form",
        },
      };
    }
    const script = document.createElement("script");
    script.src = "https://cdn.outseta.com/outseta.min.js";
    script.dataset.options = "outseta_profile";
    document.body.appendChild(script);
    if (window.outseta_p) {
      window.outseta_p.setAccessToken(session.access_token);
    }
  }, [session]);
  return <div id="o-profile-form"></div>;
}
