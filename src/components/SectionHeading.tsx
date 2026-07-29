export default function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-mono text-sm text-[var(--color-accent)]">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
