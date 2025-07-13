import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <SignUp />
    </div>
  );
}
