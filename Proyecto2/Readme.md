**UNIVERSIDAD DE SAN CARLOS DE GUATEMALA**   
**FACULTAD DE INGENIERÍA**  
**INGENIERÍA EN SISTEMAS**  
**REDES DE COMPUTADORAS 1**  
**PRIMER SEMESTRE DE 2026**

| Registro académico: 201504070  | CUI: 3236666040511 |
| :---- | :---- |
| **Nombre:** Hugo Jorge Luis Perez Arana | **Proyecto:** 2 |
| **Aux:** Josseline Griselda Montecinos Hernández | **Sección:** A |

---

# 📘 Documentación Técnica — Red Nacional BanTech GT

## 1. Capturas de Topología

---

## 2. Tablas de Subnetting — VLSM y FLSM

> **Nota:** Se utilizó como espacio de direcciones base `172.16.70.0/24` para las redes de borde (XX=70) y `10.70.0.0/16` para el backbone.

---

### 📌 BACKBONE CORE — Enlaces Punto a Punto (FLSM /30)

Se usa FLSM con prefijo **/30** (2 hosts útiles por enlace).  
**Bloque base:** `10.70.0.0/24`

| Enlace                  | Red           | Máscara         | Gateway/IP1   | IP2           | Broadcast     |
|-------------------------|---------------|-----------------|---------------|---------------|---------------|
| R-Core1 ↔ R-Core2       | 10.70.0.0/30  | 255.255.255.252 | 10.70.0.1     | 10.70.0.2     | 10.70.0.3     |
| R-Core1 ↔ R-Core3       | 10.70.0.4/30  | 255.255.255.252 | 10.70.0.5     | 10.70.0.6     | 10.70.0.7     |
| R-Core2 ↔ R-Core3       | 10.70.0.8/30  | 255.255.255.252 | 10.70.0.9     | 10.70.0.10    | 10.70.0.11    |
| R-Core1 ↔ R-Central1    | 10.70.0.12/30 | 255.255.255.252 | 10.70.0.13    | 10.70.0.14    | 10.70.0.15    |
| R-Core2 ↔ R-Norte       | 10.70.0.16/30 | 255.255.255.252 | 10.70.0.17    | 10.70.0.18    | 10.70.0.19    |
| R-Core3 ↔ R-Occidente   | 10.70.0.20/30 | 255.255.255.252 | 10.70.0.21    | 10.70.0.22    | 10.70.0.23    |
| R-Central1 ↔ R-Central2 | 10.70.0.24/30 | 255.255.255.252 | 10.70.0.25    | 10.70.0.26    | 10.70.0.27    |

---

### 📌 SEDE OCCIDENTE — VLSM

**VLANs:** Y=0 → IDs: 10, 20, 30, 40  
**Bloque base:** `172.16.70.0/24`  
**Método:** VLSM (ordenado de mayor a menor número de hosts)

| VLAN | Nombre    | ID VLAN | Hosts Req. | Hosts Útiles | Red             | Máscara         | Gateway        | Rango Usable                   | Broadcast      |
|------|-----------|---------|------------|--------------|-----------------|-----------------|----------------|-------------------------------|----------------|
| 1Y   | Cajas     | 10      | 45         | 62           | 172.16.70.0/26  | 255.255.255.192 | 172.16.70.1    | 172.16.70.2 – 172.16.70.62    | 172.16.70.63   |
| 2Y   | Asesores  | 20      | 30         | 30           | 172.16.70.64/27 | 255.255.255.224 | 172.16.70.65   | 172.16.70.66 – 172.16.70.94   | 172.16.70.95   |
| 4Y   | Seguridad | 40      | 12         | 14           | 172.16.70.96/28 | 255.255.255.240 | 172.16.70.97   | 172.16.70.98 – 172.16.70.110  | 172.16.70.111  |
| 3Y   | Gerencia  | 30      | 10         | 14           | 172.16.70.112/28| 255.255.255.240 | 172.16.70.113  | 172.16.70.114 – 172.16.70.126 | 172.16.70.127  |

> **VTP:** Dominio: `bantech70` | Password: `201504070`  
> **Trunk:** Puerto entre SW-Dist-OCC y R-Occidente (802.1Q)

---

### 📌 SEDE NORTE — VLSM

**VLANs:** Y=0 → IDs: 50, 60, 70  
**Bloque base:** `172.16.71.0/24`

| VLAN | Nombre   | ID VLAN | Hosts Req. | Hosts Útiles | Red              | Máscara         | Gateway       | Rango Usable                    | Broadcast       |
|------|----------|---------|------------|--------------|------------------|-----------------|---------------|---------------------------------|-----------------|
| 5Y   | Análisis | 50      | 50         | 62           | 172.16.71.0/26   | 255.255.255.192 | 172.16.71.1   | 172.16.71.2 – 172.16.71.62     | 172.16.71.63    |
| 6Y   | Auditoría| 60      | 25         | 30           | 172.16.71.64/27  | 255.255.255.224 | 172.16.71.65  | 172.16.71.66 – 172.16.71.94    | 172.16.71.95    |
| 7Y   | Legal    | 70      | 14         | 14           | 172.16.71.96/28  | 255.255.255.240 | 172.16.71.97  | 172.16.71.98 – 172.16.71.110   | 172.16.71.111   |

> **Root Bridge:** SW-Core-N (priority 4096 configurado manualmente)  
> **STP:** Rapid PVST+ habilitado en todos los switches

---

### 📌 SEDE ORIENTE — VLSM

**VLANs:** Y=0 → IDs: 80, 90  
**Bloque base:** `172.16.72.0/24`

| VLAN | Nombre     | ID VLAN | Hosts Req. | Hosts Útiles | Red              | Máscara         | Gateway Virtual (HSRP) | MS1 IP         | MS2 IP         | Broadcast      |
|------|------------|---------|------------|--------------|------------------|-----------------|------------------------|----------------|----------------|----------------|
| 8Y   | Bóveda     | 80      | 40         | 62           | 172.16.72.0/26   | 255.255.255.192 | 172.16.72.1            | 172.16.72.2    | 172.16.72.3    | 172.16.72.63   |
| 9Y   | Plataforma | 90      | 60         | 62           | 172.16.72.64/26  | 255.255.255.192 | 172.16.72.65           | 172.16.72.66   | 172.16.72.67   | 172.16.72.127  |

> **HSRP:** MS1 = Active (priority 110), MS2 = Standby (priority 100)  
> **IP Virtual VLAN 80:** 172.16.72.1 | **IP Virtual VLAN 90:** 172.16.72.65

---

### 📌 DATA CENTER Y SEDE CENTRAL — VLSM

**VLANs:** Y=0 → IDs: 10, 20, 30  
**Bloque base:** `172.16.73.0/24`

