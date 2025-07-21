// app/sign-up/[[...sign-up]]/page.js

"use client";

import { useEffect } from "react";
import { useUser, SignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react"; // A popular icon library for React

export default function SignUpPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  // This effect handles the redirection
  useEffect(() => {
    if (isLoaded && user) {
      const timer = setTimeout(() => {
        router.push("/dashboard"); // Redirect to the dashboard or homepage
      }, 2000); // 2-second delay for the user to see the message

      // Cleanup function to clear the timer if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [isLoaded, user, router]);

  // 1. Loading state while Clerk checks the user's session
  if (!isLoaded) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
        <Loader className="h-10 w-10 animate-spin text-primary" />
        <p className="mt-4 text-lg">Verifying your session...</p>
      </div>
    );
  }

  // 2. If the user is logged in, show a welcome screen before redirecting
  if (user) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-md">
        <div className="text-center p-8 rounded-lg shadow-xl bg-card">
          <h1 className="text-4xl font-bold text-primary">
            Welcome, {user.firstName}!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            You already have an account.
          </p>
          <p className="mt-2 text-muted-foreground">
            Redirecting you to your dashboard...
          </p>
          <Loader className="h-8 w-8 animate-spin text-primary mx-auto mt-6" />
        </div>
      </div>
    );
  }

  // 3. If no user, show the Clerk SignUp component
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </div>
  );
}
