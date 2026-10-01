/**
 * RESERVAS Y CONDICIONES
 * Fuente: "Paquetes Kastell 27.pdf" (págs. 4–8). La redacción se ordenó y se hizo más clara,
 * pero NO se cambió ninguna condición comercial (plazos, montos ni porcentajes).
 * `reviewNotes` son notas internas (solo visibles con NEXT_PUBLIC_REVIEW_MODE=1).
 */
export type PolicyBlock = { heading?: string; paragraphs?: string[]; bullets?: string[] };
export type PolicySection = { id: string; title: string; blocks: PolicyBlock[]; reviewNotes?: string[] };

export const conditionsNote =
  "Las condiciones pueden variar según el paquete, temporada, proveedor y disponibilidad. Confirma los detalles con Kastell antes de reservar.";

export const policySections: PolicySection[] = [
  {
    id: "solicitar-reserva",
    title: "Formas de solicitar una reserva",
    blocks: [
      {
        paragraphs: [
          "Las solicitudes de reserva se pueden realizar por correo electrónico, por llamada o personalmente.",
          "También puedes iniciar tu solicitud desde esta página, por WhatsApp o con el formulario de contacto.",
        ],
      },
    ],
    reviewNotes: ["El PDF menciona correo electrónico, pero el sitio todavía no tiene un correo configurado (variable NEXT_PUBLIC_CONTACT_EMAIL vacía)."],
  },
  {
    id: "confirmacion-escrita",
    title: "Confirmación escrita",
    blocks: [
      {
        bullets: [
          "La reserva es válida una vez que se envía por escrito la confirmación de los servicios requeridos.",
          "Si en algún momento la confirmación de servicios es errónea, envía tu solicitud de corrección por escrito y la resolveremos en un plazo de 7 días posteriores.",
          "Excepción: en las reservas realizadas con menos de 4 semanas antes del viaje no es obligatorio enviar este correo. Mantén comunicación constante con la agencia.",
        ],
      },
    ],
    reviewNotes: [
      "El PDF dice 'La reserva es válida una vez usted nos envíe la confirmación…' (la envía el cliente), mientras que en cancelaciones dice 'se haya emitido una confirmación por escrito de los servicios' (la emite Kastell). Se conservó cada frase tal cual; conviene que el cliente defina quién confirma qué.",
    ],
  },
  {
    id: "informacion-pasajero",
    title: "Información requerida al pasajero",
    blocks: [
      {
        paragraphs: ["Para reservar y confirmar grupos o pasajeros individuales se requieren los siguientes datos:"],
        bullets: [
          "Fecha exacta de llegada y salida.",
          "Conexión aérea: línea aérea, número de vuelo, fecha y hora de llegada, fecha y hora de salida.",
          "Duración del viaje.",
          "Forma de pago, copia del recibo bancario o documentos de viaje.",
          "Preferencias sobre tipos o categorías de hoteles.",
          "Tipo de habitación (sencilla, doble, triple).",
          "Lista de habitaciones y distribución de huéspedes.",
          "Intereses de los visitantes en su estancia en Costa Rica: observación de flora y fauna, estadía en playas, visitas a bosques, deportes, excursiones, caminatas.",
          "Circuitos de viaje de su preferencia.",
          "Nombre del guía turístico o guía del grupo, en caso de tenerlo.",
          "Guía turístico, si la gira lo amerita. El guía se contratará en el idioma de los turistas.",
          "Comidas y bebidas que deseen ordenar previamente.",
          "Requerimientos o características especiales de los clientes (vegetarianos, alergias, etc.).",
          "Número y edad de los niños que integran el grupo.",
          "Tipo de vehículo a rentar.",
          "Traslados locales necesarios.",
        ],
      },
    ],
    reviewNotes: [
      "DECISIÓN PENDIENTE: el PDF también pide 'números de tarjetas de crédito y fechas de vencimiento'. NO se publicó en esta lista porque pedir datos de tarjeta por correo o mensajes es un riesgo para los clientes. Si el cliente lo necesita (p. ej. garantía de renta de vehículo), definir un canal seguro antes de publicarlo.",
    ],
  },
  {
    id: "cambios",
    title: "Cambios de reserva",
    blocks: [
      {
        bullets: [
          "Los cambios en las reservaciones son posibles sin costo adicional hasta 21 días antes de tu viaje.",
          "Los cambios realizados después de esa fecha tienen un costo promedio de $20.00 por pasajero.",
          "Si cambia algún pasajero, debe notificarse por escrito y se aplica una penalidad de $15.00 por pasajero.",
        ],
      },
      {
        heading: "Cargo por asesoría y confección de servicios",
        paragraphs: ["Sin excepción, conforme a nuestras políticas, se debe cancelar un monto de $35.00 por concepto de:"],
        bullets: [
          "Asesoría a clientes individuales que no hacen efectiva la compra del servicio.",
          "Confección de servicios para grupos o individuales en los cuales no esté implícita la comisión para la empresa.",
          "Toda clase de evento, incluyendo consultorías o planificación de servicios ofrecidos a visitantes enviados a nuestra representada, ya sea por medio de nuestros socios comerciales o comprados de forma directa a otros operadores en el extranjero.",
          "Acuerdos especiales con socios comerciales extranjeros.",
        ],
      },
    ],
  },
  {
    id: "cancelacion",
    title: "Políticas de cancelación",
    blocks: [
      {
        heading: "Pasajeros individuales",
        bullets: [
          "De 15 a 8 días antes del inicio del viaje: 50 % del valor total.",
          "De 8 días a 1 día antes del viaje: 75 % del valor total.",
          "Pasajeros que no se presentan: 100 % del valor total.",
        ],
      },
      {
        paragraphs: [
          "Toda cancelación debe realizarse por escrito. Si debes cancelar el mismo día, puedes comunicarlo por teléfono y enviar un respaldo posteriormente.",
          "Toda cancelación de servicio lleva un registro; con ese registro se determina el monto a penalizar.",
        ],
      },
      {
        heading: "Luna de miel y experiencias especiales",
        paragraphs: [
          "Estos servicios incluyen experiencias de lujo contratadas especialmente para el cliente. Los depósitos realizados a proveedores que sean no reembolsables se descontarán del monto correspondiente a cualquier devolución.",
        ],
      },
    ],
    reviewNotes: [
      "El PDF no define qué porcentaje aplica si se cancela con MÁS de 15 días de anticipación, y los tramos '15 a 8 días' y '8 a 1 día' se superponen en el día 8. Se publicó tal cual; conviene aclararlo.",
    ],
  },
  {
    id: "depositos",
    title: "Depósitos",
    blocks: [
      {
        bullets: [
          "La reserva queda confirmada una vez que se ha recibido el depósito correspondiente y se ha emitido una confirmación por escrito de los servicios.",
          "El porcentaje de depósito varía según el paquete, temporada, hotel, actividad o proveedor.",
        ],
      },
    ],
  },
  {
    id: "pagos",
    title: "Pagos",
    blocks: [
      {
        bullets: [
          "Pasajeros individuales: 30 días antes de iniciar el viaje, 100 % del precio total.",
          "Grupos: 30 días antes de iniciar el viaje, 100 % del precio total.",
        ],
      },
      {
        heading: "Entrega de documentos",
        paragraphs: [
          "La documentación necesaria para el viaje se entrega en el aeropuerto a la hora de tu llegada, si adquieres el servicio de traslado. También puede entregarse en el hotel donde te hospedes la primera noche o en nuestras oficinas.",
          "Los documentos se entregan contra el pago total del viaje y de los servicios adquiridos.",
        ],
      },
      {
        heading: "Medios de pago",
        paragraphs: [
          "Medios de pago: por confirmar con Kastell.",
          "El pago es válido contra recibo, comprobante escaneado por correo electrónico, copia del depósito o recibo de transferencia. Si no existe pago, Kastell se reserva el derecho de cobrar lo correspondiente a la penalización por cancelación.",
        ],
      },
    ],
    reviewNotes: ["El PDF dice 'Medio de Pago: Pendiente'. Se publicó como 'por confirmar'. Pedir al cliente los medios de pago oficiales."],
  },
  {
    id: "grupos",
    title: "Condiciones para grupos",
    blocks: [
      {
        paragraphs: [
          "Para grupos aplican los mismos datos requeridos de reserva y el pago del 100 % 30 días antes de iniciar el viaje.",
          "Los paquetes corporativos se manejan de manera individual, según la especificación del evento. Las condiciones se detallan en la propuesta enviada al cliente y en el contrato respectivo.",
        ],
      },
    ],
  },
  {
    id: "bodas-eventos",
    title: "Bodas y eventos especiales",
    blocks: [
      {
        paragraphs: [
          "Los eventos especiales y las bodas tienen una política de cancelación específica, debido a la contratación anticipada de proveedores.",
          "Las condiciones se detallan en la propuesta enviada al cliente y en el contrato respectivo.",
        ],
      },
    ],
  },
  {
    id: "seguros",
    title: "Seguros de viaje",
    blocks: [
      {
        bullets: [
          "Se solicita que cada usuario porte seguro de viaje para cubrir gastos médicos, equipaje, accidentes o cancelación de viaje.",
          "Se recomienda un paquete de seguros con cobertura de cancelación de viaje, cobertura médica, accidentes, enfermedad, responsabilidad civil y pérdida de equipaje.",
        ],
      },
      {
        heading: "Salud durante el viaje",
        bullets: [
          "Si algún integrante del grupo tiene un problema de salud, debe comunicarlo a la empresa días antes del inicio del viaje.",
          "La empresa, los guías o acompañantes podrán determinar si las condiciones de esa persona la hacen apta para continuar el recorrido, con el fin de evitar incidentes. Por esta situación no existen reembolsos.",
          "Puedes acceder al servicio de salud de Costa Rica en casos de emergencia; los costos dependen de la distancia o del servicio requerido.",
        ],
      },
    ],
  },
  {
    id: "responsabilidades",
    title: "Responsabilidades de la empresa",
    blocks: [
      {
        paragraphs: [
          "Kastell tiene su sede en San José, Costa Rica, y actúa como intermediaria de empresas de hospedaje, medios de transporte, excursiones, entre otras.",
          "Es nuestra responsabilidad ofrecer a turistas y visitantes una preparación responsable de los itinerarios de viaje, la selección y supervisión de los servicios ofrecidos y su correcta especificación.",
        ],
        bullets: [
          "No nos hacemos responsables por acuerdos o contratos establecidos con otros operadores ajenos a nuestras negociaciones.",
          "No somos responsables por cancelaciones debidas a fuerza mayor.",
          "No somos responsables por cancelaciones o atrasos de vuelos de líneas locales o internacionales, ni por los servicios recibidos de ellas. Si la línea aérea cancela, el cliente asume los costos adicionales para cubrir su traslado.",
          "Nos reservamos el derecho de efectuar cambios en el itinerario, las reservaciones de hotel o los servicios del viaje, siempre que la calidad sea similar o mejor.",
          "Nos reservamos el derecho de aceptar o excluir a cualquier participante particular de un grupo.",
          "No nos hacemos responsables por daños o pérdidas de equipaje.",
        ],
      },
    ],
  },
  {
    id: "reclamos",
    title: "Reclamos",
    blocks: [
      {
        paragraphs: [
          "Si no recibes alguno de los servicios previamente contratados, debes especificarlo por escrito, con fecha límite de un mes después de terminado el viaje.",
          "Si Kastell no incurre en falta alguna respecto a ese reclamo, este se trasladará al operador correspondiente.",
        ],
      },
    ],
    reviewNotes: ["El PDF dice 'por escrito por parte de nuestros socios comerciales' (frase ambigua). Se simplificó a 'por escrito'; confirmar quién presenta el reclamo."],
  },
  {
    id: "proteccion-ninos",
    title: "Código de conducta y protección contra la explotación sexual infantil",
    blocks: [
      {
        paragraphs: [
          "Kastell es responsable de velar y luchar contra la explotación sexual infantil. Nos comprometemos a combatir arduamente estas prácticas y a contribuir a un turismo libre de ellas.",
          "El personal de la empresa y sus proveedores actúan en conjunto a favor de la protección de niños, niñas y adolescentes contra la explotación sexual comercial. Es nuestro deber capacitar sobre este tipo de comportamientos y así promover la protección y la integridad física y psicológica de niños y adolescentes.",
          "Cualquier comportamiento sospechoso de esta índole será denunciado ante las entidades correspondientes.",
        ],
      },
    ],
  },
];
