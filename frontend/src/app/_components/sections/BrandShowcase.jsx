import Link from "next/link";

export default function BrandShowcase({ data }) {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">
            {data.title}
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {data.brands?.map((brand) => (
            <Link
              key={brand.id}
              href={`/brand/${brand.slug}`}
              className="
                group
                bg-zinc-900
                border
                border-zinc-800
                rounded-2xl
                p-6
                text-center
                transition-all
                duration-300
                hover:border-amber-500
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]
              "
            >
              {/* Logo */}
              {brand.logo && (
                <img
                  src={`http://localhost:1337${brand.logo.url}`}
                  alt={brand.name}
                  className="h-16 mx-auto mb-4 object-contain"
                />
              )}

              {/* Brand Name */}
              <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                {brand.name}
              </h3>

              {/* Product Count */}
              <p className="text-sm text-zinc-500 mt-2">
                {brand.products?.length || 0} Products
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}