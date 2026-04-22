import { useState } from "react";

const steps = [
  // ──────────────── BACKBONE ────────────────
  {
    section: "BACKBONE CORE",
    color: "#0ea5e9",
    icon: "🌐",
    steps: [
      {
        id: 1,
        title: "Agregar los 3 Routers del Núcleo (Router-PT)",
        device: "Router-PT (genérico de Packet Tracer)",
        cable: "—",
        action: "arrastrar",
        detail: [
          "En el panel inferior izquierdo, hacer clic en la categoría 'Routers'.",
          "Seleccionar el modelo 'Router-PT' (es el router genérico de Packet Tracer, NO el 2911).",
          "Arrastrar y soltar 3 veces en el área de trabajo.",
          "Nombrarlos (doble clic sobre cada uno): R-Core1, R-Core2, R-Core3.",
          "Colocarlos formando un TRIÁNGULO: R-Core1 arriba al centro, R-Core2 abajo izquierda, R-Core3 abajo derecha.",
          "IMPORTANTE: Se usa Router-PT y NO el 2911 porque el Router-PT soporta puertos de fibra óptica, que son obligatorios en el núcleo del backbone.",
        ],
        tip: "El Router-PT aparece en la lista de routers como un ícono genérico azul. Es diferente al 2911 que tiene forma de router real. Asegurarse de elegir el correcto antes de arrastrar.",
      },
      {
        id: 2,
        title: "Agregar Routers de Borde (Router 2911)",
        device: "Router 2911",
        cable: "—",
        action: "arrastrar",
        detail: [
          "Seleccionar el modelo '2911' en la categoría 'Routers'.",
          "Arrastrar 4 routers 2911 fuera del triángulo del núcleo.",
          "Nombrarlos: R-Central1 (derecha del triángulo), R-Central2 (más a la derecha), R-Norte (arriba izquierda), R-Occidente (abajo izquierda).",
          "Colocarlos en los extremos del área de trabajo, cada uno apuntando hacia la sede que representa.",
          "Estos routers NO necesitan fibra, por eso se usa el 2911 estándar.",
        ],
        tip: "Los routers de borde solo necesitan puertos GigabitEthernet y Serial, que el 2911 ya trae de fábrica. No es necesario agregarles módulos adicionales.",
      },
      {
        id: 3,
        title: "Enlace Fibra Óptica: R-Core1 ↔ R-Core3",
        device: "Router-PT (ya colocados en paso 1)",
        cable: "Cable de Fibra Óptica",
        action: "conectar",
        detail: [
          "En el panel de cables (ícono del rayo en la barra inferior), buscar y seleccionar el cable 'Fiber' (fibra óptica). Es de color celeste/azul claro.",
          "Hacer clic en R-Core1 → seleccionar el puerto de fibra disponible (aparece como 'Fiber0/0' o similar en el Router-PT).",
          "Luego clic en R-Core3 → seleccionar su puerto de fibra.",
          "Se verá una línea celeste entre ambos routers. Ese es el enlace de fibra óptica real.",
          "Este enlace representa el canal de alta velocidad del núcleo del backbone.",
        ],
        tip: "El cable de fibra SOLO funciona entre Router-PT porque tienen puertos de fibra nativos. Si se intenta usar entre routers 2911 no aparecerá la opción de puerto de fibra. Esta es la razón principal por la que se usan Router-PT en el núcleo.",
      },
      {
        id: 4,
        title: "Enlace EtherChannel: R-Core1 ↔ R-Core2",
        device: "—",
        cable: "Cable Directo (Copper Straight-Through) × 2",
        action: "conectar",
        detail: [
          "Seleccionar cable 'Copper Straight-Through' (cable negro/naranja) en el panel de cables.",
          "CABLE 1: Clic en R-Core1 → elegir GigabitEthernet0/0 → clic en R-Core2 → elegir GigabitEthernet0/0.",
          "CABLE 2: Clic en R-Core1 → elegir GigabitEthernet1/0 → clic en R-Core2 → elegir GigabitEthernet1/0.",
          "Estos 2 cables físicos paralelos forman el EtherChannel (se configurarán como Port-Channel en la fase de configuración).",
          "El Router-PT tiene múltiples puertos GigabitEthernet disponibles para esto.",
        ],
        tip: "Se verán 2 líneas paralelas entre R-Core1 y R-Core2. Eso es correcto y representa visualmente el canal agregado de mayor ancho de banda.",
      },
      {
        id: 5,
        title: "Enlace Serial WAN: R-Core2 ↔ R-Core3",
        device: "Router-PT (ya incluye puertos Serial nativos)",
        cable: "Cable Serial DCE",
        action: "conectar",
        detail: [
          "El Router-PT ya incluye puertos Serial por defecto, no se necesita agregar módulos adicionales.",
          "En el panel de cables, seleccionar 'Serial DCE' (tiene un pequeño ícono de reloj en uno de sus extremos).",
          "Clic en R-Core2 → seleccionar puerto Serial0/0 (o el primer Serial disponible).",
          "Clic en R-Core3 → seleccionar puerto Serial0/0.",
          "El extremo con el ícono de reloj (DCE) debe quedar conectado a R-Core2, que será quien provea el clock rate.",
        ],
        tip: "Al conectar el cable Serial DCE, Packet Tracer muestra qué extremo es DCE con un pequeño reloj. Si se conecta al revés, se puede corregir eliminando el cable y reconectando. R-Core2 actúa como DCE porque es el lado que 'provee la señal de reloj' al enlace WAN.",
      },
      {
        id: 6,
        title: "Conectar Routers de Borde al Núcleo",
        device: "—",
        cable: "Cable Directo (Straight-Through)",
        action: "conectar",
        detail: [
          "Usar cable 'Copper Straight-Through' para todos estos enlaces.",
          "R-Core1 GigabitEthernet2/0 → R-Central1 GigabitEthernet0/0",
          "R-Core2 GigabitEthernet2/0 → R-Norte GigabitEthernet0/0",
          "R-Core3 GigabitEthernet2/0 → R-Occidente GigabitEthernet0/0",
          "R-Central1 GigabitEthernet0/1 → R-Central2 GigabitEthernet0/0",
          "Nota: En el Router-PT los puertos Fiber0/0 y los GigabitEthernet están separados. Usar los GigabitEthernet para estas conexiones hacia los routers 2911.",
        ],
        tip: "Cada router de borde tiene UNA sola conexión hacia el núcleo. R-Central1 además se conecta a R-Central2 para el segmento del Data Center. Verificar que no se estén usando los puertos de fibra para estas conexiones.",
      },
    ],
  },
  // ──────────────── OCCIDENTE ────────────────
  {
    section: "SEDE OCCIDENTE",
    color: "#f97316",
    icon: "🏦",
    steps: [
      {
        id: 7,
        title: "Agregar Switch de Distribución",
        device: "Switch 2960-24TT",
        cable: "—",
        action: "arrastrar",
        detail: [
          "En el panel inferior, clic en la categoría 'Switches'.",
          "Seleccionar modelo '2960-24TT'.",
          "Arrastrar 1 switch cerca de R-Occidente.",
          "Nombrarlo: SW-Dist-OCC.",
          "Este será el Switch Principal y VTP Server de la sede.",
          "Colocarlo justo debajo de R-Occidente, dejando espacio hacia abajo para los switches de acceso.",
        ],
        tip: "El 2960-24TT tiene 24 puertos FastEthernet y 2 puertos GigabitEthernet. Se usará uno de los GigabitEthernet para el enlace hacia R-Occidente (trunk RoaS).",
      },
      {
        id: 8,
        title: "Agregar 4 Switches de Acceso",
        device: "Switch 2960-24TT",
        cable: "—",
        action: "arrastrar",
        detail: [
          "Arrastrar 4 switches 2960-24TT adicionales en fila horizontal debajo de SW-Dist-OCC.",
          "Nombrarlos de izquierda a derecha: SW-Cajas, SW-Asesores, SW-Gerencia, SW-Seguridad.",
          "Cada switch representará un área funcional con su propia VLAN.",
          "Dejar espacio debajo de cada uno para colocar las PCs de prueba.",
        ],
        tip: "La disposición en fila facilita la visualización de la topología en estrella. Mantener una separación uniforme entre switches para que el diagrama se vea ordenado.",
      },
      {
        id: 9,
        title: "Conectar SW-Dist-OCC con Switches de Acceso",
        device: "—",
        cable: "Cable Directo (Straight-Through)",
        action: "conectar",
        detail: [
          "Usar cable 'Copper Straight-Through' para todos estos enlaces.",
          "SW-Dist-OCC FastEthernet0/1 → SW-Cajas FastEthernet0/1",
          "SW-Dist-OCC FastEthernet0/2 → SW-Asesores FastEthernet0/1",
          "SW-Dist-OCC FastEthernet0/3 → SW-Gerencia FastEthernet0/1",
          "SW-Dist-OCC FastEthernet0/4 → SW-Seguridad FastEthernet0/1",
          "Estos puertos serán configurados como TRUNK 802.1Q en la fase de configuración.",
        ],
        tip: "El puerto Fa0/1 de cada switch de acceso queda reservado como uplink hacia SW-Dist-OCC. Los puertos Fa0/2 en adelante de cada switch de acceso serán los puertos de acceso para las PCs.",
      },
      {
        id: 10,
        title: "Conectar R-Occidente con SW-Dist-OCC (Trunk RoaS)",
        device: "—",
        cable: "Cable Directo (Straight-Through)",
        action: "conectar",
        detail: [
          "Usar cable 'Copper Straight-Through'.",
          "R-Occidente GigabitEthernet0/1 → SW-Dist-OCC GigabitEthernet0/1",
          "Este es el único enlace físico entre el router y la red de la sede.",
          "Toda la comunicación inter-VLAN de la sede pasará por este único cable (técnica Router-on-a-Stick).",
        ],
        tip: "Solo UN cable entre R-Occidente y SW-Dist-OCC. La técnica Router-on-a-Stick permite que un solo enlace físico transporte múltiples VLANs usando subinterfaces en el router, cada una etiquetada con 802.1Q.",
      },
      {
        id: 11,
        title: "Agregar PCs de Prueba por VLAN",
        device: "PC genérico",
        cable: "Cable Directo (Straight-Through)",
        action: "arrastrar",
        detail: [
          "En 'End Devices', seleccionar el ícono de 'PC'.",
          "Arrastrar 1 PC debajo de cada switch de acceso.",
          "Nombrarlos: PC-Caja1, PC-Asesor1, PC-Gerente1, PC-Camara1.",
          "Conectar usando 'Copper Straight-Through': cada PC puerto FastEthernet → puerto Fa0/2 del switch de acceso correspondiente.",
        ],
        tip: "Con 1 PC por VLAN es suficiente para hacer pruebas de conectividad (ping). Se pueden agregar más hosts después si se requiere demostrar múltiples usuarios por área.",
      },
    ],
  },
  // ──────────────── NORTE ────────────────
  {
    section: "SEDE NORTE",
    color: "#22c55e",
    icon: "📊",
    steps: [
      {
        id: 12,
        title: "Agregar Switch Core (Root Bridge)",
        device: "Switch 2960-24TT",
        cable: "—",
        action: "arrastrar",
        detail: [
          "En la categoría 'Switches', seleccionar '2960-24TT'.",
          "Arrastrar 1 switch al área de trabajo cerca de R-Norte.",
          "Nombrarlo: SW-Core-N.",
          "Este será el Root Bridge forzado para todas las VLANs de la sede.",
          "Colocarlo en la parte superior del área destinada a la Sede Norte.",
        ],
        tip: "SW-Core-N es el switch más importante de esta sede. Centrarlo visualmente para que cuando se agreguen los switches de acceso el triángulo quede simétrico y fácil de leer.",
      },
      {
        id: 13,
        title: "Agregar 2 Switches de Acceso",
        device: "Switch 2960-24TT",
        cable: "—",
        action: "arrastrar",
        detail: [
          "Arrastrar 2 switches 2960-24TT debajo de SW-Core-N.",
          "Nombrarlos: SW-A-N1 (izquierda) y SW-A-N2 (derecha).",
          "Posicionarlos formando la BASE del triángulo, con SW-Core-N en el vértice superior.",
          "Mantener suficiente separación entre SW-A-N1 y SW-A-N2 para que el cable entre ellos sea visible.",
        ],
        tip: "La forma triangular es intencional: cada lado del triángulo es un enlace físico real. Los 3 enlaces crean los bucles que Rapid PVST+ gestionará bloqueando el puerto menos óptimo.",
      },
      {
        id: 14,
        title: "Conectar en Triángulo (Bucles Intencionales)",
        device: "—",
        cable: "Cable Directo (Straight-Through)",
        action: "conectar",
        detail: [
          "Usar cable 'Copper Straight-Through' para los 3 enlaces.",
          "ENLACE 1 (lado izquierdo): SW-Core-N Fa0/1 → SW-A-N1 Fa0/1",
          "ENLACE 2 (lado derecho): SW-Core-N Fa0/2 → SW-A-N2 Fa0/1",
          "ENLACE 3 (base — el bucle): SW-A-N1 Fa0/2 → SW-A-N2 Fa0/2",
          "Al conectar el tercer cable, un puerto se pondrá de color naranja/ámbar automáticamente. Eso es STP detectando y bloqueando el bucle.",
        ],
        tip: "El puerto naranja/ámbar que aparece al conectar el tercer cable es completamente normal y esperado. Significa que STP está funcionando correctamente. En la fase de configuración se cambiará a Rapid PVST+ para que la convergencia sea mucho más rápida.",
      },
      {
        id: 15,
        title: "Conectar R-Norte con SW-Core-N",
        device: "—",
        cable: "Cable Directo (Straight-Through)",
        action: "conectar",
        detail: [
          "Usar cable 'Copper Straight-Through'.",
          "R-Norte GigabitEthernet0/1 → SW-Core-N GigabitEthernet0/1",
          "Este es el uplink de toda la Sede Norte hacia el backbone nacional.",
          "Todo el tráfico de la sede que salga hacia otras sedes pasará por este enlace.",
        ],
        tip: "El uplink solo va al Root Bridge (SW-Core-N) y no a los switches de acceso. Esto es intencional: centralizar el punto de salida en el switch más capaz garantiza rutas óptimas en el árbol de expansión.",
      },
      {
        id: 16,
        title: "Agregar PCs de Prueba por VLAN",
        device: "PC genérico",
        cable: "Cable Directo (Straight-Through)",
        action: "arrastrar",
        detail: [
          "En 'End Devices', seleccionar 'PC'.",
          "Arrastrar debajo de SW-A-N1: PC-Analista1 y PC-Legal1.",
          "Arrastrar debajo de SW-A-N2: PC-Auditor1.",
          "Conectar con 'Copper Straight-Through': PC-Analista1 → SW-A-N1 Fa0/3, PC-Legal1 → SW-A-N1 Fa0/4, PC-Auditor1 → SW-A-N2 Fa0/3.",
        ],
        tip: "SW-A-N1 albergará las VLANs 50 (Análisis) y 70 (Legal). SW-A-N2 albergará la VLAN 60 (Auditoría). Separar los hosts en switches distintos refuerza la segmentación física además de la lógica.",
      },
    ],
  },
  // ──────────────── ORIENTE ────────────────
  {
    section: "SEDE ORIENTE",
    color: "#ef4444",
    icon: "🏛️",
    steps: [
      {
        id: 17,
        title: "Agregar 2 Switches Multicapa (MS1 y MS2)",
        device: "Switch 3560-24PS (Multilayer / Layer 3)",
        cable: "—",
        action: "arrastrar",
        detail: [
          "En la categoría 'Switches', seleccionar el modelo '3560-24PS'.",
          "Arrastrar 2 unidades al área de la Sede Oriente.",
          "Nombrarlos: MS1 (izquierda, será HSRP Active) y MS2 (derecha, será HSRP Standby).",
          "Colocarlos en la fila superior del área Oriente, con suficiente separación entre sí.",
          "IMPORTANTE: Deben ser el modelo 3560 o similar (Layer 3). El 2960 básico NO soporta HSRP.",
        ],
        tip: "El 3560 se distingue visualmente del 2960 en Packet Tracer porque su ícono tiene una apariencia ligeramente diferente. Verificar el nombre del modelo antes de arrastrar.",
      },
      {
        id: 18,
        title: "Agregar Switch de Acceso",
        device: "Switch 2960-24TT",
        cable: "—",
        action: "arrastrar",
        detail: [
          "Arrastrar 1 switch 2960-24TT debajo y centrado entre MS1 y MS2.",
          "Nombrarlo: SW-ACC-OR.",
          "Este switch conecta los hosts finales y se enlazará simultáneamente a MS1 y MS2.",
          "Su posición centrada entre ambos switches multicapa es clave para visualizar el acceso dual.",
        ],
        tip: "SW-ACC-OR es el único switch de acceso de esta sede. Todos los hosts de Bóveda y Plataforma se conectarán a él, y él se conectará a los dos switches multicapa para garantizar redundancia.",
      },
      {
        id: 19,
        title: "Conectar SW-ACC-OR a MS1 y MS2 (Dual Uplink)",
        device: "—",
        cable: "Cable Directo (Straight-Through)",
        action: "conectar",
        detail: [
          "Usar cable 'Copper Straight-Through' para los 3 enlaces siguientes.",
          "ENLACE 1 (uplink principal): SW-ACC-OR Fa0/1 → MS1 FastEthernet0/1",
          "ENLACE 2 (uplink redundante): SW-ACC-OR Fa0/2 → MS2 FastEthernet0/1",
          "ENLACE 3 (sincronización HSRP): MS1 Fa0/2 → MS2 Fa0/2",
          "Los 3 cables deben estar conectados simultáneamente para que HSRP funcione correctamente.",
        ],
        tip: "Los 2 uplinks desde SW-ACC-OR hacia MS1 y MS2 son el corazón de la redundancia de esta sede. Cuando MS1 falle, el tráfico fluirá automáticamente por el segundo cable hacia MS2, sin que las PCs noten la interrupción.",
      },
      {
        id: 20,
        title: "Conectar MS1 y MS2 al Backbone",
        device: "—",
        cable: "Cable Directo (Straight-Through)",
        action: "conectar",
        detail: [
          "Según el proyecto, MS1 y MS2 son parte del backbone predefinido por la cátedra.",
          "Si MS1 y MS2 ya están en el backbone proporcionado: verificar que tengan un puerto libre para conectarse al router de borde asignado.",
          "Si se construye desde cero: R-Core1 GigabitEthernet3/0 → MS1 GigabitEthernet0/1 (confirmar con el tutor el router de borde asignado a esta sede).",
          "Verificar que ambos switches multicapa tengan visibilidad hacia el backbone para que HSRP pueda enrutar correctamente.",
        ],
        tip: "Confirmar con el tutor cuál router del backbone se conecta a la Sede Oriente, ya que el proyecto indica que MS1 y MS2 son parte del núcleo predefinido.",
      },
      {
        id: 21,
        title: "Agregar PCs por VLAN (Bóveda y Plataforma)",
        device: "PC genérico",
        cable: "Cable Directo (Straight-Through)",
        action: "arrastrar",
        detail: [
          "En 'End Devices', seleccionar 'PC'.",
          "Arrastrar debajo de SW-ACC-OR: PC-Boveda1 y PC-Plataforma1.",
          "Conectar con 'Copper Straight-Through': PC-Boveda1 → SW-ACC-OR Fa0/10",
          "Conectar: PC-Plataforma1 → SW-ACC-OR Fa0/11",
        ],
        tip: "Ambas VLANs (80-Bóveda y 90-Plataforma) pasan por el mismo switch de acceso físico. Las VLANs las separan lógicamente. En la fase de pruebas se demostrará que al apagar MS1, ambas PCs siguen con conectividad a través de MS2.",
      },
    ],
  },
  // ──────────────── DATA CENTER ────────────────
  {
    section: "DATA CENTER Y SEDE CENTRAL",
    color: "#8b5cf6",
    icon: "🖥️",
    steps: [
      {
        id: 22,
        title: "Agregar Switch de Distribución del DC",
        device: "Switch 3560-24PS (Multilayer)",
        cable: "—",
        action: "arrastrar",
        detail: [
          "En 'Switches', seleccionar el modelo '3560-24PS'.",
          "Arrastrar 1 switch al área del Data Center, cerca de R-Central2.",
          "Nombrarlo: SW-Dist-DC.",
          "Este switch actúa como capa de distribución del Data Center.",
          "Conectar inmediatamente: R-Central2 GigabitEthernet0/1 → SW-Dist-DC GigabitEthernet0/1 usando cable 'Copper Straight-Through'.",
        ],
        tip: "Se usa un switch 3560 (Layer 3) en distribución porque el Data Center puede necesitar enrutamiento entre VLANs a nivel de switch, sin depender siempre del router. Colocarlo directamente debajo de R-Central2 para mantener la jerarquía visual.",
      },
      {
        id: 23,
        title: "Agregar Switches de Acceso",
        device: "Switch 2960-24TT",
        cable: "—",
        action: "arrastrar",
        detail: [
          "En 'Switches', seleccionar '2960-24TT'.",
          "Arrastrar 2 switches debajo de SW-Dist-DC.",
          "Nombrarlos: SW-Acc-BD (izquierda, para servidores de Base de Datos) y SW-Acc-Web (derecha, para Web_Apps y NOC).",
          "SW-Acc-BD será el que recibirá el EtherChannel. SW-Acc-Web usará un enlace estándar.",
        ],
        tip: "La separación física de los servidores de BD y Web en switches distintos mejora la seguridad y el rendimiento. Si un switch de acceso falla, solo afecta su granja de servidores y no toda la infraestructura.",
      },
      {
        id: 24,
        title: "Conectar EtherChannel: SW-Dist-DC ↔ SW-Acc-BD",
        device: "—",
        cable: "Cable Directo (Straight-Through) × 2",
        action: "conectar",
        detail: [
          "Usar cable 'Copper Straight-Through' dos veces entre los mismos switches.",
          "CABLE 1: SW-Dist-DC Fa0/1 → SW-Acc-BD Fa0/1",
          "CABLE 2: SW-Dist-DC Fa0/2 → SW-Acc-BD Fa0/2",
          "Estos 2 cables físicos paralelos representan el EtherChannel LACP (Port-Channel1) que se configurará después.",
          "Conectar también el segundo switch: SW-Dist-DC Fa0/3 → SW-Acc-Web Fa0/1 (1 solo cable, sin EtherChannel).",
        ],
        tip: "Se verán 2 líneas paralelas entre SW-Dist-DC y SW-Acc-BD, igual que en el backbone entre R-Core1 y R-Core2. Ese doble cable es el EtherChannel LACP y duplica el ancho de banda disponible hacia los servidores de base de datos.",
      },
      {
        id: 25,
        title: "Agregar Servidores",
        device: "Server (servidor genérico de PT)",
        cable: "Cable Directo (Straight-Through)",
        action: "arrastrar",
        detail: [
          "En 'End Devices', seleccionar el ícono de 'Server' (no confundir con PC).",
          "Arrastrar debajo de SW-Acc-BD: Server-BD1 y Server-BD2.",
          "Arrastrar debajo de SW-Acc-Web: Server-Web1 y Server-NOC1.",
          "Conectar con 'Copper Straight-Through': Server-BD1 → SW-Acc-BD Fa0/5, Server-BD2 → SW-Acc-BD Fa0/6.",
          "Conectar: Server-Web1 → SW-Acc-Web Fa0/5, Server-NOC1 → SW-Acc-Web Fa0/6.",
        ],
        tip: "Usar el ícono de Server y no de PC para los servidores del Data Center. Visualmente se ve diferente en el diagrama y refleja mejor la realidad de la infraestructura. Nombrarlos claramente para identificarlos fácilmente en las pruebas.",
      },
    ],
  },
];

