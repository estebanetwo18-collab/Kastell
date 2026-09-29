# QA final pre-producción — 29/09/2026

Build de producción (`next build && next start`) probado con Playwright/Chromium (emulación de dispositivos).
**Safari/WebKit real no disponible en el entorno**: se emuló el iPhone en Chromium (viewport, DPR, touch, user agent).

## Resultado
Listo para producción **con observaciones** (ver Pendientes).

## Hallazgos corregidos
| ID | Sev. | Problema | Dónde | Archivo |
|---|---|---|---|---|
| F-01 | Crítica | Next.js 14.2.33 con vulnerabilidades conocidas (2 críticas: RCE en Image Optimization/Windows; varias altas de DoS/SSRF) | Todo el sitio | package.json → Next 15.5.26 |
| F-02 | Alta | `sharp` (libvips/libheif) y `postcss` con vulnerabilidades altas | Build / imágenes | package.json (sharp 0.35.5, override postcss 8.5.28) |
| F-03 | Alta | Botón flotante de WhatsApp se veía ovalado (espacio de etiqueta oculta) | Todas | components/WhatsAppFloat.tsx |
| F-04 | Alta | Contraste insuficiente (AA) en dorado claro sobre verde, números decorativos, "(opcional)", cita y fuente del testimonio | Home, Servicios, Nosotros, Experiencias, Bodas, Sostenibilidad, Contacto | tailwind.config.ts (gold.light #D6BA8A) + componentes |
| F-05 | Media | `aria-label` en `div` sin rol (franja de valores) | Home | home/ValuesMarquee.tsx |
| F-06 | Media | Botón flotante fuera de landmarks | Todas | WhatsAppFloat.tsx (`<aside>`) |
| F-07 | Media | 404 con el mismo título que el Home | 404 | app/not-found.tsx |
| F-08 | Media | Enlace de WhatsApp del formulario partido en 2 líneas (área táctil de 1px) | Formularios ≤375px | ContactForm.tsx |
| F-09 | Baja | Fuente Fraunces cargaba estilos no usados | Todas | app/layout.tsx |
| F-10 | Baja | Parámetros de ruta síncronos (API de Next 15) | /experiencias/[slug] | page.tsx |

## Pruebas (todas re-ejecutadas tras los cambios)
- lint ✔ · typecheck ✔ · build ✔ (0 warnings) · npm audit: 0 vulnerabilidades
- axe-core (WCAG 2.1 AA + best practices), 9 rutas × desktop/móvil: 0 violaciones
- 72 combinaciones página × dispositivo: sin scroll horizontal, sin texto cortado, sin imágenes rotas, sin inputs con zoom iOS, sin errores de consola
- Áreas táctiles reales (elementFromPoint), 8 páginas × 4 tamaños: 32/32 ≥ 44×44px
- Flujos: menú móvil, desplegable, modal, validación, envío (éxito / error 500 / sin red / doble clic → 1 solicitud), respaldo WhatsApp, filtros + estado vacío, acordeón, recarga de rutas, horizontal, teclado, reduced-motion, 3G lenta, 49 enlaces
- SEO: title y description únicos, 1 H1 por página, sin saltos de headings, canonical, OG/Twitter, favicon, robots, sitemap, lang es-CR, 404 noindex

## Pendientes (requieren decisión o acceso)
- Prueba en Safari iOS real.
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`, dominio definitivo, URLs de Instagram/Facebook, fotos reales y logos de certificación.
