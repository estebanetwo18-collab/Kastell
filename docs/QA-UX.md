# QA de UX, responsive y usabilidad — 28/09/2026

Pruebas automatizadas con Playwright sobre el build de producción (`next build && next start`), en Chromium
con emulación de dispositivo (viewport, DPR, touch, user agent). **No se probó en WebKit/Safari real**
(no disponible en el entorno): conviene una pasada manual en un iPhone físico antes de publicar.

## Dispositivos y tamaños
iPhone SE 375×667 · iPhone 12/13/14 390×844 · iPhone Pro Max 430×932 · Android 360×800 · Android 412×915 ·
iPad 768×1024 · Laptop 1366×768 · Desktop 1920×1080 · iPhone horizontal 844×390.
Páginas: las 8 rutas + 404 (72 combinaciones página × dispositivo).

## Hallazgos y estado

| # | Severidad | Problema | Dónde | Estado |
|---|---|---|---|---|
| 1 | Alta | El menú móvil abría 40px por debajo de la barra superior: tapaba el logo y el botón de cerrar | `components/Header.tsx` | Corregido |
| 2 | Alta | Campos del formulario a 15.2px: iOS hace zoom automático al tocarlos | `app/globals.css` (`.field`) | Corregido (16px) |
| 3 | Alta | 23–47 elementos táctiles por página bajo 44×44px (barra superior, footer, filtros, enlaces, cerrar modal) | Header, Footer, ExperienceCatalog, ContactModal, globals.css | Corregido (32/32 páginas×tamaños OK) |
| 4 | Alta | Sin `sharp`, la primera optimización AVIF de cada imagen tardaba >5s y saturaba el servidor (timeouts) | `package.json`, `next.config.mjs` | Corregido: `sharp`, solo WebP, tamaños ≤2048px (0.25–0.5s) |
| 5 | Media | Escape no cerraba el menú móvil ni el desplegable | `components/Header.tsx` | Corregido |
| 6 | Media | Foco de teclado casi invisible sobre fondos oscuros | `app/globals.css` | Corregido (contorno dorado + halo) |
| 7 | Media | Animaciones de aparición ignoraban `prefers-reduced-motion` | `Reveal.tsx`, `ContactModal.tsx` | Corregido (`MotionConfig reducedMotion="user"`) |
| 8 | Media | El botón flotante de WhatsApp tapaba la tarjeta del hero (laptop) y la última fila del footer (tablet) | `home/Hero.tsx`, `Footer.tsx` | Corregido |
| 9 | Media | Sin soporte de áreas seguras (notch en horizontal, barra inferior) | `layout.tsx`, `globals.css`, Header, WhatsAppFloat, ContactModal | Corregido (`viewport-fit=cover` + `env(safe-area-inset-*)`) |
| 10 | Media | Al abrir el modal en móvil se enfocaba un input y saltaba el teclado | `ContactModal.tsx` | Corregido (en táctil se enfoca el diálogo) |
| 11 | Media | Etiquetas en mayúsculas a 10.9–11.5px, difíciles de leer | globals.css + componentes | Corregido (≥12px) |
| 12 | Baja | Doble espacio en "Cotizar  por WhatsApp" (tablet) | Header | Corregido |
| 13 | Baja | Botones sin estado `active` | globals.css | Corregido (`active:scale`) |
| 14 | Baja | Teclado móvil sin `enterKeyHint`/`inputMode`/`autocapitalize` adecuados | ContactForm | Corregido |
| 15 | Baja | Mensajes de error a 12px | ContactForm | Corregido (14px, negrita) |

Sin hallazgos: scroll horizontal (0 en 72 combinaciones + horizontal), errores de consola/JS, enlaces rotos
(49 revisados), imágenes rotas, texto cortado, filtros, acordeón, validación junto al campo, envío con
respaldo a WhatsApp, modal en horizontal (scroll interno), desplegable de escritorio, orden de tabulación.

Conexión lenta (≈400 kbps, 400ms latencia, iPhone 390px): FCP/LCP 1.9s, carga completa 13s, 612 KB.

## Pendientes que requieren decisión
- Probar en Safari iOS real (WebKit) antes de publicar.
- El cuerpo en Cormorant Garamond (decisión de marca) tiene ojo pequeño: en móvil se lee bien a 16px+, pero textos de 14px o menos quedan finos.
- Botón flotante de WhatsApp: tapa el borde derecho del contenido mientras se hace scroll en móvil (patrón habitual; alternativa: ocultarlo al hacer scroll hacia abajo).
- Autocompletar direcciones/fecha: "Fecha tentativa" es texto libre; un selector de mes/año sería más rápido en móvil pero cambia el dato que recibe el cliente.
