# Kastell Tours & Events — Sitio web

Sitio web de **Kastell Tours & Events**, Destination Management Company (DMC) costarricense.
Construido con **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + lucide-react**.

> ⚠️ Este proyecto **no** está publicado. Nada se despliega a producción sin aprobación explícita del cliente.

---

## 1. Correr el proyecto en local

Requisitos: Node.js 18.17 o superior (recomendado Node 20+).

```bash
npm install
cp .env.example .env.local   # completar las variables (ver sección 5)
npm run dev                  # http://localhost:3000
```

Otros comandos:

| Comando             | Qué hace                                              |
| ------------------- | ----------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo con recarga en caliente        |
| `npm run build`     | Build de producción (verifica tipos y lint)           |
| `npm run start`     | Sirve el build de producción en `localhost:3000`      |
| `npm run lint`      | Revisión de código (ESLint)                           |
| `npm run typecheck` | Verificación de tipos TypeScript                      |

### Preview para revisión (sin publicar en producción)

La forma más sencilla es un **preview deploy en Vercel**:

1. Subir el repositorio a GitHub (ya está) e importarlo en [vercel.com/new](https://vercel.com/new).
2. Configurar las variables de entorno de `.env.example` en *Project → Settings → Environment Variables*.
3. Cada rama/pull request genera una URL de preview privada para revisión.
   El dominio final **solo** se conecta cuando el cliente aprueba.

---

## 2. Estructura de carpetas

```
.
├── public/
│   ├── brand/                  # Logo oficial (negro y versión clara) + certificaciones
│   ├── docs/                   # PDF de la política de sostenibilidad
│   └── images/                 # Fotografías (placeholders de stock por ahora)
├── src/
│   ├── app/                    # Rutas (App Router)
│   │   ├── page.tsx            # Home
│   │   ├── nosotros/           # Misión, visión, valores, historia
│   │   ├── servicios/          # Grid de servicios + diferenciadores
│   │   ├── experiencias/       # Catálogo con filtros
│   │   │   └── [slug]/         # Página de detalle de cada itinerario
│   │   ├── bodas-y-eventos/    # Bodas destino, corporativo, celebraciones, galería
│   │   ├── sostenibilidad/     # Política, código de conducta, PDF
│   │   ├── contacto/           # Formulario + canales directos
│   │   ├── layout.tsx          # Fuentes, SEO global, JSON-LD TravelAgency, header/footer
│   │   ├── sitemap.ts          # /sitemap.xml (automático)
│   │   ├── robots.ts           # /robots.txt
│   │   ├── icon.png            # Favicon (monograma "K" del logo)
│   │   └── globals.css         # Estilos base y utilidades (botones, campos…)
│   ├── components/             # Componentes reutilizables (Header, Footer, formularios…)
│   │   └── home/               # Secciones del Home
│   ├── content/es/             # ✏️ TODOS los textos del sitio (en español)
│   │   ├── company.ts          # Misión, visión, historia, valores, audiencias, diferenciadores, cifras
│   │   ├── pillars.ts          # Los 5 pilares ("Qué ofrecemos")
│   │   ├── services.ts         # Los 9 servicios
│   │   ├── packages.ts         # Catálogo de experiencias / itinerarios
│   │   ├── testimonials.ts     # Testimonios reales
│   │   └── sustainability.ts   # Textos de sostenibilidad
│   └── lib/
│       ├── site.ts             # ✏️ Datos de contacto, redes, URL, certificaciones
│       ├── whatsapp.ts         # ✏️ Mensajes precargados de WhatsApp por sección
│       ├── contact.ts          # Envío del formulario (Web3Forms) + resumen para WhatsApp
│       └── seo.ts              # Helper de metadatos por página
└── tailwind.config.ts          # ✏️ Paleta de colores y tipografía de marca
```

---

## 3. Cómo editar textos

Todo el contenido vive en **`src/content/es/`** y **`src/lib/`** — no hace falta tocar componentes.

- **Teléfono / WhatsApp, redes sociales, correo, dominio:** `src/lib/site.ts`
- **Mensajes precargados de WhatsApp** (distintos por sección): `src/lib/whatsapp.ts`
- **Misión, visión, historia, valores, diferenciadores, cifras:** `src/content/es/company.ts`
- **Pilares del Home, servicios, sostenibilidad, testimonios:** su archivo correspondiente en `src/content/es/`

### Agregar un itinerario / paquete nuevo

1. Abrir `src/content/es/packages.ts`.
2. Copiar el objeto `luna-de-miel-arenal-monteverde` y pegarlo en el arreglo `packages`.
3. Cambiar `slug` (será la URL `/experiencias/<slug>`), textos, días, destinos, precio e imagen.
4. Listo: la tarjeta aparece en el catálogo, los filtros por tipo y destino se actualizan, se crea la página
   de detalle, se agrega al menú desplegable, al footer y al `sitemap.xml`.

`kind: "itinerary"` = itinerario con día a día y página propia.
`kind: "bespoke"` = línea de experiencia a la medida (sin precio fijo), que enlaza a otra sección.

### Agregar un testimonio

En `src/content/es/testimonials.ts` hay espacios comentados con `// TODO: testimonio real del cliente`.
Descomentar y completar. El carrusel muestra flechas automáticamente cuando hay más de uno.

> Solo se deben publicar testimonios **reales** y con autorización.

---

## 4. Cómo reemplazar imágenes placeholder

Las fotos actuales son de stock libre de derechos ([Unsplash](https://unsplash.com/license)) y están en
`public/images/`. Cada lugar donde falta una foto real tiene un comentario `// TODO: reemplazar con foto real de …`
(buscar `TODO` en el proyecto para ver la lista completa).

**Forma más sencilla:** reemplazar el archivo manteniendo **el mismo nombre** (p. ej. `public/images/hero.jpg`).
No hace falta tocar código. Next.js optimiza automáticamente tamaño y formato (AVIF/WebP).

Recomendaciones: JPG de alta calidad, mínimo 2000 px de ancho para imágenes de fondo (hero, CTA) y 1200 px para tarjetas.

| Archivo                         | Dónde se usa                                   |
| ------------------------------- | ---------------------------------------------- |
| `hero.jpg`                      | Hero del Home                                  |
| `og-cover.jpg` (1200×630)       | Imagen al compartir en redes (Open Graph)      |
| `pilar-*.jpg`                   | Tarjetas "Qué ofrecemos"                       |
| `paquete-luna-de-miel.jpg`      | Paquete Luna de Miel                           |
| `boda-*.jpg`, `evento-*.jpg`    | Bodas & Eventos (galería y bloques)            |
| `sostenibilidad-*.jpg`          | Sostenibilidad                                 |
| `resort-selva.jpg`, `suite-vista.jpg` | Bloque de cifras del Home                |
| `cta-playa.jpg`                 | Fondo del CTA final                            |

### Logo

- `public/brand/kastell-logo-black.png` — logo oficial provisto por el cliente (fondo transparente).
- `public/brand/kastell-logo-light.png` — la misma pieza en tono crema para fondos oscuros.
  **TODO:** pedir al cliente la versión oficial en blanco y reemplazar este archivo.

### Certificaciones

Guardar los logos en `public/brand/certificaciones/` y agregarlos en `certifications` dentro de `src/lib/site.ts`.
Aparecen automáticamente en el footer.

---

## 5. Formulario de contacto (variables de entorno)

El formulario (página **Contacto**, modal "Contáctanos" y CTA final) usa **[Web3Forms](https://web3forms.com)**:
no necesita servidor propio y envía cada solicitud al correo del cliente.

1. Ir a [web3forms.com](https://web3forms.com), ingresar el correo donde Kastell quiere recibir las solicitudes.
2. Copiar el **Access Key** que llega a ese correo.
3. Pegarlo en `.env.local` (y en Vercel):

```env
NEXT_PUBLIC_SITE_URL=https://www.dominio-final.com
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
NEXT_PUBLIC_CONTACT_EMAIL=reservas@dominio.com   # opcional: se muestra en footer y contacto
```

**Comportamiento al enviar:**

- ✅ Envío exitoso → mensaje de confirmación + botón **"Continuar por WhatsApp"** con los datos ya resumidos.
- ⚠️ Si falta la llave o falla la conexión → el usuario no pierde nada: se le ofrece enviar la misma
  solicitud por WhatsApp con sus datos resumidos.

Campos: nombre completo, correo, teléfono/WhatsApp, tipo de experiencia (Luxury Travel / Destination Wedding /
Corporate & Incentives / Tailor-Made / Multidestination / Otro), fecha tentativa (opcional) y mensaje.
Incluye validación accesible y un campo *honeypot* anti-spam.

---

## 6. WhatsApp

- Número oficial: **+506 6407 2932** (`src/lib/site.ts`).
- Cada sección tiene su propio botón con un mensaje precargado diferente (`src/lib/whatsapp.ts`).
- Botón flotante fijo en todas las páginas (`src/components/WhatsAppFloat.tsx`).

---

## 7. SEO, rendimiento y accesibilidad

- Metadatos por página (title, description, canonical, Open Graph, Twitter Cards).
- `sitemap.xml` y `robots.txt` generados automáticamente.
- Datos estructurados schema.org: `TravelAgency` (global) y `TouristTrip` (cada itinerario).
- Fuentes con `next/font` (Cormorant Garamond + Manrope), imágenes con `next/image` (lazy-loading, AVIF/WebP).
- Contraste AA, navegación por teclado, "saltar al contenido", `alt` en imágenes, respeto a `prefers-reduced-motion`.

---

## 8. Preparado para inglés (i18n)

Todo el texto está separado en `src/content/es/`. Para agregar inglés:

1. Crear `src/content/en/` con la misma estructura de archivos.
2. Mover las rutas a `src/app/[locale]/…` y resolver el contenido según `params.locale`.
3. Agregar `alternates.languages` en `src/lib/seo.ts` para las etiquetas `hreflang`.

---

## 9. Pendientes del cliente (TODO)

Buscar `TODO` en el código para ver cada punto exacto.

- [ ] Fotografías reales (hero, pilares, paquete, bodas/eventos, sostenibilidad, equipo).
- [ ] Logo oficial en blanco para fondos oscuros.
- [ ] URLs reales de Instagram y Facebook (`src/lib/site.ts`).
- [ ] Dominio definitivo (`NEXT_PUBLIC_SITE_URL`) y Access Key de Web3Forms.
- [ ] Logos de certificaciones (ICT, CST u otras) y sello de Tripadvisor si aplica.
- [ ] Testimonios reales adicionales.
- [ ] Número real de experiencias diseñadas para la tarjeta de cifras (`src/content/es/company.ts`).
- [ ] Más itinerarios para el catálogo.