| VLAN | Nombre   | ID VLAN | Hosts Req. | Hosts Útiles | Red              | Máscara         | Gateway        | Rango Usable                    | Broadcast      |
|------|----------|---------|------------|--------------|------------------|-----------------|----------------|---------------------------------|----------------|
| 2Y   | Web_Apps | 20      | 28         | 30           | 172.16.73.0/27   | 255.255.255.224 | 10.70.0.58     | 172.16.73.2 – 172.16.73.30      | 172.16.73.31   |
| 1Y   | Core_BD  | 10      | 14         | 14           | 172.16.73.32/28  | 255.255.255.240 | 172.16.73.33   | 172.16.73.34 – 172.16.73.46     | 172.16.73.47   |
| 3Y   | NOC      | 30      | 10         | 14           | 172.16.73.48/28  | 255.255.255.240 | 172.16.73.49   | 172.16.73.50 – 172.16.73.62     | 172.16.73.63   |

> **EtherChannel:** LACP entre SW-Dist-DC y SW-Acc-BD (mínimo 2 puertos físicos → Port-channel1)  
> **Enrutamiento:** Estático. R-Central1 redistribuye rutas estáticas hacia OSPF del backbone.

---

## 3. Justificaciones Técnicas de Diseño por Sede

---

### 🟠 Sede Occidente — Justificación

La Sede Occidente implementa una **topología en estrella jerárquica** con un switch de distribución central (SW-Dist-OCC) al cual se conectan switches de acceso dedicados por área funcional. Esta decisión arquitectónica responde directamente a la necesidad operativa de la agencia: aislar completamente el tráfico transaccional de las cajas del tráfico generado por los asesores de servicio al cliente. Al segmentar cada área en su propia VLAN (Cajas-VLAN10, Asesores-VLAN20, Gerencia-VLAN30, Seguridad-VLAN40), un incidente en el segmento de asesores — como una tormenta de broadcast o un equipo mal configurado — no puede propagarse al segmento de transacciones críticas.

La técnica de **Router-on-a-Stick** en R-Occidente se justifica por su eficiencia en entornos donde el router de borde ya existe como punto de conexión al backbone: en lugar de agregar un switch multicapa adicional, se aprovechan las subinterfaces del router para el enrutamiento inter-VLAN, reduciendo costos de hardware sin sacrificar la segmentación. El enlace troncal 802.1Q entre SW-Dist-OCC y R-Occidente transporta todas las VLANs en un único enlace físico, simplificando el cableado. La administración centralizada de VLANs mediante **VTP** (dominio `bantech70`) garantiza consistencia en la configuración de todos los switches de acceso, reduciendo el error humano en una agencia con alto volumen operativo.

**Tolerancia a fallos:** Si un switch de acceso falla, únicamente el área funcional correspondiente pierde conectividad, mientras que las demás áreas continúan operando sin interrupción. El switch de distribución central constituye el único punto de falla potencial, por lo que se recomienda documentar un procedimiento de reemplazo rápido para este equipo.

---

### 🟢 Sede Norte — Justificación

La Sede Norte implementa una **topología de anillo/triángulo de switches** (SW-Core-N conectado en bucle con SW-A-N1 y SW-A-N2), generando intencionalmente rutas físicas redundantes entre todos los nodos de la red. Esta decisión responde directamente al contexto operativo crítico de la sede: si la red se interrumpe, la aprobación de créditos a nivel nacional queda paralizada. Al existir al menos dos caminos físicos entre cualquier par de switches, la caída de un enlace o un switch de acceso no genera una pérdida total de conectividad.

La implementación de **Rapid PVST+ (802.1w)** es obligatoria en este diseño porque los bucles físicos intencionales generarían tormentas de broadcast devastadoras si no existiera un protocolo que gestione el árbol de expansión. Rapid PVST+ se elige sobre el STP clásico (802.1D) por su tiempo de convergencia significativamente menor (aproximadamente 1-2 segundos frente a los 30-50 segundos del STP tradicional), lo cual es crítico en un entorno financiero donde cada segundo de inactividad representa pérdidas económicas.

El **Root Bridge es forzado en SW-Core-N** mediante la configuración explícita de `spanning-tree vlan X priority 4096`. Esta decisión se justifica porque SW-Core-N es el switch de mayor capacidad y el punto de conexión hacia R-Norte; forzar el Root Bridge en este equipo garantiza que el árbol de expansión converja de forma óptima, con los puertos de menor rendimiento bloqueados en los switches de acceso y no en el switch principal. Si el Root Bridge se eligiera automáticamente (por MAC address), podría recaer en un switch de acceso, generando rutas de tráfico subóptimas.

**Tolerancia a fallos:** Ante la caída del enlace entre SW-A-N1 y SW-Core-N, Rapid PVST+ activa en menos de 2 segundos el puerto previamente bloqueado, reestableciendo la conectividad sin intervención manual.

---

### 🔴 Sede Oriente — Justificación

La Sede Oriente implementa una **topología de acceso dual** donde el switch de acceso (SW-ACC-OR) se conecta simultáneamente a dos switches multicapa (MS1 y MS2) previamente integrados en el backbone. Esta arquitectura responde al requerimiento crítico de alta disponibilidad del gateway: los usuarios finales de la sede — que operan con valores financieros sensibles — no pueden tolerar la pérdida de conectividad ante la caída del switch principal.

La implementación de **HSRP (Hot Standby Router Protocol)** sobre MS1 y MS2 crea una dirección IP virtual de gateway que es transparente para los hosts finales. Las PCs de la sede configuran como gateway predeterminado la IP virtual (ej. 172.16.72.1 para VLAN Bóveda), sin conocimiento de cuál de los dos switches multicapa está activo en cada momento. MS1 opera como **Active** con priority 110 y MS2 como **Standby** con priority 100. Cuando MS1 pierde conectividad, HSRP detecta el fallo mediante los mensajes Hello (cada 3 segundos, con hold time de 10 segundos) y MS2 asume el rol de Active automáticamente, sin que las PCs necesiten renovar su configuración de red.

**Tolerancia a fallos demostrable:** Al ejecutar `shutdown` en la interfaz activa de MS1, el tráfico migra automáticamente a través de MS2 en un tiempo máximo de 10 segundos (hold time HSRP), verificable mediante pings continuos (`ping -t`) desde las PCs hacia el backbone durante la prueba de failover.

---

### ⚫ Data Center y Sede Central — Justificación

El Data Center implementa una **topología jerárquica de tres capas** (R-Central2 como capa de núcleo/borde, SW-Dist-DC como capa de distribución, y switches de acceso dedicados por granja de servidores). Esta arquitectura es la más adecuada para un entorno de alta densidad de tráfico porque separa claramente las funciones de enrutamiento, agregación y acceso, facilitando la escalabilidad y el aislamiento de fallos.

