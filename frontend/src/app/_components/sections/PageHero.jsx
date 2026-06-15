export default function PageHero({ data }) {
  return (
    <section className="bg-black py-24 border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        {data.text && (
          <span className="inline-block bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full mb-6">
            {data.text}
          </span>
        )}

        {data.subtitle && (
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            {data.subtitle}
          </h1>
        )}

        {data.description && (
          <p className="text-zinc-400 text-lg max-w-3xl mx-auto leading-8">
            {data.description}
          </p>
        )}
      </div>
    </section>
  );
}