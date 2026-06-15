import { getPage } from "@/lib/getPage";
import { componentMap } from "@/lib/componentMap";

export default async function CategoryPage() {
  const page = await getPage("categories");

  return (
    <main>
      {page.pageSections.map((section, index) => {
        const Component = componentMap[section.__component];

        if (!Component) return null;

        return (
          <Component
            key={index}
            data={section}
          />
        );
      })}
    </main>
  );
}