La implementación de **EtherChannel con LACP (IEEE 802.3ad)** entre SW-Dist-DC y SW-Acc-BD agrupa mínimo 2 puertos físicos en un único canal lógico (Port-channel1), duplicando el ancho de banda disponible (ej. de 1 Gbps a 2 Gbps) hacia los servidores de base de datos. Esta decisión responde directamente a la necesidad operativa: las granjas de servidores manejan ráfagas masivas de tráfico transaccional que saturan un enlace individual. LACP se elige sobre PAgP por ser un estándar abierto IEEE, garantizando compatibilidad futura con equipos de otros fabricantes. Adicionalmente, EtherChannel proporciona tolerancia a fallos a nivel de enlace físico: si uno de los cables falla, el tráfico continúa por los cables restantes sin interrupción del servicio.

El aislamiento en el **segmento de rutas estáticas** responde a las políticas de seguridad de la información: al no participar en protocolos de enrutamiento dinámico, los servidores centrales no son alcanzables desde rutas no autorizadas del backbone. R-Central1 actúa como el único punto de redistribución controlada, propagando las rutas estáticas del Data Center hacia el dominio OSPF del backbone mediante `redistribute static subnets`, permitiendo conectividad desde todas las sedes sin exponer los servidores a anuncios de enrutamiento no controlados.

---

## Tabla de conexiones de la Topología Física

---

### 🌐 Backbone Core

| # | Dispositivo A | Puerto A | Dispositivo B | Puerto B | Tipo de Cable | Medio Físico | Propósito |
|---|---------------|----------|---------------|----------|---------------|--------------|-----------|
| 1 | R-Core1 (Router-PT) | Fa4/0 | R-Core3 (Router-PT) | Fa4/0 | Fibra Óptica | Fibra | Enlace núcleo — medio óptico requerido |
| 2 | R-Core1 (Router-PT) | Gig6/0 | R-Core2 (Router-PT) | Gig6/0 | Copper Straight-Through | Ethernet | EtherChannel Enlace Ethernet dedicado núcleo — alta capacidad |
| 3 | R-Core2 (Router-PT) | Se2/0 (DCE 🕐) | R-Core3 (Router-PT) | Se2/0 | Serial DCE | Serial WAN | Enlace WAN — medio serial requerido |
| 4 | R-Core1 (Router-PT) | Gig8/0 | R-Central1 (Router 2911) | Gig0/0 | Copper Straight-Through | Ethernet | Enlace núcleo → borde Data Center |
| 5 | R-Core2 (Router-PT) | Gig8/0 | R-Norte (Router 2911) | Gig0/0 | Copper Straight-Through | Ethernet | Enlace núcleo → borde Sede Norte |
| 6 | R-Core3 (Router-PT) | Gig6/0 | R-Occidente (Router 2911) | Gig0/0 | Copper Straight-Through | Ethernet | Enlace núcleo → borde Sede Occidente |
| 7 | R-Central1 (Router 2911) | Gig0/1 | R-Central2 (Router 2911) | Gig0/0 | Copper Straight-Through | Ethernet | Enlace borde → Data Center (segmento estático) |
| 8 | R-Core1 (Router-PT) | Gig9/0 | MS1 (Switch 3560-24PS) | Gig0/1 | Copper Straight-Through | Ethernet | Enlace núcleo → Sede Oriente (HSRP Active) |

> **Nota sobre el EtherChannel:** Nota sobre el enlace R-Core1 ↔ R-Core2: Se utiliza un único enlace GigabitEthernet dedicado. El mecanismo de agregación de enlaces (EtherChannel LACP) del backbone se implementa en la capa de distribución del Data Center (SW-Dist-DC ↔ SW-Acc-BD), cumpliendo el requerimiento del enunciado. El Router-PT de Cisco Packet Tracer no implementa el comando channel-group, por lo que EtherChannel no es simulable entre routers en esta plataforma.
>
> **Nota sobre el Serial DCE:** El símbolo del reloj (🕐) queda del lado de R-Core2, quien provee el `clock rate` al enlace WAN.
>
> **Nota sobre MS1 y MS2:** Según el enunciado, MS1 y MS2 son parte del backbone. MS1 recibe el enlace del núcleo (enlace 9). MS2 se interconecta con MS1 directamente (ver Sede Oriente).

---

### 🏦 Sede Occidente (Agencia Regional Comercial)

| # | Dispositivo A | Puerto A | Dispositivo B | Puerto B | Tipo de Cable | Propósito |
|---|---------------|----------|---------------|----------|---------------|-----------|
| 1 | R-Occidente (Router 2911) | Gig0/1 | SW-Dist-OCC (Switch 2960-24TT) | Gig0/1 | Copper Straight-Through | Trunk 802.1Q — Router-on-a-Stick |
| 2 | SW-Dist-OCC (Switch 2960-24TT) | Fa0/1 | SW-Cajas (Switch 2960-24TT) | Fa0/1 | Copper Cross-Over | Trunk hacia switch de acceso VLAN 10 |
| 3 | SW-Dist-OCC (Switch 2960-24TT) | Fa0/2 | SW-Asesores (Switch 2960-24TT) | Fa0/1 | Copper Cross-Over | Trunk hacia switch de acceso VLAN 20 |
| 4 | SW-Dist-OCC (Switch 2960-24TT) | Fa0/3 | SW-Gerencia (Switch 2960-24TT) | Fa0/1 | Copper Cross-Over | Trunk hacia switch de acceso VLAN 30 |
| 5 | SW-Dist-OCC (Switch 2960-24TT) | Fa0/4 | SW-Seguridad (Switch 2960-24TT) | Fa0/1 | Copper Cross-Over | Trunk hacia switch de acceso VLAN 40 |
| 6 | SW-Cajas (Switch 2960-24TT) | Fa0/2 | PC-Caja1 (PC) | Fa0 | Copper Straight-Through | Host de prueba — VLAN 10 Cajas |
| 7 | SW-Asesores (Switch 2960-24TT) | Fa0/2 | PC-Asesor1 (PC) | Fa0 | Copper Straight-Through | Host de prueba — VLAN 20 Asesores |
| 8 | SW-Gerencia (Switch 2960-24TT) | Fa0/2 | PC-Gerente1 (PC) | Fa0 | Copper Straight-Through | Host de prueba — VLAN 30 Gerencia |
| 9 | SW-Seguridad (Switch 2960-24TT) | Fa0/2 | PC-Camara1 (PC) | Fa0 | Copper Straight-Through | Host de prueba — VLAN 40 Seguridad |

