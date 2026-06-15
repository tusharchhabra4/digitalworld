
import Link from "next/link";

async function getFooterData() {
  const res = await fetch(
    "http://localhost:1337/api/global?pLevel",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch footer");
  }

  return res.json();
}

export default async function Footer() {
  const response = await getFooterData();
  const data = response.data;

  return (
    <footer className="mt-24 border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Section */}
        <div className="grid gap-12 py-16 md:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/">
              <img
                src={`http://localhost:1337${data.footlogo.image.url}`}
                alt="DigitalWord"
                className="h-30 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-zinc-400">
              {data.footlogo.tagline}
            </p>
          </div>

          {/* Dynamic Columns */}
          <div></div>
          {data.column.map((column) => (
            <div key={column.id}>
              <h3 className="mb-5 text-lg font-semibold text-amber-400">
                {column.title}
              </h3>

              <div className="space-y-3">
                {column.columnlink.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className="
                      block
                      text-zinc-400
                      transition-all
                      duration-300
                      hover:translate-x-1
                      hover:text-amber-400
                    "
                  >
                    {link.label}
                  </Link>
                ))}
                
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="border-t border-zinc-800 py-8">
          <div className="flex justify-center gap-5">
            {data.sociallink.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-zinc-700
                  bg-zinc-900
                  text-xl
                  text-amber-400
                  transition-all
                  duration-300
                  hover:scale-110
                  hover:border-amber-400
                  hover:bg-amber-500/10
                  hover:shadow-[0_0_25px_rgba(245,158,11,0.35)]
                "
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-800 py-6">
          <p className="text-center text-sm text-zinc-500">
            {data.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}