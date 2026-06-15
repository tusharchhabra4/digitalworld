import Link from "next/link";
import { getCategory } from "@/lib/getCategory";

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  const category = await getCategory(slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Category Not Found
      </div>
    );
  }

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            {category.name}
          </h1>

          {category.description?.[0]?.children?.[0]?.text && (
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              {category.description[0].children[0].text}
            </p>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {category.products?.map((product) => (
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
                    {product.image && (
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
                    )}
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
        </div>
      </section>
    </main>
  );
}