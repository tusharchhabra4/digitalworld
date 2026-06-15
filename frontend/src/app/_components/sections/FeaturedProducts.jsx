import Link from "next/link";

export default function FeaturedProducts({ data }) {
  return (
    <section className="bg-black py-24">
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

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.products?.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="
                group
                bg-zinc-900
                border
                border-zinc-800
                rounded-3xl
                overflow-hidden
                transition-all
                duration-300
                hover:border-amber-500
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]
              "
            >
              {/* Product Image */}
              <div className="h-64 overflow-hidden bg-zinc-950">
                <img
                  src={`http://localhost:1337${product.image.url}`}
                  alt={product.name}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                <p className="text-xs text-zinc-500 mb-2">
                  {product.brand?.name}
                </p>

                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {product.name}
                </h3>

                <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                  {product.shortDescription}
                </p>

                <div className="flex items-center gap-3">
                  {product.salePrice ? (
                    <>
                      <span className="text-amber-400 text-xl font-bold">
                        ₹{Number(product.salePrice).toLocaleString()}
                      </span>

                      <span className="text-zinc-500 line-through">
                        ₹{Number(product.price).toLocaleString()}
                      </span>
                    </>
                  ) : (
                    <span className="text-amber-400 text-xl font-bold">
                      ₹{Number(product.price).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}