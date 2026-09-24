import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({
  comment,
  title,
  description,
}: {
  comment: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="font-mono text-sm text-accent-bright">// {comment}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base leading-relaxed text-ink-muted sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