> **Switch principal:** SW-Dist-OCC actúa como Switch de Distribución y VTP Server.
>
> **Puertos Trunk:** Fa0/1–Fa0/4 de SW-Dist-OCC y Gig0/1 de SW-Dist-OCC → R-Occidente.
>
> **Puertos de Acceso:** Fa0/2 de cada switch de acceso hacia sus respectivas PCs.

---

### 📊 Sede Norte (Centro de Autorización de Créditos)

| # | Dispositivo A | Puerto A | Dispositivo B | Puerto B | Tipo de Cable | Propósito |
|---|---------------|----------|---------------|----------|---------------|-----------|
| 1 | R-Norte (Router 2911) | Gig0/1 | SW-Core-N (Switch 2960-24TT) | Gig0/1 | Copper Straight-Through | Uplink backbone → sede (Root Bridge) |
| 2 | SW-Core-N (Switch 2960-24TT) | Fa0/1 | SW-A-N1 (Switch 2960-24TT) | Fa0/1 | Copper Cross-Over | Lado izquierdo del triángulo STP |
| 3 | SW-Core-N (Switch 2960-24TT) | Fa0/2 | SW-A-N2 (Switch 2960-24TT) | Fa0/1 | Copper Cross-Over | Lado derecho del triángulo STP |
| 4 | SW-A-N1 (Switch 2960-24TT) | Fa0/2 | SW-A-N2 (Switch 2960-24TT) | Fa0/2 | Copper Cross-Over | Base del triángulo — bucle físico intencional |
| 5 | SW-A-N1 (Switch 2960-24TT) | Fa0/3 | PC-Analista1 (PC) | Fa0 | Copper Straight-Through | Host de prueba — VLAN 50 Análisis |
| 6 | SW-A-N1 (Switch 2960-24TT) | Fa0/4 | PC-Legal1 (PC) | Fa0 | Copper Straight-Through | Host de prueba — VLAN 70 Legal |
| 7 | SW-A-N2 (Switch 2960-24TT) | Fa0/3 | PC-Auditor1 (PC) | Fa0 | Copper Straight-Through | Host de prueba — VLAN 60 Auditoría |

> **Root Bridge:** SW-Core-N (se forzará con `spanning-tree vlan X priority 4096` en la fase de configuración).
>
> **Bucle intencional:** El enlace 4 (SW-A-N1 Fa0/2 ↔ SW-A-N2 Fa0/2) crea el bucle que Rapid PVST+ gestionará. Es normal que un puerto aparezca en ámbar al conectarlo.
>
> **Protocolo STP:** Rapid PVST+ obligatorio en los 3 switches.

---

### 🏛️ Sede Oriente (Centro Financiero Legado)

| # | Dispositivo A | Puerto A | Dispositivo B | Puerto B | Tipo de Cable | Propósito |
|---|---------------|----------|---------------|----------|---------------|-----------|
| 1 | MS1 (Switch 3560-24PS) | Fa0/1 | SW-ACC-OR (Switch 2960-24TT) | Fa0/1 | Copper Cross-Over | Uplink principal — HSRP Active |
| 2 | MS2 (Switch 3560-24PS) | Fa0/1 | SW-ACC-OR (Switch 2960-24TT) | Fa0/2 | Copper Cross-Over | Uplink redundante — HSRP Standby |
| 3 | MS1 (Switch 3560-24PS) | Fa0/2 | MS2 (Switch 3560-24PS) | Fa0/2 | Copper Cross-Over | Enlace de sincronización entre multicapas |
| 4 | SW-ACC-OR (Switch 2960-24TT) | Fa0/3 | PC-Boveda1 (PC) | Fa0 | Copper Straight-Through | Host de prueba — VLAN 80 Bóveda ⚠️ PENDIENTE |
| 5 | SW-ACC-OR (Switch 2960-24TT) | Fa0/4 | PC-Plataforma1 (PC) | Fa0 | Copper Straight-Through | Host de prueba — VLAN 90 Plataforma ⚠️ PENDIENTE |

