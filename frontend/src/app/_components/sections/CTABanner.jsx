import Link from "next/link";

export default function CTABanner({ data }) {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="
            grid
            lg:grid-cols-2
            gap-10
            items-center
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-900
            overflow-hidden
          "
        >
          {/* Content */}
          <div className="p-10 lg:p-14">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              {data.title}
            </h2>

            <p className="text-zinc-400 text-lg mb-8">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-4">
              {data.button?.map((btn) => (
                <Link
                  key={btn.id}
                  href={btn.href}
                  className="
                    px-6
                    py-3
                    rounded-xl
                    bg-amber-500
                    text-black
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-[0_0_25px_rgba(245,158,11,0.45)]
                  "
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="h-full">
            <img
              src={`http://localhost:1337${data.image.url}`}
              alt={data.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}