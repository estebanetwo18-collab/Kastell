import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn(align === "center" && "mx-auto text-center", "max-w-3xl", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-6", tone === "light" ? "text-gold-light" : "text-gold-deep", align === "center" && "justify-center")}>
          {eyebrow}
        </p>
      )}
      <Tag className={cn("text-display-md", tone === "light" ? "text-ivory" : "text-ink")}>{title}</Tag>
      {intro && (
        <p className={cn("mt-6 text-lg leading-relaxed", tone === "light" ? "text-ivory/75" : "text-ink-muted")}>{intro}</p>
      )}
    </Reveal>
  );
}
