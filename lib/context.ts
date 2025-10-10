"use client";

import { createContext } from "react";

const context = createContext({
    isAuthenticated: false,
    setAuthenticated : (value: boolean) => {}
});

export default context;