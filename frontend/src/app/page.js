import { getPage } from "@/lib/getPage";
import { componentMap } from "@/lib/componentMap";

export default async function HomePage() {
  const page = await getPage("home");

  return (
    <main className="flex-1 bg-black">
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