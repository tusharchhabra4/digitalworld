import Link from "next/link";

export default function CategoryShowcase({ data }) {
  return (
    <section className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-4">
            {data.title}
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.categories?.map((category) => (
            <Link
              key={category.id}
              href={`/categories/${category.slug}`}
              className="
                group
                rounded-3xl
                overflow-hidden
                border
                border-zinc-800
                bg-zinc-900
                transition-all
                duration-300
                hover:border-amber-500
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]
              "
            >
              {/* Image */}
              <div className="h-52 overflow-hidden">
                {category.image && (
                  <img
                    src={`http://localhost:1337${category.image.url}`}
                    alt={category.name}
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

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-400 mb-3">
                  {category.name}
                </h3>

                <p className="text-zinc-400 text-sm line-clamp-3">
                  {category.description?.[0]?.children?.[0]?.text}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}