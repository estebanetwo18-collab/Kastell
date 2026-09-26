import type { SVGProps } from "react";
import {
  BedDouble,
  Briefcase,
  Car,
  Compass,
  ConciergeBell,
  Gem,
  HandHeart,
  Heart,
  Layers,
  Leaf,
  Map,
  Mountain,
  Network,
  PartyPopper,
  PenTool,
  Route,
  Zap,
  type LucideIcon,
} from "lucide-react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function WhatsAppIcon({ size = 20, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.5h-.01a9.47 9.47 0 0 1-4.83-1.32l-.35-.21-3.59.94.96-3.5-.23-.36a9.46 9.46 0 0 1-1.45-5.05c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.92.99 6.71 2.79a9.43 9.43 0 0 1 2.78 6.71c0 5.24-4.26 9.49-9.49 9.49zm8.08-17.57A11.35 11.35 0 0 0 12.04.5C5.74.5.62 5.62.62 11.92c0 2.01.53 3.98 1.52 5.71L.52 23.5l6.02-1.58a11.4 11.4 0 0 0 5.49 1.4h.01c6.29 0 11.42-5.12 11.42-11.42 0-3.05-1.19-5.92-3.34-8.07z" />
    </svg>
  );
}

export function InstagramIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 21.5v-7.8h2.62l.4-3.05H13.5V8.7c0-.88.25-1.48 1.51-1.48h1.61V4.5a21.6 21.6 0 0 0-2.35-.12c-2.33 0-3.92 1.42-3.92 4.03v2.24H7.72v3.05h2.63v7.8h3.15z" />
    </svg>
  );
}

const iconMap: Record<string, LucideIcon> = {
  gem: Gem,
  heart: Heart,
  briefcase: Briefcase,
  compass: Compass,
  route: Route,
  "hand-heart": HandHeart,
  "pen-tool": PenTool,
  leaf: Leaf,
  zap: Zap,
  network: Network,
  layers: Layers,
  map: Map,
  "bed-double": BedDouble,
  car: Car,
  mountain: Mountain,
  "concierge-bell": ConciergeBell,
  "party-popper": PartyPopper,
};

export function DynamicIcon({ name, className, strokeWidth = 1.4 }: { name: string; className?: string; strokeWidth?: number }) {
  const Icon = iconMap[name] ?? Compass;
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
