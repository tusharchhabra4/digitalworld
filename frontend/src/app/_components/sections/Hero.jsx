import Link from "next/link";

export default function Hero({ data }) {
  console.log("Hero Image:", data.image);
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <span className="inline-block bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full mb-6">
            {data.badge}
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            {data.title}
          </h1>

          <p className="text-zinc-400 text-lg mb-8">
            {data.subtitle}
          </p>

          <div className="flex gap-4">
            {data.button?.map((btn) => (
              <Link
                key={btn.id}
                href={btn.href}
                className="px-6 py-3 rounded-xl bg-amber-500 text-black font-semibold"
              >
                {btn.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <img
            src={`http://localhost:1337${data.image.url}`}
            alt={data.title}
            className="w-full rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
}
