import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 bg-black text-white min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-amber-400 mb-4">404</p>
        <h1 className="text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-lg text-zinc-300 mb-8">
          Sorry, the page you are looking for doesn’t exist or may have been moved.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-amber-300"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
