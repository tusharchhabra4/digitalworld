export async function getProduct(slug) {
  const res = await fetch(
    `http://localhost:1337/api/products?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const data = await res.json();

  return data.data[0];
}