export default function RichContent({ data }) {
  return (
    <section className="bg-black py-20">
      <div className="max-w-4xl mx-auto px-6">
        {data.title && (
          <h2 className="text-4xl font-bold text-white mb-10">
            {data.title}
          </h2>
        )}

        <div className="space-y-5">
          {data.content?.map((block, index) => {
            if (block.type !== "paragraph") return null;

            const text = block.children
              ?.map((child) => child.text || "")
              .join("");

            if (!text.trim()) {
              return <div key={index} className="h-2" />;
            }

            return (
              <p
                key={index}
                className="text-zinc-300 leading-8 text-lg"
              >
                {text}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}