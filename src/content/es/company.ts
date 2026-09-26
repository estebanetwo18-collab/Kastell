export const mission =
  "Diseñar y operar experiencias de viaje exclusivas que superen expectativas, integrando creatividad, excelencia y conocimiento del destino, para brindar momentos memorables a viajeros, empresas y parejas alrededor del mundo.";

export const vision =
  "Ser una DMC reconocida internacionalmente por crear experiencias auténticas y sofisticadas, destacándose por su innovación, calidad de servicio y capacidad de transformar viajes en recuerdos inolvidables.";

export const story = [
  "Kastell Tours & Events nace en 2021 en San José, Costa Rica, de la visión de combinar el arte de viajar con la excelencia en el servicio, donde la elegancia, la creatividad y la pasión son protagonistas.",
  "Somos una Destination Management Company: diseñamos, coordinamos y operamos experiencias de viaje personalizadas, bodas destino, viajes corporativos, incentivos y experiencias de lujo en todo el país. Conocemos Costa Rica desde adentro —sus rincones, su gente y sus ritmos— y trabajamos con una red de proveedores de confianza para que cada servicio responda al mismo estándar.",
  "Creemos que un gran viaje no se mide por la cantidad de lugares visitados, sino por la forma en que te hace sentir. Por eso escuchamos primero, diseñamos después y acompañamos siempre.",
];

export const values: { title: string; description: string }[] = [
  { title: "Elegancia", description: "La belleza está en la sencillez bien pensada y en los detalles que se sienten, aunque no se vean." },
  { title: "Creatividad", description: "Cada propuesta nace en blanco. Imaginamos experiencias que no existían hasta que las creamos para ti." },
  { title: "Pasión", description: "Amamos lo que hacemos y amamos Costa Rica. Esa energía se nota en cada viaje." },
  { title: "Excelencia", description: "Planificamos con rigor y ejecutamos con precisión, para que todo simplemente fluya." },
  { title: "Confianza", description: "Somos transparentes, cumplimos lo que prometemos y respondemos cuando nos necesitas." },
  { title: "Conexión", description: "Entre las personas, con la naturaleza y con las comunidades que nos reciben." },
  { title: "Sostenibilidad", description: "Viajamos cuidando el destino que nos inspira, hoy y para las próximas generaciones." },
];

export const audiences = {
  b2b: {
    title: "Para la industria",
    intro:
      "Somos el aliado local de quienes venden Costa Rica en el mundo: respondemos rápido, operamos con precisión y cuidamos a tus clientes como propios.",
    items: [
      "Agencias de viajes internacionales",
      "Tour operadores y mayoristas turísticos",
      "Wedding planners internacionales",
      "Empresas organizadoras de incentivos",
      "Agencias de viajes corporativos",
    ],
  },
  b2c: {
    title: "Para viajeros",
    intro:
      "Para quienes buscan algo más que un paquete: una experiencia pensada para su historia, su ritmo y sus sueños.",
    items: [
      "Viajeros de lujo",
      "Parejas y lunas de miel",
      "Grupos privados y familias",
      "Viajeros que buscan experiencias personalizadas",
      "Nómadas digitales",
    ],
  },
};

export const differentiators: { title: string; description: string; icon: string }[] = [
  {
    title: "Atención antes, durante y después",
    description: "Te acompañamos desde la primera idea hasta el regreso a casa, con una persona que conoce tu viaje de memoria.",
    icon: "hand-heart",
  },
  {
    title: "Itinerarios 100% a la medida",
    description: "Nada de paquetes reciclados: cada itinerario se diseña desde cero según tus intereses, estilo y expectativas.",
    icon: "pen-tool",
  },
  {
    title: "Sostenibilidad real",
    description: "Trabajamos con comunidades locales y prácticas responsables, porque el lujo verdadero cuida el destino.",
    icon: "leaf",
  },
  {
    title: "Respuesta rápida",
    description: "Viajeros y agencias reciben respuestas ágiles y claras. Tu tiempo también es parte de la experiencia.",
    icon: "zap",
  },
  {
    title: "Red de proveedores de confianza",
    description: "Hoteles, transportistas, guías y creativos en todo el país, seleccionados por su calidad y su trato.",
    icon: "network",
  },
  {
    title: "Coordinación integral",
    description: "Un solo equipo coordina cada servicio del viaje: hospedaje, traslados, tours, eventos y los detalles entre ellos.",
    icon: "layers",
  },
];

/**
 * Cifras del bloque de propuesta de valor.
 * TODO: cuando el cliente confirme el número real de experiencias diseñadas,
 * agregar una tarjeta { value: "+X", label: "experiencias diseñadas" }.
 */
export const stats: { value: string; label: string }[] = [
  { value: "2021", label: "Diseñando experiencias desde San José, Costa Rica" },
  { value: "100%", label: "Itinerarios hechos a la medida" },
  { value: "5", label: "Líneas de experiencia: lujo, bodas, corporativo, a la medida y multidestino" },
  { value: "1", label: "Solo equipo coordinando cada detalle de tu viaje" },
];
