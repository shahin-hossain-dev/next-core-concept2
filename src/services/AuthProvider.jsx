"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>; //session provider diye sob component er moddhe access kora jabe.
};

export default AuthProvider;
