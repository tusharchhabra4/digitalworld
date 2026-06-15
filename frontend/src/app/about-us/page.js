import { getPage } from "@/lib/getPage";
import { componentMap } from "@/lib/componentMap";

export default async function AboutPage() {
  const page = await getPage("about-us");

  return (
    <main>
      {page.pageSections.map((section, index) => {
        const Component = componentMap[section.__component];

        if (!Component) return null;

        return <Component key={index} data={section} />;
      })}
    </main>
  );
}