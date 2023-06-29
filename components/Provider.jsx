"use client";

import { SessionProvider } from "next-auth/react";

// wrap app in SessionProvider so useSession will be available with session data
const Provider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default Provider;
