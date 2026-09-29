"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

/**
 * Imagen con parallax suave: la foto se desplaza más lento que su marco al hacer scroll.
 * `strength` en px (negativo = dirección contraria). Sin movimiento si el usuario prefiere reducirlo.
 * Por defecto es `relative`; pasa `absolute` en `className` para superponerla.
 */
export function ParallaxImage({
  src,
  alt,
  sizes,
  strength = 40,
  className,
  imageClassName,
  priority,
}: {
  src: string;
  alt: string;
  sizes: string;
  strength?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-strength, strength]);
  const pad = Math.abs(strength);

  return (
    <div ref={ref} className={cn("overflow-hidden", /\babsolute\b/.test(className ?? "") ? "" : "relative", className)}>
      <motion.div className="absolute inset-x-0" style={{ y, top: -pad, bottom: -pad }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", imageClassName)} />
      </motion.div>
    </div>
  );
}