const cableColors = {
  "Cable Directo (Straight-Through)": { color: "#22c55e", label: "🟩 Directo" },
  "Cable Serial DCE": { color: "#f97316", label: "🟧 Serial DCE" },
  "Cable de Fibra Óptica": { color: "#60a5fa", label: "🟦 Fibra Óptica" },
  "Cable Directo (Copper Straight-Through) × 2": { color: "#86efac", label: "🟩🟩 Directo ×2 (EtherChannel)" },
  "Cable Directo (Straight-Through) × 2": { color: "#86efac", label: "🟩🟩 Directo ×2 (EtherChannel)" },
  "—": { color: "#6b7280", label: "— (solo arrastrar)" },
};

function getCableInfo(cable) {
  for (const key of Object.keys(cableColors)) {
    if (cable.startsWith(key.split("×")[0].trim())) return cableColors[key];
  }
  return { color: "#6b7280", label: cable };
}

export default function App() {
  const [openSection, setOpenSection] = useState(0);
  const [openStep, setOpenStep] = useState(null);
  const [completed, setCompleted] = useState({});

  const toggleComplete = (id) => {
    setCompleted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const totalSteps = steps.reduce((a, s) => a + s.steps.length, 0);
  const completedCount = Object.values(completed).filter(Boolean).length;
  const progress = Math.round((completedCount / totalSteps) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f172a",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      color: "#e2e8f0",
      padding: "24px 16px",
    }}>
      <div style={{ maxWidth: 820, margin: "0 auto" }}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
          border: "1px solid #334155",
          borderRadius: 16,
          padding: "24px 28px",
          marginBottom: 24,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
            <span style={{ fontSize: 28 }}>🗺️</span>
            <div>
              <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#f1f5f9" }}>
                Guía de Topología — BanTech GT
              </h1>
              <p style={{ margin: 0, fontSize: 13, color: "#94a3b8" }}>
                Cisco Packet Tracer · Carnet 201504070 · Solo diseño físico
              </p>
            </div>
          </div>

          {/* Aviso de corrección */}
          <div style={{
            marginTop: 14,
            background: "#1c2a3a",
            border: "1px solid #0ea5e933",
            borderLeft: "3px solid #0ea5e9",
            borderRadius: "0 8px 8px 0",
            padding: "10px 14px",
            fontSize: 12,
            color: "#94a3b8",
          }}>
            <span style={{ color: "#0ea5e9", fontWeight: 700 }}>📌 Nota de dispositivos: </span>
            Los routers del <strong style={{ color: "#e2e8f0" }}>núcleo (R-Core1, R-Core2, R-Core3)</strong> usan <strong style={{ color: "#60a5fa" }}>Router-PT</strong> porque soportan fibra óptica real.
            Los routers de borde <strong style={{ color: "#e2e8f0" }}>(R-Norte, R-Occidente, R-Central1, R-Central2)</strong> usan <strong style={{ color: "#94a3b8" }}>Router 2911</strong>.
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ fontSize: 12, color: "#94a3b8" }}>Progreso general</span>
              <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>{completedCount}/{totalSteps} pasos</span>
            </div>
            <div style={{ background: "#1e293b", borderRadius: 99, height: 8, overflow: "hidden", border: "1px solid #334155" }}>
              <div style={{
                width: `${progress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #0ea5e9, #8b5cf6)",
                borderRadius: 99,
                transition: "width 0.4s ease",
              }} />
            </div>
          </div>

          {/* Cable legend */}
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
            <span style={{ fontSize: 11, color: "#64748b", alignSelf: "center" }}>Cables:</span>
            {[
              { label: "🟩 Directo", sub: "Straight-Through" },
              { label: "🟩🟩 ×2", sub: "EtherChannel" },
              { label: "🟧 Serial DCE", sub: "WAN" },
              { label: "🟦 Fibra", sub: "Solo en Router-PT" },
            ].map((c) => (
              <span key={c.label} style={{
                fontSize: 11, background: "#1e293b", border: "1px solid #334155",
                borderRadius: 6, padding: "3px 8px", color: "#94a3b8",
              }}>
                {c.label} <span style={{ color: "#64748b" }}>({c.sub})</span>
              </span>
            ))}
          </div>
        </div>

        {/* Sections */}
        {steps.map((section, si) => {
          const sectionDone = section.steps.filter(s => completed[s.id]).length;
          const isOpen = openSection === si;
          return (
            <div key={si} style={{ marginBottom: 16 }}>
              <button
                onClick={() => setOpenSection(isOpen ? -1 : si)}
                style={{
                  width: "100%",
                  background: isOpen
                    ? `linear-gradient(135deg, ${section.color}22, #1e293b)`
                    : "#1e293b",
                  border: `1px solid ${isOpen ? section.color + "66" : "#334155"}`,
                  borderRadius: isOpen ? "12px 12px 0 0" : 12,
                  padding: "16px 20px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#f1f5f9",
                  transition: "all 0.2s",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 22 }}>{section.icon}</span>
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: isOpen ? section.color : "#e2e8f0" }}>
                      {section.section}
                    </div>
                    <div style={{ fontSize: 12, color: "#64748b" }}>
                      {section.steps.length} pasos · {sectionDone} completados
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    background: sectionDone === section.steps.length ? "#22c55e22" : "#334155",
                    border: `1px solid ${sectionDone === section.steps.length ? "#22c55e" : "#475569"}`,
                    borderRadius: 99,
                    padding: "2px 10px",
                    fontSize: 11,
                    color: sectionDone === section.steps.length ? "#22c55e" : "#94a3b8",
                  }}>
                    {sectionDone}/{section.steps.length}
                  </div>
                  <span style={{ color: section.color, fontSize: 18, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "none" }}>▾</span>
                </div>
              </button>

              {isOpen && (
                <div style={{
                  border: `1px solid ${section.color}44`,
                  borderTop: "none",
                  borderRadius: "0 0 12px 12px",
                  overflow: "hidden",
                }}>
                  {section.steps.map((step, idx) => {
                    const isStepOpen = openStep === step.id;
                    const isDone = completed[step.id];
                    const cable = getCableInfo(step.cable);
                    return (
                      <div key={step.id} style={{
                        borderBottom: idx < section.steps.length - 1 ? "1px solid #1e293b" : "none",
                        background: isDone ? "#052e16" : isStepOpen ? "#0f2233" : "#111827",
                        transition: "background 0.2s",
                      }}>
                        <div
                          onClick={() => setOpenStep(isStepOpen ? null : step.id)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            padding: "14px 20px",
                            cursor: "pointer",
                          }}
                        >
                          <button
                            onClick={(e) => { e.stopPropagation(); toggleComplete(step.id); }}
                            style={{
                              width: 24, height: 24,
                              borderRadius: 6,
                              border: `2px solid ${isDone ? "#22c55e" : "#475569"}`,
                              background: isDone ? "#22c55e" : "transparent",
                              color: "white",
                              fontSize: 14,
                              cursor: "pointer",
                              flexShrink: 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {isDone ? "✓" : ""}
                          </button>

                          <div style={{
                            width: 28, height: 28,
                            borderRadius: 8,
                            background: `${section.color}22`,
                            border: `1px solid ${section.color}44`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 12,
                            fontWeight: 700,
                            color: section.color,
                            flexShrink: 0,
                          }}>
                            {step.id}
                          </div>

                          <div style={{ flex: 1 }}>
                            <div style={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: isDone ? "#4ade80" : "#f1f5f9",
                              textDecoration: isDone ? "line-through" : "none",
                            }}>
                              {step.title}
                            </div>
                            <div style={{ display: "flex", gap: 8, marginTop: 4, flexWrap: "wrap" }}>
                              {step.device !== "—" && (
                                <span style={{
                                  fontSize: 11, background: "#1e293b",
                                  border: "1px solid #334155", borderRadius: 4,
                                  padding: "1px 7px", color: "#94a3b8",
                                }}>
                                  📦 {step.device}
                                </span>
                              )}
                              {step.cable !== "—" && (
                                <span style={{
                                  fontSize: 11, background: "#1e293b",
                                  border: `1px solid ${cable.color}55`, borderRadius: 4,
                                  padding: "1px 7px", color: cable.color,
                                }}>
                                  🔌 {cable.label}
                                </span>
                              )}
                              <span style={{
                                fontSize: 11, background: "#1e293b",
                                border: "1px solid #334155", borderRadius: 4,
                                padding: "1px 7px", color: "#64748b",
                                textTransform: "uppercase", letterSpacing: "0.05em",
                              }}>
                                {step.action}
                              </span>
                            </div>
                          </div>
                          <span style={{ color: "#475569", fontSize: 16, transition: "transform 0.2s", transform: isStepOpen ? "rotate(180deg)" : "none" }}>▾</span>
                        </div>

                        {isStepOpen && (
                          <div style={{ padding: "4px 20px 16px 64px" }}>
                            <ol style={{ margin: 0, paddingLeft: 20, color: "#94a3b8" }}>
                              {step.detail.map((d, i) => (
                                <li key={i} style={{ marginBottom: 6, fontSize: 13, lineHeight: 1.6 }}>
                                  {d}
                                </li>
                              ))}
                            </ol>
                            <div style={{
                              marginTop: 12,
                              background: "#1c2a3a",
                              border: `1px solid ${section.color}33`,
                              borderLeft: `3px solid ${section.color}`,
                              borderRadius: "0 8px 8px 0",
                              padding: "10px 14px",
                              fontSize: 12,
                              color: "#94a3b8",
                            }}>
                              <span style={{ color: section.color, fontWeight: 600 }}>💡 Tip: </span>
                              {step.tip}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        <div style={{ textAlign: "center", padding: "16px", color: "#334155", fontSize: 12 }}>
          BanTech GT · Redes de Computadoras 1 · Carnet 201504070
        </div>
      </div>
    </div>
  );
}