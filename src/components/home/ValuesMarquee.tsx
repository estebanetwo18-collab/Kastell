import { values } from "@/content";

export function ValuesMarquee() {
  const row = values.map((v) => v.title);
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-ivory py-6" aria-label={`Nuestros valores: ${row.join(", ")}`}>
      <div className="flex w-max animate-marquee gap-12 motion-reduce:animate-none" aria-hidden>
        {[...row, ...row, ...row, ...row].map((v, i) => (
          <span key={i} className="flex items-center gap-12 font-serif text-3xl italic text-ink/80 md:text-4xl">
            {v}
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
          </span>
        ))}
      </div>
    </div>
  );
}
