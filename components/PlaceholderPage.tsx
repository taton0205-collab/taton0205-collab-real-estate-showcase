export default function PlaceholderPage({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="py-32 px-6 md:px-20">
      <div className="max-w-[800px] mx-auto text-center space-y-6">
        <h1 className="text-headline-md text-on-surface">{title}</h1>
        <p className="text-body-lg text-on-surface-variant leading-relaxed">{description}</p>
      </div>
    </section>
  );
}
