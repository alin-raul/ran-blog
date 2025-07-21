"use client";

import { useEffect } from "react";
import { SignIn, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";

export default function SignInComponent() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      // Redirect to the dashboard after a short delay
      const timer = setTimeout(() => {
        router.push("/dashboard"); // Or any other page
      }, 2000); // 2-second delay

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [user, router]);

  // Loading state while Clerk is checking the user's session
  if (!isLoaded) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm">
        <Loader className="h-10 w-10 animate-spin text-primary" />
        <p className="mt-4 text-lg">Checking your session...</p>
      </div>
    );
  }

  // If the user is already logged in, show a welcome screen before redirecting
  if (user) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-md">
        <div className="text-center p-8 rounded-lg shadow-xl bg-card">
          <h1 className="text-4xl font-bold text-primary">
            Welcome back, {user.firstName}!
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            You are already signed in.
          </p>
          <p className="mt-2 text-muted-foreground">
            We're redirecting you to your dashboard...
          </p>
          <Loader className="h-8 w-8 animate-spin text-primary mx-auto mt-6" />
        </div>
      </div>
    );
  }

  // If no user, show the Clerk SignIn component
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </div>
  );
}
