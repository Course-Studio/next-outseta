"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "cookies-next";

const SessionContext = createContext();

export const Session = ({ children }) => {
  const [session, setSession] = useState({});
  useEffect(() => {
    try {
      const cookie = JSON.parse(getCookie("session"));
      if (cookie) {
        setSession(cookie);
      }
    } catch (err) {}
  }, []);
  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};
