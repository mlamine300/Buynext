// app/not-found.tsx
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex h-screen items-center justify-center  ">
      <div className=" flex flex-col  justify-center  items-center w-full h-full">
        <h2 className="text-2xl  font-semibold mb-2">Page Not Found</h2>
        <p className="text-foreground/50 mb-6">
          Sorry, we couldn’t find the page you’re looking for.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-white transition hover:bg-gray-800"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
