import { getProduct } from "@/lib/getProduct";

export default async function ProductPage({ params }) {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Product Not Found
      </div>
    );
  }

  return (
    <main className="bg-black min-h-screen text-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Product Image */}
            <div>
              {product.image && (
                <img
                  src={`http://localhost:1337${product.image.url}`}
                  alt={product.name}
                  className="
                    w-full
                    rounded-3xl
                    border
                    border-zinc-800
                  "
                />
              )}
            </div>

            {/* Product Details */}
            <div>

              {product.brand && (
                <p className="text-amber-400 mb-3">
                  {product.brand.name}
                </p>
              )}

              <h1 className="text-5xl font-bold mb-6">
                {product.name}
              </h1>

              <p className="text-zinc-400 text-lg mb-8">
                {product.shortDescription}
              </p>

              {/* Price */}
              <div className="flex items-center gap-4 mb-8">
                {product.salePrice ? (
                  <>
                    <span className="text-4xl font-bold text-amber-400">
                      ₹{Number(product.salePrice).toLocaleString()}
                    </span>

                    <span className="text-xl text-zinc-500 line-through">
                      ₹{Number(product.price).toLocaleString()}
                    </span>
                  </>
                ) : (
                  <span className="text-4xl font-bold text-amber-400">
                    ₹{Number(product.price).toLocaleString()}
                  </span>
                )}
              </div>

              

              {/* Description */}
              <div className="mt-12">
                

                <p className="text-zinc-400 leading-8">
                  {product.description}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}