const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function fetchAPI(path) {
  const res = await fetch(`${API_URL}${path}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}