> **Enlace al backbone:** MS1 ya recibe el enlace desde R-Core1 Gig9/0 (definido en la tabla del Backbone, enlace #9).
>
> **HSRP:** MS1 = Active (priority 110), MS2 = Standby (priority 100). Los hosts usarán la IP virtual como gateway.

---

### 🖥️ Data Center y Sede Central (Alta Seguridad)

| # | Dispositivo A | Puerto A | Dispositivo B | Puerto B | Tipo de Cable | Propósito |
|---|---------------|----------|---------------|----------|---------------|-----------|
| 1 | R-Central2 (Router 2911) | Gig0/1 | SW-Dist-DC (Switch 3560-24PS) | Gig0/1 | Copper Straight-Through | Enlace router borde → switch distribución DC |
| 2 | SW-Dist-DC (Switch 3560-24PS) | Fa0/1 | SW-Acc-BD (Switch 2960-24TT) | Fa0/1 | Copper Cross-Over | EtherChannel LACP — cable 1 de 2 |
| 3 | SW-Dist-DC (Switch 3560-24PS) | Fa0/2 | SW-Acc-BD (Switch 2960-24TT) | Fa0/2 | Copper Cross-Over | EtherChannel LACP — cable 2 de 2 |
| 4 | SW-Dist-DC (Switch 3560-24PS) | Fa0/3 | SW-Acc-Web (Switch 2960-24TT) | Fa0/1 | Copper Cross-Over | Enlace estándar hacia switch Web/NOC |
| 5 | SW-Acc-BD (Switch 2960-24TT) | Fa0/3 | Server-BD1 (Server-PT) | Fa0 | Copper Straight-Through | Servidor BD1 — VLAN 10 Core_BD |
| 6 | SW-Acc-BD (Switch 2960-24TT) | Fa0/4 | Server-BD2 (Server-PT) | Fa0 | Copper Straight-Through | Servidor BD2 — VLAN 10 Core_BD |
| 7 | SW-Acc-Web (Switch 2960-24TT) | Fa0/2 | Server-Web1 (Server-PT) | Fa0 | Copper Straight-Through | Servidor Web — VLAN 20 Web_Apps |
| 8 | SW-Acc-Web (Switch 2960-24TT) | Fa0/3 | Server-NOC1 (Server-PT) | Fa0 | Copper Straight-Through | Servidor NOC — VLAN 30 NOC |

> **EtherChannel:** Los enlaces 2 y 3 forman el Port-Channel1 entre SW-Dist-DC y SW-Acc-BD. Se configurarán con LACP (`channel-group 1 mode active`) en la fase de configuración.
>
> **Enrutamiento:** Este segmento usa rutas estáticas. R-Central1 redistribuirá estas rutas hacia OSPF del backbone mediante `redistribute static subnets`.
>
> **Switch de distribución:** SW-Dist-DC (3560-24PS) actúa como capa de distribución con capacidades Layer 3.

---

### 📋 Resumen de Dispositivos

| Dispositivo | Modelo | Rol | Sede |
|-------------|--------|-----|------|
| R-Core1 | Router-PT | Core OSPF + Punto de redistribución | Backbone |
| R-Core2 | Router-PT | Core OSPF + Punto de redistribución | Backbone |
| R-Core3 | Router-PT | Core OSPF | Backbone |
| R-Central1 | Router 2911 | Borde DC + Redistribución Estáticas→OSPF | Backbone/DC |
| R-Central2 | Router 2911 | Router de borde Data Center | Data Center |
| R-Norte | Router 2911 | Borde EIGRP — Sede Norte | Sede Norte |
| R-Occidente | Router 2911 | Borde RIPv2 + Router-on-a-Stick | Sede Occidente |
| MS1 | Switch 3560-24PS | HSRP Active — parte del backbone | Sede Oriente |
| MS2 | Switch 3560-24PS | HSRP Standby — parte del backbone | Sede Oriente |
| SW-Dist-OCC | Switch 2960-24TT | Switch Principal / VTP Server | Sede Occidente |
| SW-Cajas | Switch 2960-24TT | Switch de Acceso VLAN 10 | Sede Occidente |
| SW-Asesores | Switch 2960-24TT | Switch de Acceso VLAN 20 | Sede Occidente |
| SW-Gerencia | Switch 2960-24TT | Switch de Acceso VLAN 30 | Sede Occidente |
| SW-Seguridad | Switch 2960-24TT | Switch de Acceso VLAN 40 | Sede Occidente |
| SW-Core-N | Switch 2960-24TT | Root Bridge (priority 4096) | Sede Norte |
| SW-A-N1 | Switch 2960-24TT | Switch de Acceso VLANs 50 y 70 | Sede Norte |
| SW-A-N2 | Switch 2960-24TT | Switch de Acceso VLAN 60 | Sede Norte |
| SW-ACC-OR | Switch 2960-24TT | Switch de Acceso (dual uplink a MS1/MS2) | Sede Oriente |
| SW-Dist-DC | Switch 3560-24PS | Switch Distribución Data Center | Data Center |
| SW-Acc-BD | Switch 2960-24TT | Switch Acceso EtherChannel — Servidores BD | Data Center |
| SW-Acc-Web | Switch 2960-24TT | Switch Acceso — Servidores Web y NOC | Data Center |

---

## 📊 Resumen de Protocolos y Tecnologías

| Tecnología | Dispositivos Involucrados | Sede |
|------------|--------------------------|------|
| OSPF (dominio principal) | R-Core1, R-Core2, R-Core3, R-Central1 | Backbone |
| EIGRP (expansión regional) | R-Core2, R-Norte | Backbone / Norte |
| RIPv2 (red legada) | R-Core3, R-Occidente | Backbone / Occidente |
| Rutas Estáticas (alta seguridad) | R-Central1, R-Central2 | Data Center |
| Redistribución OSPF↔EIGRP | R-Core2 | Backbone |
| Redistribución OSPF↔RIPv2 | R-Core3 | Backbone |
| EtherChannel LACP (Port-Channel1) | SW-Dist-DC ↔ SW-Acc-BD | Data Center |
| HSRP | MS1 (Active), MS2 (Standby) | Sede Oriente |
| Rapid PVST+ | SW-Core-N, SW-A-N1, SW-A-N2 | Sede Norte |
| Router-on-a-Stick (802.1Q) | R-Occidente + SW-Dist-OCC | Sede Occidente |
| VTP (Dominio: bantech70) | SW-Dist-OCC (Server), SW-Cajas/Asesores/Gerencia/Seguridad (Client) | Sede Occidente |


---


## Extractos de las configuraciones más importantes de los dispositivos.


**⚙️ Comandos de Configuración — Red Nacional BanTech GT**
**Carnet:** 201504070 | **XX = 70** | **Y = 0**
**OSPF Process-ID:** 1 | **EIGRP AS:** 1 | **HSRP Grupo:** 1

---

> **Convención utilizada:**
> - Todos los comandos se ejecutan desde la CLI de Cisco Packet Tracer.
> - Se ingresa al modo privilegiado con `enable`, luego al modo de configuración global con `configure terminal`.
> - El símbolo `!` representa un comentario o separador de sección.
> - Las IPs utilizadas corresponden al plan de subnetting VLSM/FLSM previamente calculado.

---

## 🌐 BACKBONE CORE

---

### R-Core1 (Router-PT)

```sh
enable
configure terminal

hostname R-Core1

interface FastEthernet4/0
description FIBRA-hacia-R-Core3
ip address 10.70.0.5 255.255.255.252
no shutdown

interface GigabitEthernet6/0
description ENLACE-hacia-R-Core2
ip address 10.70.0.1 255.255.255.252
no shutdown

interface GigabitEthernet8/0
description ENLACE-hacia-R-Central1
ip address 10.70.0.13 255.255.255.252
no shutdown

interface GigabitEthernet9/0
description ENLACE-hacia-MS1-SedeOriente
ip address 10.70.0.29 255.255.255.252
no shutdown

router ospf 1
router-id 1.1.1.1
network 10.70.0.4 0.0.0.3 area 0
network 10.70.0.0 0.0.0.3 area 0
network 10.70.0.12 0.0.0.3 area 0
network 10.70.0.28 0.0.0.3 area 0

end
write memory
```

---

### R-Core2 (Router-PT)

```sh
enable
configure terminal

hostname R-Core2

interface GigabitEthernet6/0
description ENLACE-hacia-R-Core1
ip address 10.70.0.2 255.255.255.252
no shutdown

interface Serial2/0
description SERIAL-WAN-hacia-R-Core3-DCE
ip address 10.70.0.9 255.255.255.252
clock rate 64000
no shutdown

interface GigabitEthernet8/0
description ENLACE-hacia-R-Norte
ip address 10.70.0.17 255.255.255.252
no shutdown

router ospf 1
router-id 2.2.2.2
network 10.70.0.0 0.0.0.3 area 0
network 10.70.0.8 0.0.0.3 area 0
network 10.70.0.16 0.0.0.3 area 0
redistribute eigrp 1 subnets

router eigrp 1
network 10.70.0.16 0.0.0.3
redistribute ospf 1 metric 10000 100 255 1 1500
no auto-summary

end
write memory
```

---

### R-Core3 (Router-PT)

```sh
enable
configure terminal

hostname R-Core3

interface FastEthernet4/0
description FIBRA-hacia-R-Core1
ip address 10.70.0.6 255.255.255.252
no shutdown

interface Serial2/0
description SERIAL-WAN-hacia-R-Core2-DTE
ip address 10.70.0.10 255.255.255.252
no shutdown

interface GigabitEthernet6/0
description ENLACE-hacia-R-Occidente
ip address 10.70.0.21 255.255.255.252
no shutdown

router ospf 1
router-id 3.3.3.3
network 10.70.0.4 0.0.0.3 area 0
network 10.70.0.8 0.0.0.3 area 0
network 10.70.0.20 0.0.0.3 area 0
redistribute rip subnets

router rip
version 2
network 10.70.0.20
redistribute ospf 1 metric 5
no auto-summary

end
write memory
```

---

### R-Central1 (Router 2911)

```sh
enable
configure terminal

hostname R-Central1

interface GigabitEthernet0/0
description ENLACE-hacia-R-Core1
ip address 10.70.0.14 255.255.255.252
no shutdown

interface GigabitEthernet0/1
description ENLACE-hacia-R-Central2
ip address 10.70.0.25 255.255.255.252
no shutdown

ip route 172.16.73.0  255.255.255.224 10.70.0.26
ip route 172.16.73.32 255.255.255.240 10.70.0.26
ip route 172.16.73.48 255.255.255.240 10.70.0.26

router ospf 1
router-id 4.4.4.4
network 10.70.0.12 0.0.0.3 area 0
network 10.70.0.24 0.0.0.3 area 0
redistribute static subnets

end
write memory
```

---

### R-Norte (Router 2911)

```sh
enable
configure terminal

hostname R-Norte

interface GigabitEthernet0/0
description ENLACE-hacia-R-Core2
ip address 10.70.0.18 255.255.255.252
no shutdown

interface GigabitEthernet0/1
description TRUNK-hacia-SW-Core-N
no shutdown

interface GigabitEthernet0/1.50
description VLAN50-Analisis
encapsulation dot1Q 50
ip address 172.16.71.1 255.255.255.192
no shutdown

interface GigabitEthernet0/1.60
description VLAN60-Auditoria
encapsulation dot1Q 60
ip address 172.16.71.65 255.255.255.224
no shutdown

interface GigabitEthernet0/1.70
description VLAN70-Legal
encapsulation dot1Q 70
ip address 172.16.71.97 255.255.255.240
no shutdown

router eigrp 1
network 10.70.0.16 0.0.0.3
network 172.16.71.0  0.0.0.63
network 172.16.71.64 0.0.0.31
network 172.16.71.96 0.0.0.15
no auto-summary

end
write memory
```

---

### R-Occidente (Router 2911)

```sh
enable
configure terminal

hostname R-Occidente

interface GigabitEthernet0/0
description ENLACE-hacia-R-Core3
ip address 10.70.0.22 255.255.255.252
no shutdown

interface GigabitEthernet0/1
description TRUNK-RoaS-hacia-SW-Dist-OCC
no shutdown

interface GigabitEthernet0/1.10
description VLAN10-Cajas
encapsulation dot1Q 10
ip address 172.16.70.1 255.255.255.192
no shutdown

interface GigabitEthernet0/1.20
description VLAN20-Asesores
encapsulation dot1Q 20
ip address 172.16.70.65 255.255.255.224
no shutdown

interface GigabitEthernet0/1.30
description VLAN30-Gerencia
encapsulation dot1Q 30
ip address 172.16.70.113 255.255.255.240
no shutdown

interface GigabitEthernet0/1.40
description VLAN40-Seguridad
encapsulation dot1Q 40
ip address 172.16.70.97 255.255.255.240
no shutdown

router rip
version 2
network 10.70.0.20
network 172.16.70.0
no auto-summary

end
write memory
```

---

## 🏦 SEDE OCCIDENTE

---

### SW-Dist-OCC (Switch 2960-24TT) — VTP Server

```sh
enable
configure terminal

hostname SW-Dist-OCC

vtp mode server
vtp domain bantech70
vtp password cisco

vlan 10
name Cajas
vlan 20
name Asesores
vlan 30
name Gerencia
vlan 40
name Seguridad

interface GigabitEthernet0/1
description TRUNK-hacia-R-Occidente
switchport mode trunk
switchport trunk allowed vlan 10,20,30,40
no shutdown

interface FastEthernet0/1
description TRUNK-hacia-SW-Cajas
switchport mode trunk
switchport trunk allowed vlan 10
no shutdown

interface FastEthernet0/2
description TRUNK-hacia-SW-Asesores
switchport mode trunk
switchport trunk allowed vlan 20
no shutdown

interface FastEthernet0/3
description TRUNK-hacia-SW-Gerencia
switchport mode trunk
switchport trunk allowed vlan 30
no shutdown

interface FastEthernet0/4
description TRUNK-hacia-SW-Seguridad
switchport mode trunk
switchport trunk allowed vlan 40
no shutdown

end
write memory
```

---

### SW-Cajas (Switch 2960-24TT) — VTP Client

```sh
enable
configure terminal

hostname SW-Cajas

vtp mode client
vtp domain bantech70
vtp password cisco

interface FastEthernet0/1
description TRUNK-hacia-SW-Dist-OCC
switchport mode trunk
switchport trunk allowed vlan 10
no shutdown

interface FastEthernet0/2
description ACCESO-PC-Caja1-VLAN10
switchport mode access
switchport access vlan 10
no shutdown

end
write memory
```

---

### SW-Asesores (Switch 2960-24TT) — VTP Client

```sh
enable
configure terminal

hostname SW-Asesores

vtp mode client
vtp domain bantech70
vtp password cisco

interface FastEthernet0/1
description TRUNK-hacia-SW-Dist-OCC
switchport mode trunk
switchport trunk allowed vlan 20
no shutdown

interface FastEthernet0/2
description ACCESO-PC-Asesor1-VLAN20
switchport mode access
switchport access vlan 20
no shutdown

end
write memory
```

---

### SW-Gerencia (Switch 2960-24TT) — VTP Client

```sh
enable
configure terminal

hostname SW-Gerencia

vtp mode client
vtp domain bantech70
vtp password cisco

interface FastEthernet0/1
description TRUNK-hacia-SW-Dist-OCC
switchport mode trunk
switchport trunk allowed vlan 30
no shutdown

interface FastEthernet0/2
description ACCESO-PC-Gerente1-VLAN30
switchport mode access
switchport access vlan 30
no shutdown

end
write memory
```

---

### SW-Seguridad (Switch 2960-24TT) — VTP Client

```sh
enable
configure terminal

hostname SW-Seguridad

vtp mode client
vtp domain bantech70
vtp password cisco

interface FastEthernet0/1
description TRUNK-hacia-SW-Dist-OCC
switchport mode trunk
switchport trunk allowed vlan 40
no shutdown

interface FastEthernet0/2
description ACCESO-PC-Camara1-VLAN40
switchport mode access
switchport access vlan 40
no shutdown

end
write memory
```

---

### PCs — Sede Occidente

| PC | IP Address | Subnet Mask | Default Gateway |
|----|-----------|-------------|-----------------|
| PC-Caja1 | 172.16.70.2 | 255.255.255.192 | 172.16.70.1 |
| PC-Asesor1 | 172.16.70.66 | 255.255.255.224 | 172.16.70.65 |
| PC-Gerente1 | 172.16.70.114 | 255.255.255.240 | 172.16.70.113 |
| PC-Camara1 | 172.16.70.98 | 255.255.255.240 | 172.16.70.97 |

---

## 📊 SEDE NORTE

---

### SW-Core-N (Switch 2960-24TT) — Root Bridge

```sh
enable
configure terminal

hostname SW-Core-N

vlan 50
name Analisis
vlan 60
name Auditoria
vlan 70
name Legal

spanning-tree mode rapid-pvst
spanning-tree vlan 50 priority 4096
spanning-tree vlan 60 priority 4096
spanning-tree vlan 70 priority 4096

interface GigabitEthernet0/1
description TRUNK-hacia-R-Norte
switchport mode trunk
switchport trunk allowed vlan 50,60,70
no shutdown

interface FastEthernet0/1
description TRUNK-hacia-SW-A-N1
switchport mode trunk
switchport trunk allowed vlan 50,60,70
no shutdown

interface FastEthernet0/2
description TRUNK-hacia-SW-A-N2
switchport mode trunk
switchport trunk allowed vlan 50,60,70
no shutdown

end
write memory
```

---

### SW-A-N1 (Switch 2960-24TT)

```sh
enable
configure terminal

hostname SW-A-N1

spanning-tree mode rapid-pvst

vlan 50
name Analisis
vlan 70
name Legal

interface FastEthernet0/1
description TRUNK-hacia-SW-Core-N
switchport mode trunk
switchport trunk allowed vlan 50,60,70
no shutdown

interface FastEthernet0/2
description TRUNK-BUCLE-hacia-SW-A-N2
switchport mode trunk
switchport trunk allowed vlan 50,60,70
no shutdown

interface FastEthernet0/3
description ACCESO-PC-Analista1-VLAN50
switchport mode access
switchport access vlan 50
no shutdown

interface FastEthernet0/4
description ACCESO-PC-Legal1-VLAN70
switchport mode access
switchport access vlan 70
no shutdown

end
write memory
```

---

### SW-A-N2 (Switch 2960-24TT)

```sh
enable
configure terminal

hostname SW-A-N2

spanning-tree mode rapid-pvst

vlan 60
name Auditoria

interface FastEthernet0/1
description TRUNK-hacia-SW-Core-N
switchport mode trunk
switchport trunk allowed vlan 50,60,70
no shutdown

interface FastEthernet0/2
description TRUNK-BUCLE-hacia-SW-A-N1
switchport mode trunk
switchport trunk allowed vlan 50,60,70
no shutdown

interface FastEthernet0/3
description ACCESO-PC-Auditor1-VLAN60
switchport mode access
switchport access vlan 60
no shutdown

end
write memory
```

---

### PCs — Sede Norte

| PC | IP Address | Subnet Mask | Default Gateway |
|----|-----------|-------------|-----------------|
| PC-Analista1 | 172.16.71.2 | 255.255.255.192 | 172.16.71.1 |
| PC-Auditor1 | 172.16.71.66 | 255.255.255.224 | 172.16.71.65 |
| PC-Legal1 | 172.16.71.98 | 255.255.255.240 | 172.16.71.97 |

---

## 🏛️ SEDE ORIENTE

---

### MS1 (Switch 3560-24PS) — HSRP Active

```sh
enable
configure terminal

hostname MS1

ip routing

vlan 80
name Boveda
vlan 90
name Plataforma

interface Vlan80
description GATEWAY-VLAN80-Boveda
ip address 172.16.72.2 255.255.255.192
standby 1 ip 172.16.72.1
standby 1 priority 110
standby 1 preempt
no shutdown

interface Vlan90
description GATEWAY-VLAN90-Plataforma
ip address 172.16.72.66 255.255.255.192
standby 1 ip 172.16.72.65
standby 1 priority 110
standby 1 preempt
no shutdown

interface FastEthernet0/1
description TRUNK-hacia-SW-ACC-OR
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 80,90
no shutdown

interface FastEthernet0/2
description TRUNK-hacia-MS2
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 80,90
no shutdown

interface GigabitEthernet0/1
description ENLACE-hacia-R-Core1
no switchport
ip address 10.70.0.30 255.255.255.252
no shutdown

router ospf 1
router-id 5.5.5.5
network 10.70.0.28 0.0.0.3 area 0
network 172.16.72.0 0.0.0.63 area 0
network 172.16.72.64 0.0.0.63 area 0

end
write memory
```

---

### MS2 (Switch 3560-24PS) — HSRP Standby

```sh
enable
configure terminal

hostname MS2

ip routing

vlan 80
name Boveda
vlan 90
name Plataforma

interface Vlan80
description GATEWAY-VLAN80-Boveda-STANDBY
ip address 172.16.72.3 255.255.255.192
standby 1 ip 172.16.72.1
standby 1 priority 100
no shutdown

interface Vlan90
description GATEWAY-VLAN90-Plataforma-STANDBY
ip address 172.16.72.67 255.255.255.192
standby 1 ip 172.16.72.65
standby 1 priority 100
no shutdown

interface FastEthernet0/1
description TRUNK-hacia-SW-ACC-OR
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 80,90
no shutdown

interface FastEthernet0/2
description TRUNK-hacia-MS1
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 80,90
no shutdown

end
write memory
```

---

### SW-ACC-OR (Switch 2960-24TT)

```sh
enable
configure terminal

hostname SW-ACC-OR

vlan 80
name Boveda
vlan 90
name Plataforma

interface FastEthernet0/1
description TRUNK-hacia-MS1-HSRP-Active
switchport mode trunk
switchport trunk allowed vlan 80,90
no shutdown

interface FastEthernet0/2
description TRUNK-hacia-MS2-HSRP-Standby
switchport mode trunk
switchport trunk allowed vlan 80,90
no shutdown

interface FastEthernet0/3
description ACCESO-PC-Boveda1-VLAN80
switchport mode access
switchport access vlan 80
no shutdown

interface FastEthernet0/4
description ACCESO-PC-Plataforma1-VLAN90
switchport mode access
switchport access vlan 90
no shutdown

end
write memory
```

---

### PCs — Sede Oriente

| PC | IP Address | Subnet Mask | Default Gateway (IP Virtual HSRP) |
|----|-----------|-------------|-----------------------------------|
| PC-Boveda1 | 172.16.72.4 | 255.255.255.192 | 172.16.72.1 |
| PC-Plataforma1 | 172.16.72.68 | 255.255.255.192 | 172.16.72.65 |

---

## 🖥️ DATA CENTER Y SEDE CENTRAL

---

### SW-Dist-DC (Switch 3560-24PS)

```sh
enable
configure terminal

hostname SW-Dist-DC

ip routing

vlan 10
name Core_BD
vlan 20
name Web_Apps
vlan 30
name NOC

interface FastEthernet0/1
description ETHERCHANNEL-hacia-SW-Acc-BD-cable1
channel-group 1 mode active
no shutdown

interface FastEthernet0/2
description ETHERCHANNEL-hacia-SW-Acc-BD-cable2
channel-group 1 mode active
no shutdown

interface Port-channel1
description ETHERCHANNEL-SW-Dist-DC-SW-Acc-BD
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 10
no shutdown

interface FastEthernet0/3
description TRUNK-hacia-SW-Acc-Web
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 20,30
no shutdown

interface GigabitEthernet0/1
ip address 10.70.0.57 255.255.255.252
no shutdown

interface Vlan10
description SVI-Core_BD
ip address 172.16.73.33 255.255.255.240
no shutdown

interface Vlan20
description SVI-Web_Apps
ip address 172.16.73.2 255.255.255.224
no shutdown

interface Vlan30
description SVI-NOC
ip address 172.16.73.49 255.255.255.240
no shutdown

ip route 0.0.0.0 0.0.0.0 10.70.0.58

end
write memory
```

---

### R-Central2 (Router 2911)

```sh
enable
configure terminal

hostname R-Central2

interface GigabitEthernet0/0
description ENLACE-hacia-R-Central1
ip address 10.70.0.26 255.255.255.252
no shutdown

interface GigabitEthernet0/1
description ENLACE-hacia-SW-Dist-DC
ip address 10.70.0.58 255.255.255.252
no shutdown

ip route 172.16.73.32 255.255.255.240 10.70.0.57
ip route 172.16.73.0  255.255.255.224 10.70.0.57
ip route 172.16.73.48 255.255.255.240 10.70.0.57

ip route 0.0.0.0 0.0.0.0 10.70.0.25

end
write memory
```

---

### SW-Acc-BD (Switch 2960-24TT)

```sh
enable
configure terminal

hostname SW-Acc-BD

vlan 10
name Core_BD

interface FastEthernet0/1
description ETHERCHANNEL-hacia-SW-Dist-DC-cable1
channel-group 1 mode active
no shutdown

interface FastEthernet0/2
description ETHERCHANNEL-hacia-SW-Dist-DC-cable2
channel-group 1 mode active
no shutdown

interface Port-channel1
description ETHERCHANNEL-SW-Acc-BD-SW-Dist-DC
switchport mode trunk
switchport trunk allowed vlan 10
no shutdown

interface FastEthernet0/3
description ACCESO-Server-BD1-VLAN10
switchport mode access
switchport access vlan 10
no shutdown

interface FastEthernet0/4
description ACCESO-Server-BD2-VLAN10
switchport mode access
switchport access vlan 10
no shutdown

end
write memory
```

---

### SW-Acc-Web (Switch 2960-24TT)

```sh
enable
configure terminal

hostname SW-Acc-Web

vlan 20
name Web_Apps
vlan 30
name NOC

interface FastEthernet0/1
description TRUNK-hacia-SW-Dist-DC
switchport mode trunk
switchport trunk allowed vlan 20,30
no shutdown

interface FastEthernet0/2
description ACCESO-Server-Web1-VLAN20
switchport mode access
switchport access vlan 20
no shutdown

interface FastEthernet0/3
description ACCESO-Server-NOC1-VLAN30
switchport mode access
switchport access vlan 30
no shutdown

end
write memory
```

---

### Servidores — Data Center

| Servidor | IP Address | Subnet Mask | Default Gateway |
|----------|-----------|-------------|-----------------|
| Server-BD1 | 172.16.73.34 | 255.255.255.240 | 172.16.73.33 |
| Server-BD2 | 172.16.73.35 | 255.255.255.240 | 172.16.73.33 |
| Server-Web1 | 172.16.73.3 | 255.255.255.224 | 172.16.73.2 |
| Server-NOC1 | 172.16.73.50 | 255.255.255.240 | 172.16.73.49 |

---

## ✅ Resumen de correcciones aplicadas

| # | Dispositivo | Línea corregida | Razón |
|---|-------------|-----------------|-------|
| 1 | R-Core2 | `redistribute eigrp 1 subnets metric-type 2` → `redistribute eigrp 1 subnets` | `metric-type 2` no va en esa línea en Cisco IOS |
| 2 | R-Core2 | Se elimina `#default-metric 20` | `#` no es sintaxis válida; `default-metric` no existe en OSPF |
| 3 | R-Core3 | Se eliminan líneas con `#` | `#` no es sintaxis válida en Cisco IOS |
| 4 | R-Central1 | Se eliminan líneas con `#` | `#` no es sintaxis válida en Cisco IOS |
| 5 | R-Central2 | Puerto `Gig0/1` → `Gig0/2` | Coincide con la conexión física establecida |
| 6 | R-Central2 | Máscara `255.255.255.224` → `255.255.255.252` | Es un enlace punto a punto /30, no /27 |
| 7 | MS1 | Se agrega `no switchport` en `GigabitEthernet0/1` | Puerto físico 3560 requiere este comando antes de `ip address` |
| 8 | SW-Dist-DC | Se agrega `no switchport` en `GigabitEthernet0/1` | Misma razón que MS1 |
| 9 | VTP Clients | Password `201504070` → `cisco` | El enunciado especifica `Password: cisco` |

---


## ✅ Verificación — Comandos show recomendados

### Verificar OSPF
```sh
show ip ospf neighbor
show ip route ospf
```

### Verificar EIGRP
```sh
show ip eigrp neighbors
show ip route eigrp
```

### Verificar RIPv2
```sh
show ip rip database
show ip route rip
```

### Verificar redistribución
```sh
show ip route       ! En R-Core2 y R-Core3 deben verse rutas O, R y D
```

### Verificar EtherChannel
```sh
show etherchannel summary
show interfaces port-channel 1
```

### Verificar VTP y VLANs
```sh
show vtp status
show vlan brief
```

### Verificar STP (Sede Norte)
```sh
show spanning-tree vlan 50
show spanning-tree vlan 60
show spanning-tree vlan 70
```

### Verificar HSRP (Sede Oriente)
```sh
show standby brief
show standby vlan 80
show standby vlan 90
```

### Verificar conectividad extremo a extremo
```sh
ping 172.16.73.34     ! Desde PC-Caja1 hacia Server-BD1 (prueba completa)
ping 172.16.70.2      ! Desde Server-BD1 hacia PC-Caja1
```

---

## Capturas de las pruebas de conectividad y redundancia.

---