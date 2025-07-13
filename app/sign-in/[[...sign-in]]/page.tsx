"use client";

import { SignIn, useUser } from "@clerk/nextjs";

export default function SignInComponent() {
  const { user } = useUser();

  if (!user)
    return (
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm ">
        <SignIn />
      </div>
    );

  return <div>Welcome!</div>;
}
