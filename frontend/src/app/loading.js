export default function Loading() {
  return (
    <main className="flex-1 bg-black text-white min-h-screen flex items-center justify-center px-6">
      <div className="space-y-4 text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-amber-400 border-t-transparent" />
        <p className="text-base text-zinc-300">Loading...</p>
      </div>
    </main>
  );
}
