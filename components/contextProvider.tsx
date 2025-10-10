"use client";
import { useState } from "react";
import context from "../lib/context";
import React from "react";

function ContextProvider({ children }: Readonly<{
  children: React.ReactNode
}>) {
  const [authenticate, setAuthenticate] = useState(false);
  const setAuthenticated = (value: boolean) => setAuthenticate(value);

  return (
    <context.Provider value={{ isAuthenticated: authenticate, setAuthenticated }}>
      {children}
    </context.Provider>
  )
}

export default ContextProvider