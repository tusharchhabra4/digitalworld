export async function getPage(slug) {
  const res = await fetch(
    "http://localhost:1337/api/pages?pLevel",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch page");
  }

  const data = await res.json();

  return data.data.find((page) => page.slug === slug);
}