

import Link from "next/link";

async function getHeaderData() {
  const res = await fetch("http://localhost:1337/api/global?pLevel", {
    next: {
      revalidate: 10,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch navbar data");
  }

  return res.json();
}


export default async function Header() {
  const response = await getHeaderData();
  const header = response.data;

  return (
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-zinc-800
        bg-black/90
        backdrop-blur-xl
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href={header.logo.href} className="flex items-center">
            <img
              src={`http://localhost:1337${header.logo.image.url}`}
              alt={header.logo.image.alternativeText}
              className="h-30 w-auto object-contain "
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {header.navitems.map((item) => (
              <div key={item.id} className="relative group">
                <Link
                  href={item.href}
                  className="
                    relative
                    flex
                    items-center
                    gap-1
                    py-2
                    text-zinc-200
                    font-medium
                    transition-all
                    duration-300
                    hover:text-amber-400
                    after:absolute
                    after:left-0
                    after:bottom-0
                    after:h-[2px]
                    after:w-0
                    after:bg-amber-400
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.label}

                  {item.dropdown?.length > 0 && (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.dropdown?.length > 0 && (
                  <div
                    className="
                      invisible
                      absolute
                      left-1/2
                      top-full
                      z-50
                      mt-3
                      min-w-[220px]
                      -translate-x-1/2
                      rounded-2xl
                      border
                      border-zinc-800
                      bg-zinc-950/95
                      backdrop-blur-xl
                      opacity-0
                      shadow-[0_10px_40px_rgba(0,0,0,0.4)]
                      transition-all
                      duration-300
                      group-hover:visible
                      group-hover:opacity-100
                    "
                  >
                    <div className="p-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.href}
                          className="
                            block
                            rounded-lg
                            px-4
                            py-3
                            text-sm
                            text-zinc-300
                            transition-all
                            duration-200
                            hover:bg-amber-500/10
                            hover:text-amber-400
                          "
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Wishlist + Cart */}
          <div className="flex items-center gap-3">
            {header.cartlink.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-zinc-800
                  bg-zinc-900
                  text-xl
                  text-amber-400
                  transition-all
                  duration-300
                  hover:border-amber-400
                  hover:bg-amber-500/10
                  hover:scale-105
                "
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
