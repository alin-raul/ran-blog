import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center text-center px-4">
      <div className="flex items-center justify-center text-primary mb-4">
        <AlertTriangle className="h-16 w-16" />
      </div>
      <h1 className="text-8xl font-extrabold tracking-tighter text-primary">
        404
      </h1>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
        Page Not Found
      </h2>
      <p className="mt-4 max-w-md text-muted-foreground">
        Sorry, we couldn't find the page you were looking for. It might have
        been moved, deleted, or maybe you just mistyped the URL.
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
