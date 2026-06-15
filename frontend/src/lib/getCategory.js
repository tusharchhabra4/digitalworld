export async function getCategory(slug) {
  const res = await fetch(
    `http://localhost:1337/api/categories?filters[slug][$eq]=${slug}&populate[products][populate]=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }

  const data = await res.json();

  console.log("Current Slug:", slug);
  console.log("Category Found:", data.data[0]?.name);

  return data.data[0];
}